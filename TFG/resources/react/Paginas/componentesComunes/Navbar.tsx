import React from 'react'
import {NavLink} from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
    children: React.ReactNode
}

const Links = [['Eventos',"eventos"], /* ['Planes',"planes"], */ ['Contacto',"contactos"]]

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} top={0} position={'fixed'} width={'100%'} zIndex={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <NavLink to={"/"}>Logo</NavLink>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link[1]} to={link[1]}>{link[0]}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode} m="4">
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Button m="3" ml={"-2"}>
                            <NavLink to={"/carritoCompra"}>
                                <img src="../../../../../media/carro-de-la-compra.png" alt="" width={"24px"} />
                            </NavLink>
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                border={"2px solid black"}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        "media/user.png"
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <NavLink to={"/perfil"}><MenuItem>Perfil</MenuItem></NavLink>
                                <MenuItem>Configuración</MenuItem>
                                <MenuDivider />
                                <MenuItem>Politicas y condiciones</MenuItem>
                                <MenuDivider/>
                                <NavLink to={"/iniciarsesion"}><MenuItem>Cerrar Sesion</MenuItem></NavLink>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link[0]} to={link[1]}>{link[0]}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}

export default Navbar;