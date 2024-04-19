import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";

function Main() {
    return (
        <>
            <ChakraProvider>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    
                </main>
                <footer>

                </footer>
            </ChakraProvider>
        </>
    );
}

export default Main;