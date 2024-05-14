import React, { useEffect, useState } from 'react';
import { getUserLocation } from '../helpers';
import { Badge, Box, Button, Center, useColorMode } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import Loader from '../componentesComunes/Loader';
import { useNavigate } from 'react-router-dom';
import { Badge, Box, Button, Center, Input, Select,Spinner,useColorModeValue } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Form } from 'react-router-dom';

export type Eventos = Evento[]

export interface Evento {
    id: number
    titulo: string
    descripcion: string
    qr: string
    fecha_inicio: string
    fecha_fin: string
    foto: string
    localizacion: string
    boost: string
    created_at: string
    updated_at: string
  }

export const BuscadorEventos = () => {

    const apiURL = "http://localhost:8000/api/eventos"

    const [eventos, setEventos] = useState<Eventos>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleOnClick = (EventId) => {
        navigate(`/eventos/${EventId}`)    
    }

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setEventos(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loader />;

    if (error) return <p>Error!</p>;
    console.log(eventos)
    return (
        <div>
            <h1>Eventos</h1>
            <ul style={{width: "500px", height: "500px"}}>
                {eventos.map((evento) => (
                    <li key={evento.id} onClick={() => handleOnClick(evento.id)} >
                        <img src={evento.foto} alt="" />
                        <h2>{evento.boost}</h2>
                        <p>{evento.descripcion}</p>
                        <p>{evento.titulo}</p>
                        <p>{evento.fecha_fin}</p>
                        <p>{evento.localizacion}</p>
                        <p>{evento.qr}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
      
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
=======
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

            <div style={{ display: 'flex', flexFlow: "row wrap", textAlign:"center", alignContent: "center" }}>
                {cartas} 
            </div>

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
    );
};
