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
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import { Form, NavLink } from "react-router-dom";

export const CrearCuenta = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [mail, setMail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");

    const apellidoS = (e) => {
        setApellido(e.target.value);
    };
    const nombreS = (e) => {
        setNombre(e.target.value);
    };
    const showPasswordS = (e) => {
        setShowPassword(e.target.value);
    };
    const mailS = (e) => {
        setMail(e.target.value);
    };
    const edadS = (e) => {
        setEdad(e.target.value);
    };
    
    const form = useRef();
    /* const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4ya1sj1', 'template_42m8ppc', form.current ,{
        publicKey: 'oCt0CQBlW7L6A3Vh4',
      })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        setError("Error, el email ya existe.");
      },
    ); 
  }*/
    /* const comprobacionSend = async () => {
      if(edad<18){
        document.querySelector("input[name=''edad]").placeholder = "No valido";
      }
      if (nombre != "" && mail != "") {
        //Enviamos el mail
      }
    } */
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
                            <Input type="email" name="mail" onChange={mailS} />
                            {error && (<Text>Error, el email ya existe.{/* {error} */}</Text>)}
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    onChange={showPasswordS}
                                    name="contrasena"
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
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
                        <Stack spacing={10} pt={2}>
                            <input type="submit" value="enviar" />
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
                </Box>
            </Stack>
        </Flex>
    );
};
