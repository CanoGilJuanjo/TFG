import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";
import { BuscadorEventos } from './Paginas/Buscador/BuscadorEventos';
import { Route, Routes,NavLink } from 'react-router-dom';
import { CrearCuenta} from "./Paginas/InicioSesion-CrearCuenta/CrearCuenta";
import {ContrasenaOlvidada} from "./Paginas/InicioSesion-CrearCuenta/ContrasenaOlvidada";
import IniciarSesion from "./Paginas/InicioSesion-CrearCuenta/IniciarSesion";
import { Index } from "./Paginas/Indice/index";
import { PerfilUsuario } from "./Paginas/PerfilUsuario/PerfilUsuario";
import { Evento } from "./Paginas/Eventos/Evento";
import FooterComponent from './Paginas/componentesComunes/FooterComponente';


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
                            <Route path="/eventos" element={<BuscadorEventos/>} />
                            <Route path="/eventos/:id" element={<Evento/>} />
                            <Route path="/contraseña-olvidada" element={<ContrasenaOlvidada></ContrasenaOlvidada>}/>
                            <Route path="/iniciarsesion" element={<IniciarSesion></IniciarSesion>}/>
                            <Route path="/crearcuenta" element={<CrearCuenta></CrearCuenta>}></Route>
                            <Route path="/perfil" element={<PerfilUsuario></PerfilUsuario>}></Route>
                            <Route path="*"></Route>
                        </Routes>
                    </div>
                </main>
                <footer>
                    <FooterComponent></FooterComponent>
                </footer>
            </ChakraProvider>
        </>
    );
}

export default Main;