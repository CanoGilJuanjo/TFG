import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export const CrearCuenta = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [mail, setMail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateNombreApellido = (value) => {
        const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return re.test(value);
    };

    const nombreS = (e) => {
        const nombre = e.target.value;
        if (validateNombreApellido(nombre)) {
            setNombre(nombre);
            setError("");
        } else {
            setError("El nombre solo puede contener letras y espacios");
        }
    };

    const apellidoS = (e) => {
        const apellido = e.target.value;
        if (validateNombreApellido(apellido)) {
            setApellido(apellido);
            setError("");
        } else {
            setError("El apellido solo puede contener letras y espacios");
        }
    };

    const edadS = (e) => {
        const edad = e.target.value;
        if (edad >= 18) {
            setEdad(edad);
            setError("");
        } else {
            setError("Debes tener al menos 18 años");
        }
    };

    const mailS = (e) => {
        const email = e.target.value;
        if (validateEmail(email)) {
            setMail(email);
            setError("");
        } else {
            setError("Correo electrónico no válido");
        }
    };

    const showPasswordS = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Crear cuenta
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <form action="/temp" method="get">
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>Nombre</FormLabel>
                                        <Input
                                            type="text"
                                            name="nombre"
                                            onChange={nombreS}
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Apellido</FormLabel>
                                        <Input
                                            type="text"
                                            name="apellido"
                                            onChange={apellidoS}
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="edad" isRequired>
                                        <FormLabel>Edad</FormLabel>
                                        <Input
                                            type="number"
                                            name="edad"
                                            onChange={edadS}
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Correo Electronico</FormLabel>
                                <Input
                                    type="email"
                                    name="mail"
                                    onChange={mailS}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Contraseña</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        onChange={showPasswordS}
                                        name="contrasena"
                                    />

                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            {error && <Text color={"red"}>{error}</Text>}
                            <Stack spacing={10} pt={2}>
                                <Input
                                    type="submit"
                                    size="lg"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    value={"Crear cuenta"}
                                ></Input>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={"center"}>
                                    Ya registrado?{" "}
                                    <NavLink
                                        style={{ color: "#80DAEB" }}
                                        to={"/iniciarsesion"}
                                    >
                                        Inicio de sesion
                                    </NavLink>
                                </Text>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};