import { DeleteIcon } from "@chakra-ui/icons";
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
    Button,
} from "@chakra-ui/react";
import React, { lazy, useEffect, useState } from "react";
import App from "../componentesComunes/PaypalComponent";

export interface Entradas {
    id: number;
    cantidad: number;
    foto_evento: string;
    titulo_evento: string;
    precio_total: number;
    qr: string;
    fecha_inicio: string;
    fecha_fin: string;
    id_usuario: number;
    id_evento: number;
    id_carrito: number;
}

export default function CarritoCompra() {
    const idUsuario =
        localStorage.getItem("idUsr") == "" ||
        localStorage.getItem("idUsr") == null
            ? ""
            : localStorage.getItem("idUsr");
    const [entradas, setEntradas] = useState<Entradas[]>([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [precioTotal, setPrecioTotal] = useState(0);
    const apiEntradas = `http://localhost:8000/api/entradas/${idUsuario}`;

    useEffect(() => {
        fetch(apiEntradas)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                setEntradas(data);
                let precio = 0;
                for(let i of data){
                    precio += parseFloat(i.precio_total)
                }
                setPrecioTotal(precio)
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    const [anchoInner, setAncho] = useState(window.innerWidth);
    const anchoInnerS = () => {
        setAncho(window.innerWidth);
    }
    //Control para el ancho
    window.onresize = anchoInnerS;

    const borrarEntradas = (titulo) =>{  
        for(let i = 0;i<entradas.length;i++){
          if(entradas[i].titulo_evento == titulo){
            if(i == 0){
                entradas.shift();
            }else if(i < entradas.length - 1){
                entradas.splice(i,1);
            }else if(i == entradas.length-1){
                entradas.pop()
            }
          }
        }
        setAncho(anchoInner-1)
        setAncho(anchoInner+1);

        const apiDelete = `http://localhost:8000/api/entrada/${titulo}`;
            fetch(apiDelete)
                .catch((error) => {
                    setError(error);
                });
      }
     
    const ContenidoCarrito = ({ precio_total, fecha_inicio, fecha_fin, cantidad, foto_evento, titulo_evento}) => {
        const fecha = fecha_inicio === fecha_fin ? fecha_inicio : `${fecha_inicio} - ${fecha_fin}`;
        return (
            <>
                <Tr>
                    <Td>
                        <img
                            src={foto_evento}
                            style={{
                                height: "30vh",
                                width: "20vw",
                                maxHeight: "30vh",
                                maxWidth: "30vw",
                                borderRadius: "20px",
                            }}
                            loading={"lazy"}
                            alt={titulo_evento}
                        />
                    </Td>
                    <Td>{titulo_evento}</Td>
                    <Td>{cantidad}</Td>
                    <Td>{fecha}</Td>
                    <Td>{precio_total}€</Td>
                    <Td>{cantidad * precio_total}€</Td>
                    <Td><Button justifySelf={"left"} className='eliminar' onClick={()=>{borrarEntradas(titulo_evento)}}><DeleteIcon></DeleteIcon></Button></Td>
                </Tr>
            </>
        );
    };

    if (error) return "error";
    return loading ? ( <Spinner color={useColorModeValue("black", "blue.100")} marginTop={"10vh"} marginBottom={"50px"} />) : (
        <>
            <Heading mt={"13vh"}>Carrito</Heading>
            <TableContainer>
                <Table variant="simple" mt={"5vh"}>
                    <Thead>
                        <Tr>
                            <Th>Imagen</Th>
                            <Th>Título</Th>
                            <Th>Cantidad</Th>
                            <Th>Fecha</Th>
                            <Th>Precio</Th>
                            <Th>Precio Total</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody style={{width: anchoInner-1}}>
                        {entradas.map((data) => {
                            //setPrecioTotal(precioTotal + (data.precio_total * data.cantidad));
                            return (
                                <ContenidoCarrito
                                    fecha_inicio={data.fecha_inicio}
                                    fecha_fin={data.fecha_fin}
                                    precio_total={data.precio_total}
                                    cantidad={data.cantidad}
                                    foto_evento={data.foto_evento}
                                    titulo_evento={data.titulo_evento}
                                ></ContenidoCarrito>
                            );
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th style={{fontSize: "25px"}}>Precio Total</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th style={{fontSize: "25px"}}>{precioTotal}€</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <div style={{width: "100%", fontSize: "22px", marginBottom: "25px", backgroundColor: useColorModeValue("#E0E0E0", ""), justifyContent: "center", display: "flex"}}>
                <App></App>
            </div>
        </>
    );
}
