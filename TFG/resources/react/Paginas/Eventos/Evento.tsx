import {
    Box,
    Grid,
    GridItem,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Badge,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import App from "../componentesComunes/PaypalComponent";

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
export interface Precio {
    id: number;
    precio: number;
    descripcion: string;
    tipo_precio: number;
    id_evento: number;
    created_at: string;
    updated_at: string;
}

export const Evento = () => {
    const idUsuario: any = (localStorage.getItem("idUsr") == null || localStorage.getItem("idUsr") == "")? null : localStorage.getItem("idUsr");
    const idCarrito: any = (localStorage.getItem("idCarrito") == null || localStorage.getItem("idCarrito") == "")? null : localStorage.getItem("idCarrito");

    const { id } = useParams();

    const apiURL = `http://localhost:8000/api/evento/${id}`;

    const [eventos, setEventos] = useState<Evento>();

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiURL)
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

    const apiPrecios = "http://localhost:8000/api/precios";

    const [precios, setPrecios] = useState<Precio[]>([]);

    useEffect(() => {
        fetch(apiPrecios)
            .then((response) => response.json())
            .then((data) => {
                setPrecios(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    const Carta = ({ precio, fecha_inicio, fecha_fin, descripcion, titulo_evento, foto_evento }) => {
        return (
            <form action="/temp3" method="GET" style={{height:"fit-content"}} onSubmit={(e) => { if(idUsuario == null) e.preventDefault() }}>
                <GridItem maxH={"30vh"}>
                    <Center py={6} pt={"120px"}>
                        <Box
                            maxW={"300px"}
                            w={"full"}
                            maxH={"47vh"}
                            bg={useColorModeValue("white", "gray.800")}
                            boxShadow={"2xl"}
                            rounded={"md"}
                            overflow={"hidden"}
                        >
                            <Stack
                                textAlign={"center"}
                                p={6}
                                color={useColorModeValue("gray.800", "white")}
                                align={"center"}
                            >
                                <Stack
                                    direction={"row"}
                                    align={"center"}
                                    justify={"center"}
                                >
                                    <Text fontSize={"6xl"} fontWeight={800}>
                                    {precio}
                                    </Text>
                                    <Text fontSize={"3xl"}>€</Text>
                                </Stack>
                            </Stack>

                            <Box
                                bg={useColorModeValue("gray.50", "gray.900")}
                                px={6}
                                py={10}
                                maxH={"30vh"}
                            >
                                <Text fontSize={"15px"} height={"10px"}>
                                    {descripcion}
                                </Text>

                                <Input
                                    type="hidden"
                                    name="id_usuario"
                                    value={idUsuario}
                                    ></Input>
                                <Input
                                    type="hidden"
                                    name="id_evento"
                                    value={eventos?.id}
                                    ></Input>
                                <Input
                                    type="hidden"
                                    name="id_carrito"
                                    value={idCarrito}
                                    ></Input>

                                <Input
                                    type="hidden"
                                    name="fecha_inicio"
                                    value={fecha_inicio}
                                    ></Input>

                                <Input
                                    type="hidden"
                                    name="fecha_fin"
                                    value={fecha_fin}
                                    ></Input>

                                <Input
                                    type="hidden"
                                    name="precio"
                                    value={precio}
                                ></Input>

                                <Input
                                    type="hidden"
                                    name="titulo_evento"
                                    value={titulo_evento}
                                ></Input>

                                <Input
                                    type="hidden"
                                    name="foto_evento"
                                    value={foto_evento}
                                ></Input>


                                <Button mt={10}
                                w={"full"}
                                bg={"green.400"}
                                color={"white"}
                                rounded={"xl"}
                                boxShadow={
                                    "0 5px 20px 0px rgb(72 187 120 / 43%)"
                                }
                                _hover={{
                                    bg: "green.500",
                                }}
                                _focus={{
                                    bg: "green.500",
                                }} 
                                type="submit"
                                >
                                    Añadir al carrito
                                </Button>
                                {
                                    (idUsuario)? <App></App>: <p>Inicia sesion para comprar entradas</p>
                                }
                            </Box>
                        </Box>
                    </Center>
                </GridItem>
            </form>
            
        );
    };
    //Calculo ancho
    const [anchoInner,setAncho] = useState(window.innerWidth);
    const anchoInnerS = ()=>{
        setAncho(window.innerWidth);
    }
    //Control para el ancho
    window.onresize = anchoInnerS;



    if (loading) return <Spinner color={useColorModeValue("black","blue.100")} marginTop={"10vh"} marginBottom={"50px"}></Spinner>

    if (error) return <p>Error!</p>;

    return (
        <>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="../../../css/evento.css"
            />
            <div style={{ marginTop: "10vh" }}>
                <div>
                    <div key={eventos?.id} style={{display:"flex",flexFlow:"column wrap"}}>
                        <div style={{ width: "100%", height: "500px" }}>
                            <Grid
                                templateAreas={(anchoInner<850)?`"img title-boost" "information information"`:`"img title-boost""img information"`}
                                gridTemplateRows={"1fr 1fr 30px"}
                                gridTemplateColumns={"1fr 1fr"}
                                h="600px"
                                gap="6"
                                p={"30"}
                            >
                                <GridItem
                                    p={"20px"}
                                    alignContent={"center"}
                                    area={"img"}
                                >
                                    <img

                                        src={eventos?.foto}

                                        alt="Imagen del evento"
                                        width={"800vw"}
                                        style={{borderRadius:"10px",maxHeight:"70vh",maxWidth:"40vw"}}
                                    />
                                </GridItem>
                                <GridItem
                                    pl="2"
                                    area={"title-boost"}
                                    alignContent={"center"}
                                >
                                    <Text fontSize={"40px"} fontWeight="bold">
                                        {eventos?.titulo}
                                    </Text>
                                    <Text
                                        fontSize={"30px"}
                                        pl={"60"}
                                    >
                                        {eventos?.boost}
                                    </Text>
                                </GridItem>
                                <GridItem pl="2" area={"information"} mb={"15vh"}>
                                    <Text
                                        fontSize={"40px"}
                                        textAlign={"center"}
                                        fontWeight={"500"}
                                        pb={"10px"}
                                    >
                                        Descripción del evento
                                    </Text>
                                    <Stack
                                        direction={"row"}
                                        pb={"10px"}
                                        justifyContent={"center"}
                                    >
                                        <Text fontSize={"large"}>Inicio:</Text>
                                        <Badge
                                            color="gray.400"
                                            borderRadius={"5px"}
                                            fontSize="large"
                                        >
                                            {eventos?.fecha_inicio}
                                        </Badge>
                                        <Text fontSize={"large"}>- Fin:</Text>
                                        <Badge
                                            color="gray.400"
                                            borderRadius={"5px"}
                                            fontSize="large"
                                        >
                                            {eventos?.fecha_fin}
                                        </Badge>
                                    </Stack>
                                    <Text fontSize={"large"}>
                                        {eventos?.descripcion}
                                    </Text>
                                </GridItem>
                            </Grid>
                        </div>
                        <div className="precios-evento">
                            <div className="cards">
                                <Grid
                                    templateColumns={
                                        "repeat(auto-fill, minmax(330px, 1fr))"
                                    }
                                    h="300px"
                                    gap="6"
                                    p={"30"}
                                    mb={(anchoInner<850)?"110vh":"35vh"}
                                    justifyContent={"center"}
                                >
                                    {precios.map((data) => {
                                        if (data.id_evento == eventos?.id) {
                                            return (
                                                <>
                                                    <Carta
                                                    precio={data.precio}
                                                    fecha_inicio={eventos.fecha_inicio}
                                                    fecha_fin={eventos.fecha_fin}
                                                    descripcion={data.descripcion}
                                                    titulo_evento={eventos.titulo}
                                                    foto_evento={eventos.foto}
                                                    ></Carta>
                                                </>
                                            );
                                        }
                                    })}
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
