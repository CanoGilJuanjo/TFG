import { ChakraProvider } from "@chakra-ui/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import Navbar from "./Paginas/componentesComunes/Navbar";
import { BuscadorEventos } from "./Paginas/Buscador/BuscadorEventos";
import { Route, Routes, NavLink } from "react-router-dom";
import { CrearCuenta } from "./Paginas/InicioSesion-CrearCuenta/CrearCuenta";
import Contactos from "./Paginas/contactos/Contactos";
import { ContrasenaOlvidada } from "./Paginas/InicioSesion-CrearCuenta/ContrasenaOlvidada";
import IniciarSesion from "./Paginas/InicioSesion-CrearCuenta/IniciarSesion";
import { PerfilUsuario } from "./Paginas/PerfilUsuario/PerfilUsuario";
import { Evento } from "./Paginas/Eventos/Evento";

import { CreadorPlanes } from "./Paginas/Planes/CreadorPlanes";


function Main() {
    return (
        <>
                <ChakraProvider>
                    <Routes>
                        <Route
                            path="/contraseña-olvidada"
                            element={<ContrasenaOlvidada></ContrasenaOlvidada>}
                        />
                        <Route
                            path="/iniciarsesion"
                            element={<IniciarSesion></IniciarSesion>}
                        />
                        <Route
                            path="/crearcuenta"
                            element={<CrearCuenta></CrearCuenta>}
                        ></Route>
                        <Route
                            path="*"
                            element={
                                <>
                                    <header>
                                        <Navbar></Navbar>
                                    </header>
                                    <main>
                                        <div
                                            style={{
                                                textAlign: "center",
                                            }}
                                        >
                                            <Routes>
                                                <Route
                                                    path="/"
                                                    element={<Index />}
                                                ></Route>
                                                <Route
                                                    path="/contactos"
                                                    element={<Contactos />}
                                                />
                                                <Route
                                                    path="/eventos"
                                                    element={
                                                        <BuscadorEventos />
                                                    }
                                                />
                                                <Route
                                                    path="/evento/:id"
                                                    element={<Evento />}
                                                />
                                                <Route
                                                    path="/perfil"
                                                    element={
                                                        <PerfilUsuario></PerfilUsuario>
                                                    }
                                                ></Route>
                                            </Routes>
                                        </div>
                                    </main>
                                    <footer>
                                        <FooterComponent></FooterComponent>
                                    </footer>
                                </>
                            }
                        ></Route>
                    </Routes>
                </ChakraProvider>
        </>
    );
}

export default Main;
