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

ReactDOM.createRoot(doom).render(
    <BrowserRouter basename='/'>
        <Main />
    </BrowserRouter>
);