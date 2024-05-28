import ReactDOM from "react-dom/client";
import Main from "./Main";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

let doom = document.querySelector("#app");
if (doom == null) {
    doom = document.createElement("div");
    doom.id = "app";
    document.appendChild(doom);
}

/*  Comprobacion de geolocalizacion
    esto solo se pondra en las paginas que usen el mapa
*/
if (!navigator.geolocation) {
    alert("¡¡No tiene activada la geolocalización!!");
    throw new Error("No esta activada la geolocalización");
}

ReactDOM.createRoot(doom).render(
    <BrowserRouter basename="">
        <PayPalScriptProvider
            options={{
                clientId:
                    "AVZx7n8gCe07qzKYJiMnCTIf7RVr-qgyvE5NefjZtSxmksFg-T3z1NfwJ5NuOIVYm21cek--DMA7WozN",
            }}
        >
            <Main />
        </PayPalScriptProvider>
    </BrowserRouter>
);
