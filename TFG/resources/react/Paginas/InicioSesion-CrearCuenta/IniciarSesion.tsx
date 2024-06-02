import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, redirect } from 'react-router-dom';

export default function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const error = localStorage.getItem("error")
  localStorage.removeItem("error")

  const emailS = (e) => setEmail(e.target.value);
  const contrasenaS = (e) => setContrasena(e.target.value);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Inicio de sesión</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form action="/temp2" method="get">
              <FormControl id="email">
                <FormLabel>Correo Electronico</FormLabel>
                <Input
                  type="email"
                  name="mail"
                  onChange={emailS}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type="password"
                  name="contrasena"
                  onChange={contrasenaS}
                />
                {
                  (error!="" && error!=null) &&(
                    <Text color={"red"} mt={2}>
                      {error}
                    </Text>
                  )
                }
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Recuerda mi equipo</Checkbox>
                  <NavLink style={{ color: "#80DAEB" }} to={"/contraseña-olvidada"}>Contraseña olvidada?</NavLink>
                </Stack>
                <Input
                  type="submit"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  value={"Iniciar sesion"}>
                </Input>
                <NavLink style={{ color: "#80DAEB" }} to={"/crearcuenta"}>Crear cuenta</NavLink>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}