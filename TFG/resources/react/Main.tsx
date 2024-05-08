import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import  Navbar  from "./Paginas/componentesComunes/Navbar";
import { BuscadorEventos } from './Paginas/componentesComunes/BuscadorEventos';
import { Route, Routes,NavLink } from 'react-router-dom';
import { CrearCuenta} from "./Paginas/InicioSesion-CrearCuenta/CrearCuenta";
import {ContrasenaOlvidada} from "./Paginas/InicioSesion-CrearCuenta/ContrasenaOlvidada";
import IniciarSesion from "./Paginas/InicioSesion-CrearCuenta/IniciarSesion";
import { Index } from "./Paginas/Indice/index";
import { PerfilUsuario } from "./Paginas/PerfilUsuario/PerfilUsuario";


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
                            <Route path="/Mapa" element={<div>Mapa work in progres...</div>}/>
                            <Route path="/Contraseña-olvidada" element={<ContrasenaOlvidada></ContrasenaOlvidada>}/>
                            <Route path="/IniciarSesion" element={<IniciarSesion></IniciarSesion>}/>
                            <Route path="/CrearCuenta" element={<CrearCuenta></CrearCuenta>}></Route>
                            <Route path="/Perfil" element={<PerfilUsuario></PerfilUsuario>}></Route>
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