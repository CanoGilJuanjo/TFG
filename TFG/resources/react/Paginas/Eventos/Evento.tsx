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

    const Carta = ({ precio, fecha_inicio, fecha_fin }) => {
        return (
            <form action="/temp3" method="GET" onSubmit={(e) => { if(idUsuario == null) e.preventDefault() }}>
                <GridItem>
                    <Center py={6} pt={"120px"}>
                        <Box
                            maxW={"330px"}
                            w={"full"}
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
                            >
                                <List spacing={3} height={"13vh"}>
                                    <ListItem>
                                        <ListIcon
                                            as={CheckIcon}
                                            color="green.400"
                                        />
                                        2 copas
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={CloseIcon}
                                            color="red.400"
                                        />
                                        Pulsera para entrar y salir
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={CloseIcon}
                                            color="red.400"
                                        />
                                        Acceso a zona vip
                                    </ListItem>
                                </List>

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
                            </Box>
                        </Box>
                    </Center>
                </GridItem>
            </form>
        );
    };

    if (loading)
        return (
            <Spinner
                color={useColorModeValue("black", "blue.100")}
                marginTop={"10vh"}
                marginBottom={"50px"}
            ></Spinner>
        );

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
                    <div key={eventos?.id}>
                        <div style={{ width: "100%", height: "500px" }}>
                            <Grid
                                templateAreas={`"img title-boost"
                                                "img information"`}
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
                                        src={"../" + eventos?.foto}
                                        alt="Imagen del evento"
                                        width={"800vw"}
                                        style={{ borderRadius: "10px" }}
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
                                        textAlign={"left"}
                                        pl={"60"}
                                    >
                                        {eventos?.boost}
                                    </Text>
                                </GridItem>
                                <GridItem pl="2" area={"information"}>
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
                                    <Text fontSize={"20px"}>
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
                                    mb={"35vh"}
                                    justifyContent={"center"}
                                >
                                    {precios.map((data) => {
                                        if (data.id_evento == eventos?.id) {
                                            return (
                                                <Carta
                                                    precio={data.precio}
                                                    fecha_inicio={eventos.fecha_inicio}
                                                    fecha_fin={eventos.fecha_fin}
                                                ></Carta>
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
