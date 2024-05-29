import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Box } from "@chakra-ui/react";
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
            fontWeight={'bold'}
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
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            verticalAlign: "middle",
                            width:"10vw",
                            height:"100%"
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
                        height:"100%",
                        width:"20vw"
                    }}
                >
                    {" "}
                    <Image src="../../media/GoldKobra.jpg" alt="Gold Kobra" />
                </SwiperSlide>
                
            </Swiper>
        </Box>
    );
};
