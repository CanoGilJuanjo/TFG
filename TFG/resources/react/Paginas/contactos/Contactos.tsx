import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import React, { useState, useRef } from "react";
import MapaContactos from "./MapaContactos";
import axios from "axios";
import emailjs from '@emailjs/browser';

export default function Contactos() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.toString(),
        });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yck90nn', 'template_wru1uk8', form.current, {
                publicKey: 'SfnHSZBJq2pSG-cGJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    /* const handleSubmit = async () => {
        console.log(formData);
        await axios
            .post("http://127.0.0.1:8000/contactos/mail",formData)
            .then((res) => console.log(res))
            .catch(error=>console.log(error)
            )
    }; */

    return (
        <>
            <Container
                bg="transparent"
                maxW="full"
                mt={0}
                marginTop={"50px"}
                centerContent
                overflow="hidden"
                position={"fixed"}
            >
                <Flex>
                    <Box
                        bg={useColorModeValue("#171923", "#171923 ")}
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                    >
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contacto</Heading>
                                        <Text
                                            mt={{ sm: 3, md: 3, lg: 5 }}
                                            color="gray.500"
                                        >
                                            Rellena los campos
                                        </Text>
                                        <Box
                                            py={{
                                                base: 5,
                                                sm: 5,
                                                md: 8,
                                                lg: 10,
                                            }}
                                        >
                                            <VStack
                                                pl={0}
                                                spacing={3}
                                                alignItems="flex-start"
                                            >
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: "2px solid #000000",
                                                    }}
                                                    leftIcon={
                                                        <MdPhone
                                                            color="#FFF"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    +91-988888888
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="fit-content"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: "2px solid #000000",
                                                    }}
                                                    leftIcon={
                                                        <MdEmail
                                                            color="#FFF"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    techxperiencecreators@gmail.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: "2px solid #000000",
                                                    }}
                                                    leftIcon={
                                                        <MdLocationOn
                                                            color="#FFF"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    Málaga, España
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start"
                                        >
                                            <IconButton
                                                aria-label="facebook"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: "#000000" }}
                                                icon={
                                                    <MdFacebook size="28px" />
                                                }
                                                color={"#FFF"}
                                            />
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: "#000000" }}
                                                icon={<BsGithub size="28px" />}
                                                color={"#FFF"}
                                            />
                                            <IconButton
                                                aria-label="discord"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: "#000000" }}
                                                icon={<BsDiscord size="28px" />}
                                                color={"#FFF"}
                                            />
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box
                                        bg={useColorModeValue(
                                            "#EDF2F7",
                                            "#1A202C"
                                        )}
                                        borderRadius="lg"
                                    >
                                        <Box
                                            m={8}
                                            color={useColorModeValue(
                                                "#000",
                                                "#FFF "
                                            )}
                                        >
                                            <VStack spacing={5}>
                                                <form ref={form} onSubmit={sendEmail}>

                                                    <FormControl id="name">
                                                        <FormLabel>
                                                            Nombre
                                                        </FormLabel>
                                                        <InputGroup borderColor="#E0E1E7">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={
                                                                    <BsPerson color="gray.800" />
                                                                }
                                                            />
                                                            <Input
                                                                type="text"
                                                                size="md"
                                                                name="name"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        <FormLabel>
                                                            Correo
                                                        </FormLabel>
                                                        <InputGroup borderColor="#E0E1E7">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={
                                                                    <MdOutlineEmail color="gray.800" />
                                                                }
                                                            />
                                                            <Input
                                                                type="text"
                                                                size="md"
                                                                name="email"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        <FormLabel>
                                                            Mensaje
                                                        </FormLabel>
                                                        <Textarea
                                                            borderColor="gray.300"
                                                            _hover={{
                                                                borderRadius:
                                                                    "gray.300",
                                                            }}
                                                            placeholder="mensaje"
                                                            name="mensaje"
                                                            onChange={handleChange}
                                                        />
                                                    </FormControl>
                                                    <FormControl
                                                        id="name"
                                                        float="right"
                                                    >
                                                        <Input
                                                            variant="solid"
                                                            type={"submit"}
                                                            width={'50%'}
                                                            top={'15px'}
                                                            left={'-60px'}
                                                            bg={useColorModeValue(
                                                                "#1A202C",
                                                                "#EDF2F7"
                                                            )}
                                                            color={useColorModeValue(
                                                                "#FFF",
                                                                "#000"
                                                            )}
                                                            value={"Enviar"}
                                                        />
                                                    </FormControl>
                                                </form>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
            <MapaContactos />
        </>
    );
}
