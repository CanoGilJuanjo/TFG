import React, { useEffect } from 'react'
import { getUserLocation } from '../helpers'

/* DOCUMENTACION DE LA API */
/* 
    https://docs.mapbox.com/playground/directions/?coordinates=-4.5677935%2C36.6575326&coordinates=-4.412525%2C36.720476&profile=walking&alternatives=false
*/

export const BuscadorEventos = () => {
    const puntosInteres = {punto:[
        {
            nombre: "Rosse",
            coordenadas:[-4.452987635582184,36.704772935105616],
            imagen: ""
        },
        {
            nombre: "Moobi Café Alhaurín",
            coordenadas:[-4.5622327755283365,36.663448502749084],
            imagen: ""
        }
    ]}
        
        
    useEffect(()=>{
        getUserLocation().then(userLocation=>{
            let escribir = document.querySelector("#borrar");
            if(escribir!=null)
            escribir.innerHTML = "";
            else
            console.log(escribir); 

            console.log(userLocation[0]+" "+userLocation[1])
            for(let i of puntosInteres.punto){
                let salida = `https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation[0]}%2C${userLocation[1]}%3B${i.coordenadas[0]}%2C${i.coordenadas[1]}?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw`
                fetch(salida)
                .then(respuesta => respuesta.json())
                .then(respuesta=>{
                    let escribir = document.querySelector("#borrar");
                    if(respuesta.message ==  null){
                        if(escribir!=null){
                            let distancia = Math.floor(respuesta.routes[0].distance)
                            if(distancia > 1000)
                                distancia = distancia/1000

                            escribir.innerHTML +=`
                            <div style={{
                                backgroundColor:"#ccc",
                                color:"black",
                                border: "1px solid black"
                            }}>
                                Nombre: ${i.nombre}<br>
                                Distancia al usuario:${distancia} metros
                                <hr>
                            </div>
                        `}else{
                            console.log(escribir);
                            
                        }
                    }else{
                        if(escribir!=null)
                            escribir.innerHTML = "No se ha podido calcular la distancia"
                    }
                })
            }
        })
    })
    return(
        <div id='borrar'>
            Cargando ...
        </div>
    )
}
