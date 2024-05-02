import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";
import { MapaGeolocalizacion } from './Paginas/componentesComunes/MapaGeolocalizacion';
import { BuscadorEventos } from './Paginas/componentesComunes/BuscadorEventos';
import { Route, Routes,NavLink } from 'react-router-dom';
import { CrearCuenta} from "./Paginas/InicioSesion-CrearCuenta/CrearCuenta";
import {ContrasenaOlvidada} from "./Paginas/InicioSesion-CrearCuenta/ContrasenaOlvidada";
import IniciarSesion from "./Paginas/InicioSesion-CrearCuenta/IniciarSesion";
import  Index  from "./Paginas/Indice/index";

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
                            <Route path="/" element={<Index/>}></Route>
                            <Route path="/Eventos" element={<BuscadorEventos/>} />
                            <Route path="/Mapa" element={<MapaGeolocalizacion/>}/>
                            <Route path="/Contraseña-olvidada" element={<ContrasenaOlvidada></ContrasenaOlvidada>}/>
                            <Route path="/IniciarSesion" element={<IniciarSesion></IniciarSesion>}/>
                            <Route path="/CrearCuenta" element={<CrearCuenta></CrearCuenta>}></Route>
                            <Route path="*"></Route>
                        </Routes>
                        
                    </div>
                </main>
               
                <footer></footer>
            </ChakraProvider>
        </>
    );
}

export default Main;