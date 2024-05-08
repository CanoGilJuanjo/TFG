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
} from '@chakra-ui/react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react';
import { NavLink } from 'react-router-dom';

export const CrearCuenta = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [mail, setMail] = useState("")
  const apellidoS = (e) => {
    setApellido(e.target.value)
  }
  const nombreS = (e) => {
    setNombre(e.target.value)
  }
  const mailS = (e) => {
    setMail(e.target.value)
  }
  const useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4ya1sj1', 'template_42m8ppc', form.current ,{
        publicKey: 'YOUR_PUBLIC_KEY',
      })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
    const comprobacionSend = async () => {
      if (nombre != "" && mail != "") {
        //Enviamos el mail
      }
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Crear cuenta
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" name='nombre' onChange={nombreS} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Apellido</FormLabel>
                    <Input type="text" name='apellido' onChange={apellidoS} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Correo Electronico</FormLabel>
                <Input type="email" name='mail' onChange={mailS} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={comprobacionSend}>
                  Crear cuenta
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Ya registrado? <NavLink style={{ color: "#80DAEB" }} to={"/IniciarSesion"}>Inicio de sesion</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }
