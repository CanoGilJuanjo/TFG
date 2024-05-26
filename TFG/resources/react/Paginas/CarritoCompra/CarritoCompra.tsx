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
    const [entradas, setEntradas] = useState<Entradas[]>([]);

    const [loading, setLoading] = useState(true);

    const id_usuario = localStorage.getItem('idUsr');

    const [error, setError] = useState(null);

    const apiEntradas = `http://localhost:8000/api/entradas/${id_usuario}`;

    const [resultado, setResultado] = useState<number[]>();

    const [arrayEventos, setArrayEventos] = useState<any[]>([]);

    useEffect(() => {
        fetch(apiEntradas)
            .then((response) => response.json())
            .then((data) => {
                setEntradas(data);
                for(let entrada of data){
                    if(resultado?.length == 0) {
                        console.log(entrada.id_evento);
                        setResultado(entrada.id_evento);
                    } else if(!resultado?.includes(entrada.id_evento)){
                        
                        setResultado([...resultado, entrada.id_evento]);
                    }
                }
                
                

                resultado?.map((id_evento) => {
                    fetch(`http://localhost:8000/api/evento/${id_evento}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setArrayEventos([...arrayEventos, data]);
                            console.log(arrayEventos);
                            
                        })
                        .catch((error) => {
                            setError(error);
                        });
                })
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const ContenidoCarrito = ({ precio_total, fecha_inicio, fecha_fin, cantidad, id_evento }) => {
        const fecha = fecha_inicio === fecha_fin ? fecha_inicio : `${fecha_inicio} - ${fecha_fin}`;
        return (
            <>
                <Tr>
                    <Td>{arrayEventos[arrayEventos.indexOf(id_evento)].foto}</Td>
                    <Td>{arrayEventos[arrayEventos.indexOf(id_evento)].titulo}</Td>
                    <Td>{fecha}</Td>
                    <Td>{precio_total}</Td>
                    <Td>{cantidad * precio_total}</Td>
                </Tr>
            </>
        );
    };

    const apiEntrada = `http://localhost:8000/api/evento/${id_usuario}`;

    const [eventos, setEventos] = useState<Evento>();

    useEffect(() => {
        fetch(apiEntrada)
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
                                            id_evento={data.id_evento}
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
