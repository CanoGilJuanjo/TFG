import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React, { useEffect, useState } from "react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import CarrouselCardsComponent from "./CarrouselCardsComponenet";

export interface Evento {
    id: number;
    titulo: string;
    descripcion: string;
    qr: string;
    precio: number;
    fecha_inicio: string;
    fecha_fin: string;
    foto: string;
    localizacion: string;
    latitud: number;
    longitud: number;
    valoracion: number;
    boost: string;
    created_at: string;
    updated_at: string;
}
const SwiperComponent = ({ eventosMostrar }) => {
    const apiURL = `http://localhost:8000/api/lista`;
    const [eventos, setEventos] = useState<Evento[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    return (
        <>
            <Swiper
                loop={true}
                modules={[Pagination, Scrollbar, Autoplay]}
                autoplay={{
                    delay: 2000,
                }}
                spaceBetween={1}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {eventos?.map((evento) => {
                    if(eventosMostrar.includes(evento.titulo))
                    return (

                    <SwiperSlide
                        style={{ justifyContent: "center", display: "flex" }}
                    >
                        <CarrouselCardsComponent
                            src={evento.foto}
                            texto={''}
                            puntuacion={evento.valoracion+'/5'}
                            place={evento.titulo}
                        ></CarrouselCardsComponent>
                    </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide
                    style={{ justifyContent: "center", display: "flex" }}
                >
                    <CarrouselCardsComponent
                        src={
                            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        }
                        texto={"texto"}
                        puntuacion={"10/10"}
                        place={"Rosse"}
                    ></CarrouselCardsComponent>
                </SwiperSlide>
                <SwiperSlide
                    style={{ justifyContent: "center", display: "flex" }}
                >
                    <CarrouselCardsComponent
                        src={
                            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        }
                        texto={"texto"}
                        puntuacion={"3/10"}
                        place={"Rosse"}
                    ></CarrouselCardsComponent>
                </SwiperSlide>
                <SwiperSlide
                    style={{ justifyContent: "center", display: "flex" }}
                >
                    <CarrouselCardsComponent
                        src={
                            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        }
                        texto={"texto"}
                        puntuacion={"9/10"}
                        place={"Rosse"}
                    ></CarrouselCardsComponent>
                </SwiperSlide> */}
                ...
            </Swiper>
        </>
    );
};

export default SwiperComponent;
