import ReactDOM from 'react-dom/client';
import Main from "./Main";
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

let doom = document.querySelector("#app");
if(doom == null){
    doom = document.createElement("div");
    doom.id = "app";
    document.appendChild(doom);
}

/*  Comprobacion de geolocalizacion
    esto solo se pondra en las paginas que usen el mapa
*/
if( !navigator.geolocation ){
    alert("¡¡No tiene activada la geolocalización!!");
    throw new Error("No esta activada la geolocalización")
}

ReactDOM.createRoot(doom).render(
    <BrowserRouter basename=''>
        <Main />
    </BrowserRouter>
);