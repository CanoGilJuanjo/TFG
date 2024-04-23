import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";
import { MapaGeolocalizacion } from './Paginas/componentesComunes/MapaGeolocalizacion';
import { BuscadorEventos } from './Paginas/componentesComunes/BuscadorEventos';

function Main() {
    return (
        <>
            <ChakraProvider>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <BuscadorEventos/>
                    </div>
                </main>
                <footer>

                </footer>
            </ChakraProvider>
        </>
    );
}

export default Main;