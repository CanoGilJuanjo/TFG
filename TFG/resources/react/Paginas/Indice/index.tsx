import { Box, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoIndex from "../componentesComunes/VideoIndex";
import CarrouselCardsComponent from "../componentesComunes/CarrouselCardsComponenet";
import SwiperComponent from "../componentesComunes/SwiperComponent";

const recomendados = [
    "Rosse",
    "K2",
    "Jaleo",
    "Reggaeton Beach Festival",
    "Puro Latino",
    "SuperStar",
];

const novedades = [
    "Pijama",
    "Bamba Club",
    "Burbujas",
    "Puerto Diablos",
    "Heaven's Gate",
    "Coltán Fuengirola",
];

const masPopulares = [];

const Index = () => {
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
                <SwiperComponent
                    eventosMostrar={recomendados}
                ></SwiperComponent>
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Novedades
                </Text>
                {/* <CarrouselComponent /> */}
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Más populares
                </Text>
                {/* <CarrouselComponent /> */}
            </Box>
        </>
    );
};

export default Index;
