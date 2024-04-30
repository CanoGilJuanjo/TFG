import React, { useEffect, useState } from 'react';
import { getUserLocation } from '../helpers';
import { Badge, Box, Button, Center, useColorMode } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';

export const BuscadorEventos = () => {
    const puntosInteres = {
        punto: [
            {
                nombre: "Rosse",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                imagen: "media/evento.png",
                estrellas: 4
            },
            {
                nombre: "Moobi Café Alhaurín",
                coordenadas: [-4.5622327755283365, 36.663448502749084],
                imagen: "media/evento.png",
                estrellas: 3
            },
            {
                nombre: "Teatro Cervantes",
                coordenadas: [-4.41862478656455, 36.72478047215617],
                imagen: "media/evento.png",
                estrellas: 4.5
            }
        ]
    };

    const [distanciaMaxima, setDistanciaMaxima] = React.useState(0);
    const [cartas, setCartas] = useState([]);

    useEffect(() => {
        const handleClick = () => {
            const dist = parseInt(document.querySelector("input[name='distancia']").value);
            setDistanciaMaxima(dist);
 
            getUserLocation().then(userLocation => {
                const nuevasCartas = [];
                for (const punto of puntosInteres.punto) {
                    const salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${punto.coordenadas[0]}%2C${punto.coordenadas[1]}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`;
                    fetch(salida)
                        .then(respuesta => respuesta.json())
                        .then(respuesta => {
                            const distancia = Math.round(respuesta.routes[0].distance);
                            if (distancia <= dist * 1000) {
                                if (respuesta.message == null) {
                                    nuevasCartas.push(<Carta key={punto.nombre} punto={punto} distancia={distancia} />);
                                    
                                }
                            }
                        }); 
                }
                setCartas(nuevasCartas);
            });
        };

        document.querySelector("#boton").addEventListener("click", handleClick);
    }, []); // Dejar el array de dependencias vacío para que se ejecute solo una vez al montar el componente

    const Carta = ({ punto, distancia }) => {
        return (
            <Box key={punto.nombre} maxW='sm' margin={"4px"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <img src={punto.imagen} alt={"IMAGEN:" + punto.nombre} />
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                    </Box>
                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                        {punto.nombre}
                    </Box>
                    <Box>
                        Esta a {distancia / 1000} km
                        <Box as='span' color='gray.600' fontSize='sm'></Box>
                    </Box>
                    <Box display='flex' mt='2' alignItems='center'>
                        Valoracion:{Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < punto.estrellas ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                    </Box>
                </Box>
            </Box>
        ); 
    };

    return (
        <>
            <Center>
                <label htmlFor="distancia">Seleccione la distancia máxima a la que buscar eventos</label>
                <input type="number" name='distancia' style={{
                    border: "1px solid black",
                    margin: "5px",
                    alignItems: "center",
                    textAlign: "center"
                }} /> KM
                <Box>
                    <Button id='boton' m="4">
                        <Search2Icon />
                    </Button>
                </Box> 
            </Center>
            <div style={{ display: 'flex', flexFlow: "row wrap", textAlign:"center", alignContent: "center" }}>
                {cartas} 
            </div>
        </>
    );
};
