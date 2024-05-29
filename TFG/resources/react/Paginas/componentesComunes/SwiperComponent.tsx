import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React, { useEffect, useState } from "react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import CarrouselCardsComponent from "./CarrouselCardsComponenet";
import { Box, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const handleOnClick = (EventId) => {
        navigate(`/evento/${EventId}`);
    };

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
                onSwiper={(swiper) => console.log(swiper)}
            >
                {eventos?.map((evento) => {
                    if (eventosMostrar.includes(evento.titulo))
                        return (
                            <SwiperSlide
                                style={{
                                    justifyContent: "center",
                                    display: "flex",
                                }}
                            >
                                <CarrouselCardsComponent
                                onClick={() => handleOnClick(evento.id)}
                                    src={evento.foto}
                                    texto={"No te lo puedes perder"}
                                    puntuacion={evento.valoracion + "/5"}
                                    place={evento.titulo}
                                ></CarrouselCardsComponent>
                            </SwiperSlide>
                        );
                })}
                <Box position="relative" padding="10">
                    <Divider />
                </Box>
            </Swiper>
        </>
    );
};

export default SwiperComponent;
