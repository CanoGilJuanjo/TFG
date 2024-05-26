import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Heading,
    Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface Entradas {
    id: number;
    cantidad: number;
    precio_total: number;
    qr: string;
    fecha_inicio: string;
    fecha_fin: string;
    id_usuario: number;
    id_evento: number;
    id_carrito: number;
}

export interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    qr: string;
    fecha_inicio: string;
    fecha_fin: string;
    foto: string;
    precio: number;
    localizacion: string;
    boost: string;
    created_at: string;
    updated_at: string;
}

export default function CarritoCompra() {
    const id_usuario = localStorage.getItem('idUsr');

    const apiEntrada = `http://localhost:8000/api/eventoentrada/${id_usuario}`;

    const [entrada, setEntrada] = useState<Entradas>();

    useEffect(() => {
        fetch(apiEntrada)
            .then((response) => response.json())
            .then((data) => {
                setEntrada(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const apiEvento = `http://localhost:8000/api/evento/${entrada?.id_evento}`;

    const [eventos, setEventos] = useState<Evento>();

    useEffect(() => {
        fetch(apiEvento)
            .then((response) => response.json())
            .then((data) => {
                setEventos(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const [entradas, setEntradas] = useState<Entradas[]>([]);

    const [loading, setLoading] = useState(true);

      

    const [error, setError] = useState(null);

    const apiEntradas = `http://localhost:8000/api/entradas/${id_usuario}`;

    const ContenidoCarrito = ({ precio_total, fecha_inicio, fecha_fin, cantidad }) => {
        const fecha = fecha_inicio === fecha_fin ? fecha_inicio : `${fecha_inicio} - ${fecha_fin}`;
        return (
            <>
                <Tr>
                    <Td>{eventos?.foto}</Td>
                    <Td>{eventos?.titulo}</Td>
                    <Td>{fecha}</Td>
                    <Td>{precio_total}</Td>
                    <Td>{cantidad * precio_total}</Td>
                </Tr>
            </>
        );
    };

    useEffect(() => {
        fetch(apiEntradas)
            .then((response) => response.json())
            .then((data) => {
                setEntradas(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <Heading mt={"13vh"}>Carrito</Heading>
            <TableContainer>
                <Table variant="simple" mt={"5vh"}>
                    <Thead>
                        <Tr>
                            <Th>Imagen</Th>
                            <Th>Título</Th>
                            <Th>Fecha</Th>
                            <Th>Precio</Th>
                            <Th>Precio Total (cantidad * precio)</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {entradas.map((data) => {
                                    return (
                                        <ContenidoCarrito 
                                            fecha_inicio={data.fecha_inicio} 
                                            fecha_fin={data.fecha_fin} 
                                            precio_total={data.precio_total}
                                            cantidad={data.cantidad}
                                        ></ContenidoCarrito>
                                    );     
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Precio Total</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}
