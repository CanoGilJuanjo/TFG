import React, { useRef } from 'react'
import mapboxgl, { Marker } from "mapbox-gl"
import { getUserLocation } from '../helpers'

/* No abuseis del token que tiene un limite maximo de renderizados */
mapboxgl.accessToken = "pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw"

export const MapaGeolocalizacion = ({coordenadas}) => {

    const mapa = useRef<HTMLDivElement>(null);
    let centro;
    getUserLocation().then(userLocation => {
        centro = userLocation;
        const map = new mapboxgl.Map({
            container:mapa.current!,
            style: "mapbox://styles/mapbox/streets-v11",
            center: userLocation,
            interactive:true,
            zoom:10,
        });
        new Marker({color:"#FF0000"}).setLngLat(map.getCenter()).addTo(map);
        new Marker({color:"#4554ff"}).setLngLat(new mapboxgl.LngLat(coordenadas[0], coordenadas[1])).addTo(map);
    });

    
    //Con esta api, se puede calcular la distancia a 2 puntos entre otras cosas
    //NECESARIO: latitud y longitud del usuario y de lo que se quiere 
    //https://api.mapbox.com/directions/v5/mapbox/walking/-4.5677935%2C36.6575326%3B-4.412525%2C36.720476?alternatives=false&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiamNnMDAzOSIsImEiOiJjbHZheHJ2dmgwMzA1MmltdXF1MHkxazMyIn0.O8_W4lc3PLzEhxqNh_LZbw
    //devuelve un JSON donde la distancia esta en routes[0].distance
    return (
    <div ref={mapa} style={{
        width:"90vw",
        height:"50vh",
        borderRadius:"10px",
        marginTop:"3px"
    }}>
        {/* <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid' onClick={()=>{}}  style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            zIndex: 10,
            backgroundColor: "red",
            color: "white"
        }}>
            Mí ubicación
        </Button> */}
    </div>
  )
}
