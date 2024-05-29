import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoIndex from "../componentesComunes/VideoIndex";
import CarrouselCardsComponent from "../componentesComunes/CarrouselCardsComponenet";
import SwiperComponent from "../componentesComunes/SwiperComponent";
import CarrouselComponent from "../componentesComunes/CarrouselComponent";

const recomendados = [
    "Rosse",
    "K2",
    "Jaleo",
    "Reggaeton Beach Festival",
    "Puro Latino",
    "SuperStar",
];

const novedades = [
    "NO TE VA GUSTAR",
    "Juanes",
    "Concierto sergio dalma",
    "QUEENS OF THE STONE AGE",
    "Concierto Rozalén en Málaga",
    "India Martínez",
];

const masPopulares = [
    "Juanes",
    "Bamba Club",
    "Burbujas",
    "Puerto Diablos",
    "Heaven's Gate",
    "Coltán Fuengirola",
];

const Index = () => {
    localStorage.getItem("idUsr") == null || localStorage.getItem("idUsr") == ""
        ? document.getElementById("perfil")
            ? location.reload()
            : ""
        : "";
    return (
        <>
            <VideoIndex />

            <Box top="90%">
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Recomendados
                </Text>
                <SwiperComponent eventosMostrar={novedades} />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Novedades
                </Text>
                <SwiperComponent eventosMostrar={masPopulares} />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Más populares
                </Text>
                <SwiperComponent eventosMostrar={recomendados} />
            </Box>
            <CarrouselComponent />
        </>
    );
};

export default Index;
