import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Box, useColorModeValue, Link } from "@chakra-ui/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import React from "react";

export default () => {
    return (
        <Box
            paddingBottom={"50px"}
            paddingTop={"50px"}
            width={"100%"}
            height={"20%"}
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
                    <Link href="https://oleoronda.com/" isExternal>
                        <Image
                            background={useColorModeValue("white", "white")}
                            style={{
                                justifyContent: "center",
                                display: "flex",
                                verticalAlign: "middle",
                                width: "8vw",
                                height: "100%",
                                borderRadius: "5px",
                            }}
                            src="../../media/OleoRonda.png"
                            alt="Oleo Ronda"
                        />{" "}
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        justifyContent: "center",
                        display: "flex",
                        verticalAlign: "middle",
                    }}
                >
                    {" "}
                    <Link href="https://www.ardoyabogados.com/" isExternal>
                        <Image
                            src="../../media/ArdoyAbogados.png"
                            alt="Ardoy Abogados"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        justifyContent: "center",
                        display: "flex",
                        verticalAlign: "middle",
                        height: "100%",
                        width: "20vw",
                        borderRadius: "5px",
                    }}
                >
                    {" "}
                    <Link
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            verticalAlign: "middle",
                            height: "100%",
                            width: "20vw",
                            borderRadius: "5px",
                        }}
                        href="https://www.instagram.com/goldkobra.ttt/tagged/"
                        isExternal
                    >
                        <Image
                            src="../../media/logoGoldKobra.png"
                            alt="Gold Kobra"
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
