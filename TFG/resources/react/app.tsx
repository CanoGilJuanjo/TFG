import ReactDOM from 'react-dom/client';
import Main from "./Main";
import React from 'react';

let doom = document.querySelector('#app');
if(doom == null){
    doom  = document.createElement("div")
    doom.id = "app";
    document.getElementsByTagName("body")[0].appendChild(doom);
}
ReactDOM.createRoot(doom).render(
    <Main />
);