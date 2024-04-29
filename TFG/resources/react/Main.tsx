import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";
import { MapaGeolocalizacion } from './Paginas/componentesComunes/MapaGeolocalizacion';
import { BuscadorEventos } from './Paginas/componentesComunes/BuscadorEventos';
import { Route, Routes,NavLink } from 'react-router-dom';
import { Mail } from "./Paginas/componentesComunes/Mail";

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
                            <Routes>
                                <Route path="Eventos" element={<BuscadorEventos/>} />
                                <Route path="Mapa" element={<MapaGeolocalizacion/>}/>
                                <Route path="Mail" element/>
                                <Route path="*" element={<Mail></Mail>}></Route>
                            </Routes>
                            
                        </div>
                    </main>
               
                <footer></footer>
            </ChakraProvider>
        </>
    );
}

export default Main;