import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VideoIndex from "../componentesComunes/VideoIndex";
import SwiperComponent from "../componentesComunes/SwiperComponent";
import CarrouselComponent from "../componentesComunes/CarrouselComponent";

const recomendados = [
    "Reggaeton Beach Festival", //4
    "Vibras Marenostrum", //33
    "Sohail Jazz Festival", //12
    "Concierto sergio dalma", //6
    "QUEENS OF THE STONE AGE", //7
    "Concierto Rozalén en Málaga", //8
    "India Martínez", //10
    "Juanes", //9
    "Pablo López", //20
    "Exposición de Esculturas", //26
    "BiznagaFest 2024", //31
];

const novedades = [
    "Festival de Cine", //14
    "Feria del libro", //11
    "Exposición de Arte Moderno", //13
    "Plácido Domingo", //15
    "Festival de Teatro", //16
    "Caos", //17
    "Sobre arte urbano", //18
    "Feria de Gastronomía", //21
    "Exposición Fotográfica", //23
    "Festival de Danza", //24
    "Festival de Flamenco", //25
];

const masPopulares = [
    "Puro Latino", //5
    "Jaleo", //3
    "K2", //2
    "Rosse", //1
    "Sala Leblon", //19
    "Comedia en Vivo", //30
    "Festival de Tapas", //27
    "Feria de la Cerveza Artesanal", //28
    "Festival Clásicos de Teatro", //29
    "Torneo de eSports", //32
];

//22 esta regular
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
                    fontSize={"30px"}
                    paddingBottom={"20px"}
                >
                    Recomendados
                </Text>
                <SwiperComponent eventosMostrar={recomendados} />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"30px"}
                    paddingBottom={"20px"}
                >
                    Novedades
                </Text>
                <SwiperComponent eventosMostrar={novedades} />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"30px"}
                    paddingBottom={"20px"}
                >
                    Más populares
                </Text>
                <SwiperComponent eventosMostrar={masPopulares} />
            </Box>
            <CarrouselComponent />
        </>
    );
};

export default Index;
