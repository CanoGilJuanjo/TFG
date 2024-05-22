import { Box, Text } from "@chakra-ui/react";

import React from "react";
import CarrouselComponent from "../componentesComunes/CarrouselComponent";
import VideoIndex from "../componentesComunes/VideoIndex";
import ColaboradoresCarrousel from "../componentesComunes/ColaboradoresCarrousel";
import PaypalComponent from "../componentesComunes/PaypalComponent";

const Index = () => {
    return (
        <>
            <VideoIndex />
            <PaypalComponent totalValue={"23"} invoice={"Entrada Normal"} />
            <Box top="90%">
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Recomendados
                </Text>
                <CarrouselComponent />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Novedades
                </Text>
                <CarrouselComponent />
                <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    paddingLeft={"10%"}
                    fontSize={"25px"}
                >
                    Más populares
                </Text>
                <CarrouselComponent />
            </Box>

            <ColaboradoresCarrousel />
        </>
    );
};

export default Index;
