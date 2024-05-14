import React, { useState, useEffect } from 'react';
import { getUserLocation } from '../helpers';
import { Badge, Box, Button, Center, Input, Select,Spinner,useColorModeValue } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Form } from 'react-router-dom';


export const BuscadorEventos = () => {    
    // Datos de puntos de interés
    const puntosInteres = {
        punto: [
            {
                titulo: "Rosse",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                foto: "media/evento.png",
                valoracion: 4,
                precio: 15.20,
                fecha_inicio:"28/12/2024"
            },
            {
                titulo: "Moobi Café Alhaurín",
                coordenadas: [-4.5622327755283365, 36.663448502749084],
                foto: "media/evento.png",
                valoracion: 3,
                precio: 12.99,
                fecha_inicio:"30/07/2024"
            },
            {
                titulo: "Teatro Cervantes",
                coordenadas: [-4.41862478656455, 36.72478047215617],
                foto: "media/evento.png",
                valoracion: 4.5,
                precio: 35,
                fecha_inicio:"12/08/2024"
            },
            {
                titulo: "Nueva sentencia",
                coordenadas: [-4, 36.7],
                foto: "media/evento.png",
                valoracion: 2,
                precio: 900.90,
                fecha_inicio:"31/02/2055"
            },
            {
                titulo: "Otra más",
                coordenadas: [-5.000213, 36.72711344213],
                foto: "media/evento.png",
                valoracion: 1,
                precio: 12.90,
                fecha_inicio:"Lun-Vie"
            },
            {
                titulo: "Campillos",
                coordenadas: [-4.8656989504386035, 37.04881601265877],
                foto: "media/evento.png",
                valoracion: 5,
                precio: 0,
                fecha_inicio:"Siempre"
            },
            {
                titulo: "Mari",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                foto: "media/evento.png",
                valoracion: 3,
                precio: 70.33,
                fecha_inicio:"28/12/2024"
            },
            {
                titulo: "Luna",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                foto: "media/evento.png",
                valoracion: 2,
                precio: 50.99,
                fecha_inicio:"28/12/2024"
            },
            {
                titulo: "a",
                coordenadas: [-4.452987635582184, 36.704772935105616],
                foto: "media/evento.png",
                valoracion: 1,
                precio: 3,
                fecha_inicio:"28/12/2024"
            }
        ]
    };
    // Componente Carta
    const Carta = ({ punto, distancia}) => {
        return (
            <Box className='carta' display={"flex"} flexFlow={"row"} borderWidth='1px' width={"29%"} margin={"1px"} borderRadius='lg' overflow='hidden' bg={useColorModeValue("#EDF2F7","#14151e")}>
                <Box key={punto.titulo} maxW='100%' margin={"4px"} >
                    <img src={punto.foto} alt={"IMAGEN:" + punto.titulo} style={{borderRadius:"10px",width:"30vw"}}/>
                    <Box p='2'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Badge display={"flex"} alignContent={"right"} textAlign={"right"} color='gray.400' borderRadius={"5px"} fontSize="small">
                                {punto.fecha_inicio}
                            </Badge>
                        </Box>
                        <Box mt='1' fontSize={"large"} fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                            {punto.titulo}
                        </Box>
                        <Box>
                            Esta a {(Math.round(distancia / 1000))==0? distancia / 1000:Math.round(distancia / 1000)} km
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
                                        color={i < punto.valoracion ? 'teal.500' : 'gray.300'}
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
        try{
            getUserLocation()
                .then(userLocation => {                
                    for (let i = 0; i < puntosInteres.punto.length; i++) {
                        const salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${puntosInteres.punto[i].coordenadas[0]}%2C${puntosInteres.punto[i].coordenadas[1]}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`;
                        fetch(salida)
                        .then(respuesta => respuesta.json())
                        .then(respuesta => {
                            const distancia = Math.round(respuesta.routes[0].distance);
                            if(!buscarExiste(puntosInteres.punto[i].titulo,datos)){
                                setDatos([...datos,JSON.stringify({ punto: puntosInteres.punto[i], distancia: distancia})])
                            }
                        }) 
                    }
                    if(datos.length == puntosInteres.punto.length){
                        setLoading(false)
                    }
                })
            }catch(error){

            }
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
                a.className = a.className.split(" ")[0]+" "+a.className.split(" ")[1];
                a.style.display = "";
            }
        }
        let cartaLista = document.querySelectorAll(".carta");
        
        for(let i of cartaLista){
            if(parseInt(i.children[0].children[1].children[2].innerHTML.split(" ")[2])>distancia){
                i.className = i.className+" escondido";
                i.style.display = "none";
            }
        }
    }

    //Busca los precios y los filtra
    const [precioMin,setPrecioMin] = useState(0.0);
    const [precioMax,setPrecioMax] = useState(0.0);
    const precioMaxS = (e) =>{
        setPrecioMax(e.target.value)
        
    }
    const precioMinS= (e)=>{
        setPrecioMin(parseInt(e.target.value))
        
    }
    function filtrarPrecio(){
        //en caso de no reconocer el formtato numerico
        if(isNaN(precioMax)){
            setPrecioMax(0.0);
        }
        if(isNaN(precioMin)){
            setPrecioMin(0.0);
        }

        //En caso de que el usuario ponga numero negativos
        if(precioMax<0 || precioMin<0){
        
        }
        
        if((precioMax>=0 && precioMin>=0) && (precioMax>=precioMin || (precioMax == 0 && precioMin > 0) || (precioMin == 0 && precioMax>0))){
            //Obtenemos todas las cartas
            let cartaLista = document.querySelectorAll(".carta");
            
            //Comprobamos los precios menores al minimo
            if(precioMin>0){
                for(let i of cartaLista){
                    if( 
                        (parseFloat(i.children[0].children[1].children[3].innerHTML.split(" ")[1]) < precioMin && i.classList[i.classList.length-1] != "escondido") ||
                        (i.children[0].children[1].children[3].innerHTML.split(" ")[1] == "GRATIS" && precioMin>0)
                    ){   
                        i.className = i.className+" escondido";
                        i.style.display = "none";
                    }
                }
            }
            if(precioMax>0){
                for(let i of cartaLista){
                    if(parseFloat(i.children[0].children[1].children[3].innerHTML.split(" ")[1])>precioMax && i.classList[i.classList.length-1] != "escondido"){
                        i.className = i.className+" escondido";
                        i.style.display = "none";
                    }
                }
            }
        }
    }

    //Buscar nombre
    const [nombre,setNombre] = useState("");
    const nombreS = (e)=>{
        setNombre(e.target.value)
    }
    const filtrarNombre = ()=>{
        if(nombre != ""){
            let cartaLista = document.querySelectorAll(".carta")
            for(let carta of cartaLista){
                if(!carta.children[0].children[1].children[1].innerHTML.toUpperCase().includes(nombre.toUpperCase())){
                    carta.className += " escondido";
                    carta.style.display = "none"
                }
            }
        }
    }
    //Funcion de filtros
    function filtro(){
        filtrarDistancia();
        filtrarPrecio();
        filtrarNombre();
    }

    //Loading
    const [isLoading,setLoading] = useState(true);
    return (
        <>
            <Center display={"flex"} flexFlow={"row wrap"} borderWidth={"1px"} borderRadius={"10px"} boxShadow={"0px 0px 1px black"}>
                <form style={{marginRight:"3vw"}}>
                    <label htmlFor="nombre">Nombre: </label>
                    <Input type="text" name="nombre" id="" bg={useColorModeValue("gray.600","gray.200")} color={useColorModeValue("white","black")} style={{fontSize:"2vh",width:"11vw",textAlign:"center",marginRight:"1vw"}} onChange={nombreS} />
                    <label htmlFor="precio">Precios: </label>
                    Min <Input type='number' name='precioMin' bg={useColorModeValue("gray.600","gray.200")} color={useColorModeValue("white","black")} style={{fontSize:"2vh",width:"11vw",textAlign:"center",marginRight:"1vw"}} onChange={precioMinS}></Input>
                    Max <Input type='number' name='precioMin' bg={useColorModeValue("gray.600","gray.200")} color={useColorModeValue("white","black")} style={{fontSize:"2vh",width:"11vw",textAlign:"center",marginRight:"1vw"}} onChange={precioMaxS}></Input>
                </form>
                <Select style={{
                        border: "1px solid black",
                        alignItems: "center",
                        textAlign: "center",
                    }} width={"12vw"} fontSize={"2vh"} marginRight={"10px"} >
                    <option value="-" selected>Todo</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </Select>KM
                <Box>
                    <Button id='boton' m="4" onClick={filtro}>
                        <Search2Icon />
                    </Button>
                </Box>
            </Center>
            {isLoading?
                <Spinner color={useColorModeValue("black","blue.100")} marginTop={"50px"} marginBottom={"50px"} />
            :
                <Center id='lista' style={{ display: 'flex', flexFlow: "row wrap", textAlign: "center",width:"100%"}}>
                    {
                        datos.map(respuesta => {
                            respuesta = JSON.parse(respuesta);
                            return (<Carta key={respuesta.nombre} punto={respuesta.punto} distancia={respuesta.distancia}/>)
                        })
                    }
                </Center>
            }
        </>
    )
}
