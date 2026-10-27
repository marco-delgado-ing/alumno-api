import { NextResponse } from "next/server";
import { getConnection,sql } from "@/lib/db";

export const runtime = "nodejs";


export async function GET() {
    try {
        const pool = await getConnection();

        const resultado = await pool.request().query(
            "SELECT id, numCuenta, nombre, apellidoPaterno, apellidoMaterno FROM dbo.tbl_alumno ORDER BY numCuenta"
        );

        return NextResponse.json({
            status: "success",
            data: resultado.recordset
        });

    } catch (error) {
        console.error("Ocurrió un error al consultar alumnos");
        return NextResponse.json(
            {
                status: "error",
                message: "No fue posible consultar los registros de alumnos",
                detalle: error.message
            },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const datos = await request.json();
        const {
            numCuenta,
            nombre,
            apellidoPaterno,
            apellidoMaterno
        } = datos;

        //Mecanismos de protección

        const pool = await getConnection();

        const resultado = await pool.request()
            .input("numCuenta", sql.VarChar(20), numCuenta.trim())
            .input("nombre", sql.VarChar(250), nombre.trim())
            .input("apellidoPaterno", sql.VarChar(250), apellidoPaterno.trim())
            .input("apellidoMaterno", sql.VarChar(250), apellidoMaterno.trim())
            .query(`INSERT INTO dbo.tbl_alumno (
                    numCuenta,
                    nombre,
                    apellidoPaterno,
                    apellidoMaterno
                )
                OUTPUT
                    INSERTED.id,
                    INSERTED.numCuenta,
                    INSERTED.nombre,
                    INSERTED.apellidoPaterno,
                    INSERTED.apellidoMaterno
                VALUES
                    (
                    @numCuenta,
                    @nombre,
                    @apellidoPaterno,
                    @apellidoMaterno
                    )
                `
            );

        return NextResponse.json(
            {
                status: "success",
                message: "Registraste al alumno correctamente",
                data: resultado.recordset[0]
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                status: "error",
                message: "Ocurrió un error al insertar el alumno"
            }
        );

    }

}