import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Img, Spinner, useColorModeValue } from '@chakra-ui/react';

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

  //Loading
  const [isLoading,setLoading] = useState(true);
  const [error, setError] = useState(null);
 //Extraer datos de la BBDD
  useEffect(() => {
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            setEventos(data);
        })
        .then(respuesta=>{
          setLoading(false)
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
  }, []);

  //Calculo ancho
  const [anchoInner,setAncho] = useState(window.innerWidth);
  const anchoInnerS = ()=>{
      setAncho(window.innerWidth);
  }
  //Control para el ancho
  window.onresize = anchoInnerS;

  if(error) return(<div>Error inesperado</div>)
  return (
    <div style={{marginTop:"12vh"}}>
        <div>
        <Swiper
            style={{textAlign:"center"}}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={30}
            slidesPerView={(anchoInner<850)?1:4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            navigation={true}
            scrollbar={{ draggable: true }}
            >
            {
              isLoading?
              <Spinner color={useColorModeValue("black","white")}></Spinner>
              :
              eventos.map(respuesta =>{
                return(<SwiperSlide style={{display:"flex", flexFlow:"column wrap",paddingBottom:"10vh"}}><Img _hover={{cursor:"pointer",boxShadow:`1px 1px 5px ${useColorModeValue("black","white")}` }} src={respuesta.foto} alt={"IMAGEN"+respuesta.titulo} style={{width:`${anchoInner<850?'50vw':'30vw'}`,borderRadius:"10px",maxHeight:"40vh",height:"40vh",}} height={"40vh"} loading='lazy'/> <p>{respuesta.titulo}</p></SwiperSlide>)
              })
            }
            </Swiper>
        </div>
    </div>
  )
}
