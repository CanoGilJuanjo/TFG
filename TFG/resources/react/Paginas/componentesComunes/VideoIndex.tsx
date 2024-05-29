import {
    AspectRatio,
    Box,
    Text,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
// import { ChevronRightIcon} from '@chakra-ui/icons'

import React from "react";

const VideoIndex = () => {
    return (
        <>
            <Box position="relative" marginBottom={"25px"}>
                <AspectRatio ratio={5} zIndex={-1}>
                    <video
                        width="1920"
                        height="1080"
                        playsInline
                        autoPlay
                        loop
                        src="/media/DJ.mp4"
                        preload="metadata"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        muted
                    ></video>
                </AspectRatio>

                <Flex direction={"column"} gap={2}>
                    <Text
                        position="absolute"
                        top="35%"
                        left="10%"
                        transform="translate(-50%, -50%)"
                        color="white"
                        fontSize="35px"
                        fontWeight="bold"
                        textColor={useColorModeValue("white", "#A9A9A9")}
                        style={{ textShadow: "5px 5px 20px #e0e0e0" }}
                    >
                        Encuentra tu fiesta
                    </Text>
                    {/* <ChevronRightIcon position="absolute"
            top="50%"
            left="10%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="35px"
            fontWeight="bold"/> */}
                </Flex>
            </Box>
        </>
    );
};

export default VideoIndex;
