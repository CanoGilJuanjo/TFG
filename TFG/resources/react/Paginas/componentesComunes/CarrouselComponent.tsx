import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Box, useColorModeValue } from "@chakra-ui/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import React from "react";

export default () => {
    return (
        <Box
            paddingBottom={"50px"}
            paddingTop={"50px"}
            width={"100%"}
            height={"10%"}
            fontWeight={"bold"}
        >
            Colaboradores
            <Swiper
                style={{
                    marginTop: "20px",
                    width: "100%",
                    height: "50px",
                }}
                loop={true}
                modules={[Pagination, Scrollbar, Autoplay]}
                autoplay={{
                    delay: 2000,
                }}
                spaceBetween={1}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide
                    style={{
                        justifyContent: "center",
                        display: "flex",
                    }}
                >
                    {" "}
                    <Image
                        background={useColorModeValue("white", "white")}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            verticalAlign: "middle",
                            borderRadius: "5px",
                        }}
                        src="../../media/OleoRonda.png"
                        alt="Oleo Ronda"
                    />{" "}
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        justifyContent: "center",
                        display: "flex",
                        verticalAlign: "middle",
                    }}
                >
                    {" "}
                    <Image
                        src="../../media/ArdoyAbogados.png"
                        alt="Ardoy Abogados"
                    />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        justifyContent: "center",
                        display: "flex",
                        verticalAlign: "middle",
                        borderRadius: "5px",
                    }}
                >
                    {" "}
                    <Image src="../../media/logoGoldKobra.png" alt="Gold Kobra" />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
