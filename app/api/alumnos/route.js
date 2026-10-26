import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export const runtime = "nodejs";


export async function GET() {
    try {
        const pool = await getConnection();

        const resultado = await pool.request().query(
            "SELECT id, numCuenta, nombre, apellidoPaterno, apellidoMaterno FROM dbo.tbl_alumno ORDER BY numCuenta"
        );

        return NextResponse.json({
            status:"success",
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