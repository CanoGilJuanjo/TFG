import React, { useEffect } from 'react'
import { getUserLocation } from '../helpers'
import { Badge, Box, Button, Center, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Search2Icon, StarIcon } from '@chakra-ui/icons'

/* DOCUMENTACION DE LA API */
/* 
    https://docs.mapbox.com/playground/directions/?coordinates=-4.5677935%2C36.6575326&coordinates=-4.412525%2C36.720476&profile=walking&alternatives=false
*/

export const BuscadorEventos = () => {
    const puntosInteres = {
        punto: [
            {
                nombre: "Rosse",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                imagen: ""
            },
            {
                nombre: "Moobi Café Alhaurín",
                coordenadas: [-4.5622327755283365, 36.663448502749084],
                imagen: ""
            },
            {
                nombre: "Teatro Cervantes",
                coordenadas: [-4.41862478656455, 36.72478047215617],
                imagen: ""
            }
        ]
    }
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        const handleClick = () => {
            let dist = parseInt(document.querySelector("input[name='distancia']").value);
            if (dist == null || isNaN(dist))
                dist = 0;
            console.log(dist);
            document.querySelector("#eventos").innerHTML = "";
            getUserLocation().then(userLocation => {
                for (let i of puntosInteres.punto) {
                    let salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${i.coordenadas[0]}%2C${i.coordenadas[1]}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`
                    fetch(salida)
                        .then(respuesta => respuesta.json())
                        .then(respuesta => {
                            let distancia = parseInt(Math.floor(respuesta.routes[0].distance))
                            console.log(distancia);
                            let escribir = document.querySelector("#eventos");
                            if (distancia <= (dist * 1000)) {
                                if (escribir != null || respuesta.message == null) {
                                    escribir.innerHTML +=
                                    `
                                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                    <img src=${i.imagen} alt=${"IMAGEN:"+i.nombre} />
                              
                                    <Box p='6'>
                                      <Box display='flex' alignItems='baseline'>
                                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                                          New
                                        </Badge>
                                      </Box>
                              
                                      <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                      >
                                        ${i.nombre}
                                      </Box>
                              
                                      <Box>
                                        Esta a ${((distancia/1000)-(distancia%100))} km
                                        <Box as='span' color='gray.600' fontSize='sm'>
                                        </Box>
                                      </Box>
                              
                                      <Box display='flex' mt='2' alignItems='center'>
                                        ${Array(5)
                                          .fill('')
                                          .map((_, i) => (
                                            <StarIcon
                                              key={i}
                                              color={i < 4 ? 'teal.500' : 'gray.300'}
                                            />
                                          ))}
                                      </Box>
                                    </Box>
                                  </Box>
                                    `
                                } else {
                                    if (escribir != null)
                                        escribir.innerHTML = "No se ha podido calcular la distancia"
                                }
                            }
                        })
                }
            })
        }
        document.querySelector("#boton").addEventListener("click", handleClick);
    })

    function buscar(): void {
        /*  <div style={{
             backgroundColor:"#ccc",
             color:"black",
             border: "1px solid black"
         }}>
             Nombre: ${i.nombre}<br>
             Distancia al usuario:${distancia} metros
             <hr>
             
         </div> */
    }

    return (
        <>
            <Center>
                <label htmlFor="distancia">Seleccione la distancia maxima a la que buscar eventos</label>
                <input type="number" name='distancia' style={{
                    border: "1px solid black",
                    margin: "5px",
                    alignItems: "center"
                }} />KM
                <Box>
                    <Button id='boton' m="4">
                        <Search2Icon />
                    </Button>
                </Box>
            </Center>

            <div style={{ display: 'flex', flexFlow: "row wrap", margin: "1vh" }} id='eventos'></div>
        </>
    )
}
