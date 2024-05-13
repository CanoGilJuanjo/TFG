import React, { useState, useEffect } from 'react';
import { getUserLocation } from '../helpers';
import { Badge, Box, Button, Center, Select,useColorModeValue } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';


export const BuscadorEventos = () => {    
    // Datos de puntos de interés
    const puntosInteres = {
        punto: [
            {
                nombre: "Rosse",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                imagen: "media/evento.png",
                estrellas: 4,
                precio: 15.20,
                fechaInicio:"28/12/2024"
            },
            {
                nombre: "Moobi Café Alhaurín",
                coordenadas: [-4.5622327755283365, 36.663448502749084],
                imagen: "media/evento.png",
                estrellas: 3,
                precio: 12.99,
                fechaInicio:"30/07/2024"
            },
            {
                nombre: "Teatro Cervantes",
                coordenadas: [-4.41862478656455, 36.72478047215617],
                imagen: "media/evento.png",
                estrellas: 4.5,
                precio: 35,
                fechaInicio:"12/08/2024"
            },
            {
                nombre: "Nueva sentencia",
                coordenadas: [-4, 36.7],
                imagen: "media/evento.png",
                estrellas: 2,
                precio: 900.90,
                fechaInicio:"31/02/2055"
            },
            {
                nombre: "Otra más",
                coordenadas: [-5.000213, 36.72711344213],
                imagen: "media/evento.png",
                estrellas: 1,
                precio: 12.90,
                fechaInicio:"Lun-Vie"
            },
            {
                nombre: "Campillos",
                coordenadas: [-4.8656989504386035, 37.04881601265877],
                imagen: "media/evento.png",
                estrellas: 5,
                precio: 0,
                fechaInicio:"Siempre"
            }
        ]
    };
    // Componente Carta
    const Carta = ({ punto, distancia}) => {
        return (
            <Box display={"flex"} flexFlow={"row"} borderWidth='1px' width={"30%"} borderRadius='lg' overflow='hidden' bg={useColorModeValue("#EDF2F7","#14151e")}>
                <Box key={punto.nombre} maxW='100%' margin={"4px"} >
                    <img src={punto.imagen} alt={"IMAGEN:" + punto.nombre} style={{borderRadius:"10px"}}/>
                    <Box p='2'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Badge display={"flex"} alignContent={"right"} textAlign={"right"} color='gray.400' borderRadius={"5px"} fontSize="small">
                                {punto.fechaInicio}
                            </Badge>
                        </Box>
                        <Box mt='1' fontSize={"large"} fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                            {punto.nombre}
                        </Box>
                        <Box>
                            Esta a {Math.round(distancia / 1000)} km
                        </Box>
                        <Box as='span' color='green.500' fontSize='sm'>
                            Precio: {punto.precio?punto.precio+" €":"GRATIS"} 
                        </Box>
                        <Box display='flex' mt='2' alignItems='center'>
                            Valoración:{Array(5)
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
            </Box>
        );
    };

    const [datos, setDatos] = useState<any>([])
    useEffect(() => {
        getUserLocation()
            .then(userLocation => {                
                for (let i = 0; i < puntosInteres.punto.length; i++) {
                    const salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${puntosInteres.punto[i].coordenadas[0]}%2C${puntosInteres.punto[i].coordenadas[1]}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`;
                    fetch(salida)
                    .then(respuesta => respuesta.json())
                    .then(respuesta => {
                        //if(!buscarExiste(puntosInteres.punto[i].nombre,datos)){
                            console.log(puntosInteres.punto[i].nombre);
                            const distancia = Math.round(respuesta.routes[0].distance);
                            //if(distancia<=30000){
                                if(/* datos.length < puntosInteres.punto.length &&  */!buscarExiste(puntosInteres.punto[i].nombre,datos)){
                                    setDatos([...datos,JSON.stringify({ punto: puntosInteres.punto[i], distancia: distancia})])
                                }
                            //}
                        //}
                    }) 
                }
            })
    },[datos])

    //Buscamos si existe el evento en el array, para valorar si incluirlo o no
    function  buscarExiste(nombre,array){
        let salida = false;
        for(let i = 0; i< array.length && !salida ;i++){
            if(array[i].includes(nombre)){
                salida = true;
            }
        }
        return salida;
    }

    //Busca la distancia en las cartas y si coincide con la distancia a filtrar la esconde
    function filtrarDistancia(){
        let distancia:any = document.querySelector("select")?.value;
        if(distancia == null || distancia == "-")
            distancia = 200000;
        let escondidas = document.querySelectorAll(".escondido");
        if(escondidas != null){
            for(let a of escondidas){
                a.className = a.className.split(" ")[0];
                a.style.display = "";
            }
        }
        let cartaLista = document.querySelectorAll(".css-2ziu9o");
        for(let i of cartaLista){
            if(parseInt(i.children[0].children[1].children[2].innerHTML.split(" ")[2])>distancia){
                i.className = i.className+" escondido";
                i.style.display = "none";
            }
        }
    }

    //Busca los precios y los filtra
    function filtrarPrecio(){

    }
    return (
        <>
            <Center borderWidth={"1px"} borderRadius={"10px"} boxShadow={"0px 0px 1px black"}>
                <Select style={{
                        border: "1px solid black",
                        alignItems: "center",
                        textAlign: "center",
                    }} width={"30vw"} marginRight={"10px"} >
                    <option value="-" selected>Todo</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value="20">20</option>
                </Select>KM
                <Box>
                    <Button id='boton' m="4" onClick={filtrarDistancia}>
                        <Search2Icon />
                    </Button>
                </Box>
            </Center>
            <aside>

            </aside>
            <div id='lista' style={{ display: 'flex', flexFlow: "row wrap", textAlign: "center", alignContent: "center",alignItems:"center",alignmentBaseline:"central",width:"75%",marginLeft:"25vh" }}>
                {
                    datos.map(respuesta => {
                        respuesta = JSON.parse(respuesta);
                        return (<Carta key={respuesta.nombre} punto={respuesta.punto} distancia={respuesta.distancia}/>)
                    })
                }
            </div>
        </>
    )
}
