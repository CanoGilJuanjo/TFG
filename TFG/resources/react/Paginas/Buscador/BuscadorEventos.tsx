import React, { useEffect, useState } from 'react';
import { getUserLocation } from '../helpers';
import { Badge, Box, Button, Center, Input, Select, Spinner, useColorMode, useColorModeValue,Text } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


export type Eventos = Evento[]

export interface Evento {
    id: number
    titulo: string
    descripcion: string
    qr: string
    precio: number
    fecha_inicio: string
    fecha_fin: string
    foto: string
    localizacion: string
    latitud: number
    longitud: number
    valoracion: number
    boost: string
    created_at: string
    updated_at: string
}

export const BuscadorEventos = () => {

    const apiURL = "http://localhost:8000/api/lista"
    const [eventos, setEventos] = useState<Eventos>([]);
    const [maxViews,setMaxvies] = useState(6);
    //Loading
    const [isLoading,setLoading] = useState(true);

    const [error, setError] = useState(null);


    const handleOnClick = (EventId) => {
        navigate(`/evento/${EventId}`)    
    }
    //Buscamos si existe el evento en el array, para valorar si incluirlo o no
    function  buscarExiste(nombre,array){
        let salida = false;
        for(let i = 0; i< array.length && !salida ;i++){
            if(JSON.parse(array[i]).punto.titulo === (nombre)/*  && array[i].titulo === nombre */){
                salida = true;
            }
        }
        return salida;
    }
    const [datos, setDatos] = useState<any>([])
    //Extraer datos de la BBDD
    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setEventos(data);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(()=>{
        try{
            getUserLocation()
                .then(userLocation => {                
                    for (let i = 0; i < eventos.length; i++) {
                        const salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${eventos[i].latitud}%2C${eventos[i].longitud}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`;
                        fetch(salida)
                        .then(respuesta => respuesta.json())
                        .then(respuesta => {
                            let distancia:any = 0;
                            if(respuesta.code && respuesta.code == "InvalidInput"){
                                distancia = false;
                            }else{
                                distancia = Math.round(respuesta.routes[0].distance);
                            }
                            if(!buscarExiste(eventos[i].titulo,datos) && datos.length < maxViews){
                                setDatos([...datos,JSON.stringify({ punto: eventos[i], distancia: distancia})])   
                            }
                            if(datos.length == maxViews){
                                setLoading(false)
                            }
                        }) 
                    }
                })
        }catch(error){
            console.log(error);
        }        
    },[eventos,datos,maxViews])
    
    //Calculo ancho
    const [anchoInner,setAncho] = useState(window.innerWidth);
    const anchoInnerS = ()=>{
        setAncho(window.innerWidth);
    }
    //Control para el ancho
    window.onresize = anchoInnerS;

    // Componente Carta
    const Carta = ({ punto, distancia}) => {
        return (
            <Box onClick={()=>{handleOnClick(punto.id)}} className='carta' display={"flex"} flexFlow={"row"} borderWidth='1px' minWidth={"100px"} width={`${anchoInner<850?"50%":"29%"}`} margin={"5px"} borderRadius='lg' overflow='hidden' bg={useColorModeValue("#EDF2F7","#14151e")} _hover={{cursor:"pointer",boxShadow:`1px 1px 5px ${useColorModeValue("black","white")}` }}>
                <Box key={punto.titulo} maxW='100%' margin={"4px"} >
                    <img src={punto.foto} alt={"IMAGEN:" + punto.titulo} style={{width:`${anchoInner<850?'50vw':'30vw'}`,borderRadius:"10px",maxHeight:"40vh",height:"40vh"}} height={"40vh"} loading='lazy'/>
                    <Box p='2'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Badge display={"flex"} alignContent={"right"} textAlign={"right"} color='gray.400' borderRadius={"5px"} fontSize="small" marginLeft={"1vw"}>
                                {punto.fecha_inicio}
                            </Badge>
                        </Box>
                        <Box mt='1' fontSize={"large"} fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                            {punto.titulo}
                        </Box>
                        <Box>
                            Esta a {(distancia)?(Math.round(distancia / 1000))==0? distancia / 1000:Math.round(distancia / 1000):"-"} km
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

    //Filtro de distancia
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
        
        if((precioMax>=0 && precioMin>=0) && (precioMax>=precioMin || (precioMax == 0 && precioMin > 0) || (precioMin == 0 && precioMax>0))){
            //Obtenemos todas las cartas
            let cartaLista = document.querySelectorAll(".carta");
            
            //Comprobamos los precios menores al minimo
            if(precioMin>0){
                for(let i of cartaLista){
                    if( 
                        (parseFloat(i.children[0].children[1].children[3].innerHTML.split(" ")[1]) < precioMin && i.classList[i.classList.length-1] !== "escondido") ||
                        (i.children[0].children[1].children[3].innerHTML.split(" ")[1] == "GRATIS" && precioMin>0)
                    ){   
                        i.className = i.className+" escondido";
                        i.style.display = "none";
                    }
                }
            }
            if(precioMax>0){
                for(let i of cartaLista){
                    if(parseFloat(i.children[0].children[1].children[3].innerHTML.split(" ")[1])>precioMax && i.classList[i.classList.length-1] !== "escondido"){
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
                if(carta.className[carta.className.length-1] !== "escondido" && !carta.children[0].children[1].children[1].innerHTML.toUpperCase().includes(nombre.toUpperCase())){
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

    if (error) return <p>Error!</p>;
    return (
        <>
            <Center display={"flex"} flexFlow={"row wrap"} marginTop={"10vh"} borderWidth={"1px"} borderRadius={"10px"} boxShadow={"0px 0px 1px black"} zIndex={2}>
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
                    }} width={"12vw"} fontSize={"2vh"} marginRight={"10px"}>
                    <option value={"-"}>Todo</option>
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
                <>
                    <Center id='lista' display={"flex"} flexFlow={anchoInner<850?"column wrap":"row wrap"} style={{textAlign: "center",width:"100%"}}>
                        {
                            datos.map(respuesta => {
                                respuesta = JSON.parse(respuesta);
                                return (<Carta key={respuesta.nombre} punto={respuesta.punto} distancia={respuesta.distancia}/>)
                            })
                        }
                    </Center>
                    <Text id='mas' _hover={{color:"white"}} style={{color:useColorModeValue("darkblue","lightblue"),cursor:"pointer",margin:"5vh"}} onClick={()=>{(maxViews+6 <= eventos.length)?
                                                                                                        (()=>{
                                                                                                            setMaxvies(maxViews+5) 
                                                                                                            setLoading(true)
                                                                                                        })()
                                                                                                        : 
                                                                                                        (maxViews == eventos.length)?
                                                                                                            document.querySelector("#mas").innerHTML = "No existen más eventos" 
                                                                                                        :
                                                                                                            (()=>{
                                                                                                                setMaxvies(eventos.length)
                                                                                                                setLoading(true)
                                                                                                            })()
                                                                                                        }}>Cargar más...</Text>
                </>
            }

        </>
    );
};
