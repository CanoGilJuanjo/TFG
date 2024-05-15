import { Box, Text } from "@chakra-ui/react";

import React from "react";
import CarrouselComponent from "../componentesComunes/CarrouselComponent";
import VideoIndex from "../componentesComunes/VideoIndex";
import CarrouselCardsComponent from "../componentesComunes/CarrouselCardsComponenet";

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
                <CarrouselComponent></CarrouselComponent>
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

            <Box paddingTop={'50px'}>
                <CarrouselCardsComponent
                    src={
                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    texto={
                        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
                    }
                    puntuacion={" 5/10"}
                    place={"La Rosse"}
                />
            </Box>
        </>
    );
};

export default Index;
