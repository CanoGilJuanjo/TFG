import React from "react";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    SimpleGrid,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import CarrouselCardsComponent from "./CarrouselCardsComponenet";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CarrouselComponent({}) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    // This list contains all the data for carousels
    // This can be static or loaded from a server

    return (
        <Box
            position={"relative"}
            height={"420px"}
            width={"80%"}
            overflow={"hidden"}
            justifyContent="center"
            alignItems="center"
            margin="auto"
            paddingTop={"15px"}
            marginBottom={"25px"}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider ref={(slider) => setSlider(slider)}>
                <Box height={"100%"} width={"100%"} position="relative">
                    {/* This is the block you need to change, to customize the caption */}
                    <Container
                        size="container.lg"
                        height="600px"
                        position="relative"
                    >
                        <SimpleGrid minChildWidth="120px" spacing="40px">
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"texto"}
                                    puntuacion={"5/10"}
                                    place={"Rosse"}
                                ></CarrouselCardsComponent>
                            </Box>
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"aaaaaaa"}
                                    puntuacion={"9/10"}
                                    place={"Amarillo"}
                                ></CarrouselCardsComponent>
                            </Box>
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"dawdawd"}
                                    puntuacion={"1/10"}
                                    place={"Verde"}
                                ></CarrouselCardsComponent>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>
            </Slider>
            <Slider ref={(slider) => setSlider(slider)}>
                <Box height={"100%"} width={"100%"} position="relative">
                    {/* This is the block you need to change, to customize the caption */}
                    <Container
                        size="container.lg"
                        height="600px"
                        position="relative"
                    >
                        <SimpleGrid minChildWidth="120px" spacing="40px">
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"texto"}
                                    puntuacion={"5/10"}
                                    place={"Rosse"}
                                ></CarrouselCardsComponent>
                            </Box>
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"eeeeee"}
                                    puntuacion={"9/10"}
                                    place={"Amarillo"}
                                ></CarrouselCardsComponent>
                            </Box>
                            <Box height="80px">
                                <CarrouselCardsComponent
                                    src={
                                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    }
                                    texto={"eeeeee"}
                                    puntuacion={"1/10"}
                                    place={"Verde"}
                                ></CarrouselCardsComponent>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>
            </Slider>
        </Box>
    );
}
