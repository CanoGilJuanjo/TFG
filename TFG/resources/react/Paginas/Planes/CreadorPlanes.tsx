import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Input } from '@chakra-ui/react'
import { DeleteIcon, InfoIcon, Search2Icon } from '@chakra-ui/icons'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Img, Spinner, useColorModeValue, Select } from '@chakra-ui/react';

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

export const CreadorPlanes = () => {
  const apiURL = "http://localhost:8000/api/lista"
  const [eventos, setEventos] = useState<Eventos>([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.100'
      backdropFilter='blur(20px)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  //Loading
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Extraer datos de la BBDD
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setEventos(data);
      })
      .then(respuesta => {
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //Calculo ancho
  const [anchoInner, setAncho] = useState(window.innerWidth);
  const anchoInnerS = () => {
    setAncho(window.innerWidth);
  }
  //Control para el ancho
  window.onresize = anchoInnerS;
  //Array de planes actuales
  const [planes,setPlanes] = useState<Eventos>([])
  const aniadirPlan = (e)=>{
    if(e.target.className.includes("imagen")){
      buscarEventoRel(eventos,e.target.parentNode.children[1].innerHTML)
      e.target.style.border = "4px solid red"
    }
  }
  //Buscamos si existe el evento en el array, para valorar si incluirlo o no
  function  buscarExiste(nombre,array){
    let salida = false;
    for(let i = 0; i< array.length && !salida ;i++){
        if(array[i].titulo === nombre){
            salida = true;
        }
    }
    return salida;
  }
  const buscarEventoRel = (eventos,nombre)=>{
    for(let evento of eventos){
      if(evento.titulo === nombre && !buscarExiste(nombre,planes)){
        setPlanes([...planes,evento]);
      }
    }
  }

  const borrarPlan = (nombrePlan) =>{
    for(let i = 0;i<planes.length;i++){
      if(planes[i].titulo == nombrePlan){
        if(i == 0){
          planes.shift();
        }else if(i < planes.length - 1){
          planes.splice(i,1);
        }else if(i == planes.length-1){
          planes.pop()
        }
        let fotos = document.querySelectorAll("img")
        for(let foto of fotos){
          if(foto.alt == nombrePlan){
            foto.style.border="";
          }
        }
      }
    }
    setAncho(anchoInner-1)
    setAncho(anchoInner+1)
  }

  if (error) return (<div>Error inesperado</div>)
  return (
    <div style={{ marginTop: "12vh" }}>
      <h1 style={{ fontSize: "200%" }}>Eventos disponibles <InfoIcon style={{ fontSize: "50%"}} _hover={{ cursor: "pointer" }}  onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}></InfoIcon></h1>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Infromación de uso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              En esta pagina puede crear un plan personalizado para realizar a medida.<br/>Para añadir un evento al plan que este realizando, puede darle click al evento y se añadira automaticamente a su plan.<br/>
              <img src='../media/evento.png' style={{borderRadius:"20px"}} loading='lazy'></img>
              Una vez el evento haya sido añadido aparecera información referente a este evento. Tiene que tener en cuenta la fecha en la que comienza cada evento para organizar su plan de la mejor manera posible.
              
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Swiper
        style={{ textAlign: "center" }}
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={(anchoInner < 850) ? 1 : 4}
        loop={true}
        autoplay={{
          delay: 2000
        }}
        scrollbar={{ draggable: true}}
      >
        {
          isLoading ?
            <Spinner color={useColorModeValue("black", "white")}></Spinner>
            :
            eventos.map(respuesta => {
              return (
                <SwiperSlide className='carta' onClick={aniadirPlan} style={{ display: "flex", flexFlow: "column wrap", paddingBottom: "10vh", alignItems: "center" }}>
                  <Img className='imagen' _hover={{ cursor: "pointer", boxShadow: `1px 1px 5px ${useColorModeValue("black", "white")}` }} src={respuesta.foto} alt={respuesta.titulo} style={{ width: `${anchoInner < 850 ? '50vw' : '30vw'}`, borderRadius: "10px", maxHeight: "40vh", height: "40vh", }} height={"40vh"} loading='lazy' /> 
                  <p>{respuesta.titulo}</p>
                </SwiperSlide>)
            })
        }
      </Swiper>
      <Divider margin={"5vh"} width={"auto"} borderColor={useColorModeValue("black", "white")}></Divider>
      <h2 style={{ fontSize: "200%" }}>Plan actual</h2>
        {(planes.length>0)?
          planes.map(evento=>{
            return(
              <div style={{display:"flex",justifyContent:"center",marginBottom:"3vh"}}>
                <div style={{alignContent: "center",justifyContent:"space-between",justifyItems: "center",width:"70vw",justifySelf:"center",display:"grid", /* border:`1px solid ${useColorModeValue("black","white")}`, */borderRadius:"20px",gridTemplateAreas:(anchoInner<850)?`"foto foto foto" "contenido contenido contenido"`:`"foto contenido contenido""foto contenido contenido"`}}>
                  <img src={evento.foto} alt="" style={{margin:"5px",width: `${anchoInner < 850 ? '50vw' : '30vw'}`,border:`1px solid ${useColorModeValue("black","white")}`,maxHeight: "40vh", height: "40vh",borderRadius:"20px", gridArea:"foto"}} />
                  <div style={{gridArea:"contenido",width:"100%"}}>
                    <form action="" onSubmit={(e)=>{e.preventDefault()}} style={{width:"80%",textAlign:"left"}}>
                      <p>Nombre del evento <strong style={{fontSize:"large"}}>{evento.titulo}</strong></p>
                      {/* Hay que hacer un map de los precios correspondientes ha este evento, para retornar los option */}
                      <Select name='precio'>
                        <option value="" selected>Seleccione precio</option>
                      </Select>
                      <p style={{marginTop:"2vh"}}>Fecha del evento: <DatePicker selected={new Date(Date.parse(evento.fecha_inicio)).toUTCString()} dateFormat="dd/MM/yyyy"></DatePicker></p>
                      {(evento.fecha_fin>evento.fecha_inicio)?
                        <>
                          <p>Fecha fin evento: <DatePicker selected={new Date(Date.parse(evento.fecha_fin)).toUTCString()} dateFormat="dd/MM/yyyy"></DatePicker></p>
                        </>
                      :
                      ""
                      }
                      <p>Descripcion: {evento.descripcion}</p>
                      <br />
                      <Button justifySelf={"left"} className='eliminar' onClick={()=>{borrarPlan(evento.titulo)}}><DeleteIcon></DeleteIcon></Button>
                    </form>
                  </div> 
                </div>
              </div>
            )
          })
          
        :
          <div style={{height:"10vh",verticalAlign:"middle",borderRadius:"10px",border:`1px solid ${useColorModeValue("black","white")}`,margin:"1vh"}}>
            <p>Vacio</p>
          </div>
        }
        {(planes.length>0)?
          <>  
            <p>Nombre del plan <Input type='text' width={"20vw"}></Input></p>
            <Button style={{marginBottom:"5vh",marginTop:"1vh"}}>Crear plan</Button>
          </>
        
        :""}
    </div>
  )
}
