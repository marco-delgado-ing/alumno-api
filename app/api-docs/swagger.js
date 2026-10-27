export const swaggerSpec = {
    openapi: "3.0.3",

    info: {
        title: "API de Alumnos",
        version: "1.0.0",
        description: "API desarrollada con Next.js y SQL Server."
    },

    paths: {
        "/api/alumnos": {
            get: {
                summary: "Consultar alumnos",
                tags: ["Alumnos"],

                responses: {
                    "200": {
                        description: "Consulta exitosa"
                    },
                    "500": {
                        description: "Error de servidor"
                    }
                }
            },

            post: {
                summary: "Registrar alumno",
                tags: ["Alumnos"],

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                type: "object",

                                required: [
                                    "numCuenta",
                                    "nombre",
                                    "apellidoPaterno",
                                    "apellidoMaterno"
                                ],

                                properties: {
                                    numCuenta: {
                                        type: "string",
                                        example: "999999998"
                                    },

                                    nombre: {
                                        type: "string",
                                        example: "Carlos"
                                    },

                                    apellidoPaterno: {
                                        type: "string",
                                        example: "Ramírez"
                                    },

                                    apellidoMaterno: {
                                        type: "string",
                                        example: "Gómez"
                                    }
                                }
                            }
                        }
                    }
                },

                responses: {
                    "201": {
                        description: "Alumno registrado"
                    },
                    "400": {
                        description: "Datos inválidos"
                    },
                    "409": {
                        description: "Registro duplicado"
                    },
                    "500": {
                        description: "Error de servidor"
                    }
                }
            }
        },

        // "/api/alumnos/con-direccion": {
        //     post: {
        //         summary: "Registrar alumno con dirección",
        //         description:
        //             "Ejecuta el procedimiento almacenado sp_RegistrarAlumnoCompleto.",
        //         tags: ["Alumnos"],

        //         requestBody: {
        //             required: true,

        //             content: {
        //                 "application/json": {
        //                     schema: {
        //                         type: "object",

        //                         required: [
        //                             "numCuenta",
        //                             "nombre",
        //                             "apellidoPaterno",
        //                             "apellidoMaterno",
        //                             "calle",
        //                             "numeroExterior",
        //                             "codigoPostal"
        //                         ],

        //                         properties: {
        //                             numCuenta: {
        //                                 type: "string",
        //                                 example: "999999996"
        //                             },
        //                             nombre: {
        //                                 type: "string",
        //                                 example: "Laura"
        //                             },
        //                             apellidoPaterno: {
        //                                 type: "string",
        //                                 example: "Pérez"
        //                             },
        //                             apellidoMaterno: {
        //                                 type: "string",
        //                                 example: "López"
        //                             },
        //                             calle: {
        //                                 type: "string",
        //                                 example: "Av. Universidad"
        //                             },
        //                             numeroExterior: {
        //                                 type: "string",
        //                                 example: "300"
        //                             },
        //                             codigoPostal: {
        //                                 type: "string",
        //                                 example: "04360"
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         },

        //         responses: {
        //             "201": {
        //                 description: "Alumno y dirección registrados"
        //             },
        //             "400": {
        //                 description: "Datos inválidos"
        //             },
        //             "409": {
        //                 description: "Registro duplicado"
        //             },
        //             "500": {
        //                 description: "Error de servidor"
        //             }
        //         }
        //     }
        // }
    }
};