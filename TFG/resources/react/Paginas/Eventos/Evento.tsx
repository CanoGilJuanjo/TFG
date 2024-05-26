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

export const Evento = () => {
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
            <div style={{marginTop:"10vh"}}>
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
                                    templateAreas={`"precio1 precio2 precio3 precio4"`}
                                    gridTemplateRows={"1fr 1fr 1fr 1fr"}
                                    h="300px"
                                    gap="6"
                                    p={"30"}
                                    pb={"100px"}
                                >
                                    <GridItem area={"precio1"}>
                                        <Center py={6} pt={"120px"}>
                                            <Box
                                                maxW={"330px"}
                                                w={"full"}
                                                bg={useColorModeValue(
                                                    "white",
                                                    "gray.800"
                                                )}
                                                boxShadow={"2xl"}
                                                rounded={"md"}
                                                overflow={"hidden"}
                                            >
                                                <Stack
                                                    textAlign={"center"}
                                                    p={6}
                                                    color={useColorModeValue(
                                                        "gray.800",
                                                        "white"
                                                    )}
                                                    align={"center"}
                                                >
                                                    <Stack
                                                        direction={"row"}
                                                        align={"center"}
                                                        justify={"center"}
                                                    >
                                                        <Text
                                                            fontSize={"6xl"}
                                                            fontWeight={800}
                                                        >
                                                            10.90
                                                        </Text>
                                                        <Text fontSize={"3xl"}>
                                                            €
                                                        </Text>
                                                    </Stack>
                                                </Stack>

                                                <Box
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.900"
                                                    )}
                                                    px={6}
                                                    py={10}
                                                >
                                                    <List spacing={3}>
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

                                                    <Button
                                                        mt={10}
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
                                                    >
                                                        Comprar
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Center>
                                    </GridItem>
                                    <GridItem area={"precio2"}>
                                        <Center py={6} pt={"120px"}>
                                            <Box
                                                maxW={"330px"}
                                                w={"full"}
                                                bg={useColorModeValue(
                                                    "white",
                                                    "gray.800"
                                                )}
                                                boxShadow={"2xl"}
                                                rounded={"md"}
                                                overflow={"hidden"}
                                            >
                                                <Stack
                                                    textAlign={"center"}
                                                    p={6}
                                                    color={useColorModeValue(
                                                        "gray.800",
                                                        "white"
                                                    )}
                                                    align={"center"}
                                                >
                                                    <Stack
                                                        direction={"row"}
                                                        align={"center"}
                                                        justify={"center"}
                                                    >
                                                        <Text
                                                            fontSize={"6xl"}
                                                            fontWeight={800}
                                                        >
                                                            20.99
                                                        </Text>
                                                        <Text fontSize={"3xl"}>
                                                            €
                                                        </Text>
                                                    </Stack>
                                                </Stack>

                                                <Box
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.900"
                                                    )}
                                                    px={6}
                                                    py={10}
                                                >
                                                    <List spacing={3}>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            2 copas
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
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

                                                    <Button
                                                        mt={10}
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
                                                    >
                                                        Comprar
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Center>
                                    </GridItem>
                                    <GridItem area={"precio3"}>
                                        <Center py={6} pt={"120px"}>
                                            <Box
                                                maxW={"330px"}
                                                w={"full"}
                                                bg={useColorModeValue(
                                                    "white",
                                                    "gray.800"
                                                )}
                                                boxShadow={"2xl"}
                                                rounded={"md"}
                                                overflow={"hidden"}
                                            >
                                                <Stack
                                                    textAlign={"center"}
                                                    p={6}
                                                    color={useColorModeValue(
                                                        "gray.800",
                                                        "white"
                                                    )}
                                                    align={"center"}
                                                >
                                                    <Stack
                                                        direction={"row"}
                                                        align={"center"}
                                                        justify={"center"}
                                                    >
                                                        <Text
                                                            fontSize={"6xl"}
                                                            fontWeight={800}
                                                        >
                                                            50.99
                                                        </Text>
                                                        <Text fontSize={"3xl"}>
                                                            €
                                                        </Text>
                                                    </Stack>
                                                </Stack>

                                                <Box
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.900"
                                                    )}
                                                    px={6}
                                                    py={10}
                                                >
                                                    <List spacing={3}>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            2 copas
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            Pulsera para entrar y salir
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            Acceso a zona vip
                                                        </ListItem>
                                                    </List>

                                                    <Button
                                                        mt={10}
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
                                                    >
                                                        Comprar
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Center>
                                    </GridItem>
                                    <GridItem area={"precio4"}>
                                        <Center py={6} pt={"120px"}>
                                            <Box
                                                maxW={"330px"}
                                                w={"full"}
                                                bg={useColorModeValue(
                                                    "white",
                                                    "gray.800"
                                                )}
                                                boxShadow={"2xl"}
                                                rounded={"md"}
                                                overflow={"hidden"}
                                            >
                                                <Stack
                                                    textAlign={"center"}
                                                    p={6}
                                                    color={useColorModeValue(
                                                        "gray.800",
                                                        "white"
                                                    )}
                                                    align={"center"}
                                                >
                                                    <Stack
                                                        direction={"row"}
                                                        align={"center"}
                                                        justify={"center"}
                                                    >
                                                        <Text
                                                            fontSize={"6xl"}
                                                            fontWeight={800}
                                                        >
                                                            125.85
                                                        </Text>
                                                        <Text fontSize={"3xl"}>
                                                            €
                                                        </Text>
                                                    </Stack>
                                                </Stack>

                                                <Box
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.900"
                                                    )}
                                                    px={6}
                                                    py={10}
                                                >
                                                    <List spacing={3}>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            2 copas
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            Pulsera para entrar y salir
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={CheckIcon}
                                                                color="green.400"
                                                            />
                                                            Acceso a zona vip + meeting con artistas
                                                        </ListItem>
                                                    </List>

                                                    <Button
                                                        mt={10}
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
                                                    >
                                                        Comprar
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Center>
                                    </GridItem>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div id="contenedor-formulario">
                        <Stack pt={"400px"} alignItems={"center"} pb={"40px"}>
                            <FormControl isRequired width={"500px"}>
                                <FormLabel>Nombre</FormLabel>
                                <Input placeholder="Nombre" />
                            </FormControl>
                            <FormControl isRequired width={"500px"}>
                                <FormLabel>Apellidos</FormLabel>
                                <Input placeholder="Apellido" />
                            </FormControl>
                            <FormControl isRequired width={"500px"}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                                <FormHelperText>
                                    No se compartira tu información con nadie
                                </FormHelperText>
                            </FormControl>
                            <FormControl isRequired width={"500px"}>
                                <FormLabel>Teléfono</FormLabel>
                                <Input
                                    placeholder="(+34) ___-___-___"
                                    border={0}
                                />
                            </FormControl>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};
