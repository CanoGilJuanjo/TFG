import React, { useEffect, useState } from 'react'
'use client'

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

export interface suscripcion{
    id:number,
    tipo:string,
    fecha_inicio:string,
    fecha_fin:string,
    id_usuario:number
}

const tipoPrecio = [{tipo:"semanal",precio:1},{tipo:"mensual",precio:2.99},{tipo:"6 meses",precio:6.95},{tipo:"anual",precio:29.99}];
const ventajas = ["Sin anuncios","Alerta de ofertas","Alerta de preventas","Aumento de experiencia en compras"]
const Carta = ({tipo,precio,ventajas})=>{
    return(
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                    <Text fontSize={'6xl'} fontWeight={800}>
                    {precio}
                    </Text>
                    <Text fontSize={'3xl'}>€</Text>
                    <Text color={'gray.500'}>/{tipo}</Text>
                </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>    
                        <ListItem>
                        <ListIcon as={CheckIcon} color="green.400" />
                        {ventajas[3]}
                        </ListItem>
                        <ListItem>
                        <ListIcon as={(tipo=="semanal")?CloseIcon:CheckIcon} color={(tipo=="semanal")?"red":"green.400"} />
                        {ventajas[0]}
                        </ListItem>
                        <ListItem>
                        <ListIcon as={(tipo=="semanal"||tipo=="mensual")?CloseIcon:CheckIcon} color={(tipo=="semanal"||tipo=="mensual")?"red":"green.400"} />
                        {ventajas[1]}
                        </ListItem>
                        <ListItem>
                        <ListIcon as={(tipo=="semanal"||tipo=="mensual"||tipo=="6 meses")?CloseIcon:CheckIcon} color={(tipo=="semanal"||tipo=="mensual"||tipo=="6 meses")?"red":"green.400"} />
                        {ventajas[2]}
                        </ListItem>
                    </List>
                    <Button
                        mt={10}
                        w={'full'}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                        bg: 'green.500',
                        }}
                        _focus={{
                        bg: 'green.500',
                        }}>
                        Suscribirse
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}

export const Suscripciones = () => {
    const [idUsuario,setIdUsuario] = useState<any>()
    useEffect(()=>{
        setIdUsuario((localStorage.getItem("idUsr") == "" || localStorage.getItem("idUsr") == null)? false : localStorage.getItem("idUsr"))
    },[])

    const [suscripciones,setSuscripciones] = useState()

    return (
        <div style={{marginTop:"10vh",display:"flex",flexFlow:"row wrap",justifyContent:"space-between"}}>
            {
                tipoPrecio.map((tp)=>{
                    return(<Carta tipo={tp.tipo} precio={tp.precio} ventajas={ventajas}></Carta>)
                })
            }
        
        </div>
  )
}
