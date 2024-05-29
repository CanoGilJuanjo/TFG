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
    useColorModeValue,
    Input,
    Spinner,
} from "@chakra-ui/react";
import React, { lazy, useEffect, useState } from "react";


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
    const idUsuario = (localStorage.getItem("idUsr") == "" || localStorage.getItem("idUsr") == null)? "" : localStorage.getItem("idUsr");
    const [entradas,setEntradas] = useState<Entradas[]>([])
    const [evento,setEvento] = useState<Evento[]>([])
    const [error,setError] = useState<any>(null)
    const [loading,setLoading] = useState(true)
    const [precioTotal,setPrecioTotal] = useState(0)
    const apiEntradas = `http://localhost:8000/api/entradas/${idUsuario}`
    const [ids,setIds] = useState<number[]>([])
    useEffect(()=>{
        fetch(apiEntradas)
        .then(respuesta => respuesta.json())
        .then((respuesta)=>{  
            respuesta.map((eventoR)=>{
                if(!ids.includes(eventoR.id_evento)){
                    setIds([...ids,eventoR.id_evento])
                    const apiEvento = `http://localhost:8000/api/evento/${eventoR.id_evento}`;
                    fetch(apiEvento)
                    .then(resquest => resquest.json())
                    .then((resquest)=>{
                        setEvento([...evento,resquest])
                    }) 
                }
            }) 
            return respuesta;
        }).then((respuesta)=>{
            setEntradas(respuesta) 
            setLoading(false)
        })
        .catch(error=>setError(error))
    },[evento])

    const ContenidoCarrito = ({ precio_total, fecha_inicio, fecha_fin, cantidad, foto,titulo }) => {
        const fecha = fecha_inicio === fecha_fin ? fecha_inicio : `${fecha_inicio} - ${fecha_fin}`;
        return (
            <>
                <Tr>
                    <Td><img src={foto} style={{height:"30vh",width:"30vw",maxHeight:"30vh",maxWidth:"30vw",borderRadius:"20px"}} loading={"lazy"} alt={titulo} /></Td>
                    <Td>{titulo}</Td>
                    <Td>{fecha}</Td>
                    <Td>{precio_total}</Td>
                    <Td>{cantidad * precio_total}</Td>
                </Tr>
            </>
        );
    };

    if(error) return("error")
    return (
    (loading)? <Spinner color={useColorModeValue("black","blue.100")} marginTop={"10vh"} marginBottom={"50px"} />:
    
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
                            <Th>Precio Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {entradas.map((data) => {
                            return(
                                evento.map((evento)=>{
                                    if(evento.id == data.id_evento){   
                                        return (
                                            <ContenidoCarrito 
                                                fecha_inicio={data.fecha_inicio} 
                                                fecha_fin={data.fecha_fin} 
                                                precio_total={data.precio_total}
                                                cantidad={data.cantidad}
                                                foto={evento.foto}
                                                titulo={evento.titulo}
                                            ></ContenidoCarrito>
                                        );     
                                    }
                                })
                            )
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Precio Total</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>{precioTotal}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}
