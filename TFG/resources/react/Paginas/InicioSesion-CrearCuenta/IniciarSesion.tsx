import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Heading,
    useColorModeValue,
    Button,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function IniciarSesion() {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [contrasenaError, setContrasenaError] = useState(false);

    const emailS = (e) => setEmail(e.target.value);
    const contrasenaS = (e) => setContrasena(e.target.value);


    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Inicio de sesión</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <form action="/temp2" method="get">
                            <FormControl id="email">
                                <FormLabel>Correo Electronico</FormLabel>
                                <Input
                                    type="email"
                                    name="mail"
                                    onChange={emailS}
                                />
                                {emailError && (
                                    <Text color="red.500" mt={2}>
                                        El correo electrónico es incorrecto.
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    type="password"
                                    name="contrasena"
                                    onChange={contrasenaS}
                                />
                                {contrasenaError && (
                                    <Text color="red.500" mt={2}>
                                        La contraseña es incorrecta.
                                    </Text>
                                )}
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox>Recuerda mi equipo</Checkbox>
                                    <NavLink
                                        style={{ color: "#80DAEB" }}
                                        to={"/contraseña-olvidada"}
                                    >
                                        Contraseña olvidada?
                                    </NavLink>
                                </Stack>
                                <input type="submit" value={"Iniciar sesión"} />
                                <NavLink
                                    style={{ color: "#80DAEB" }}
                                    to={"/crearcuenta"}
                                >
                                    Crear cuenta
                                </NavLink>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
