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
  } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
  
  export default function IniciarSesion() {
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
              <FormControl id="email">
                <FormLabel>Correo Electronico</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Recuerda mi equipo</Checkbox>
                  <NavLink style={{color:"#80DAEB"}} to={"/contraseña-olvidada"}>Contraseña olvidada?</NavLink>
                </Stack>
                <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                  Iniciar sesion
                </Button>
                <NavLink style={{color:"#80DAEB"}} to={"/crearcuenta"}>Crear cuenta</NavLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }