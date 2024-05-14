import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export type Eventos = Evento[]

export interface Evento {
    id: number
    titulo: string
    descripcion: string
    qr: string
    fecha_inicio: string
    fecha_fin: string
    foto: string
    localizacion: string
    boost: string
    created_at: string
    updated_at: string
}


export const Evento = () => {

    const {id} = useParams();

    const apiURL = `http://localhost:8000/api/evento/${id}`;

    const [eventos, setEventos] = useState<Eventos>([]);

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setEventos(data);
            })
    }, []);

    return (
        <div>
            <h1>Eventos</h1>
            <div style={{width: "500px", height: "500px"}}>
                {eventos.map((evento) => (
                    <div key={evento.id}>
                        <div>
                            <img src={evento.foto} alt="Imagen del evento" />
                            <div>
                                <h1>{evento.titulo}</h1>
                                <p>{evento.boost}</p>
                            </div>
                        </div>
                        
                        <p>{evento.descripcion}</p>
                        <p>{evento.titulo}</p>
                        <p>{evento.fecha_fin}</p>
                        <p>{evento.localizacion}</p>
                        <p>{evento.qr}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

<>
    <div>
        <h1>Titulo</h1>
    </div>
</>

    {/* <main class="contenido">
        <h2 class="title_Mod">Información del evento<hr></h2>
        <div id="info-evento">
            <form action="" id="formulario">
                <label class="form-label">Nombre del evento</label><br>
                <input type="text" name="nombre" class="caja">
                <br>
                <label class="form-label">Descripción del evento</label><br>
                <textarea name="email" class="caja" cols="30" rows="5"></textarea>
                <br>
                <label class="form-label">Localización</label><br>
                <input type="text" name="localizacion" class="caja"><br><br>

                <label class="form-label">Precios</label>
                <select name="precios">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                </select><br><br>
                <input type="file"><br><br>
                <input type="submit" value="Enviar" class="btn btn-primary">
            </form> 
        </div>


        <h1>Seleccione una plantilla</h1>
        <div id="plantillas">
            <img src="img/opcion2.png" alt="opcion1">
            <img src="img/opcion2.png" alt="opcion2">
        </div>
        <div id="opciones">
            <div>
                <input type="radio" name="opciones" id="opcion1">
                <label for="">Opción 1</label>
            </div>
            <div>
                <input type="radio" name="opciones" id="opcion2"> 
                <label for="">Opción 2</label>
            </div>
        </div>

        <h1>Modificaciones de plantilla</h1>
        <div id="bloques">
            <h2>Bloques de presentación</h2>
            <div id="bloque-presentacion">
                <div id="bloque-presentacion-opcion1">
                    <img src="img/Bloque-presentacion-opcion-1.png" alt="Bloque de presentación opción 1">
                </div>
                <div id="bloque-presentacion-opcion2">
                    <img src="img/Bloque-presentacion-opcion-2.png" alt="Bloque de presentación opción 2">
                </div>
            </div>
            
            <h2>Bloques de compras</h2>
            <div id="bloque-compra">
                <div id="bloque-compra-opcion1">
                    <img src="img/Bloque-compras-opcion-1.png" alt="Bloque de compra opción 1">
                </div>
                <div id="bloque-compra-opcion2">
                    <img src="img/Bloque-compras-opcion-2.png" alt="Bloque de compra opción 2">
                </div>
            </div>

            <h2>Bloques de restricciones y normas</h2>
            <div id="bloque-restricciones-normas">
                <div id="bloque-restricciones-normas-opcion1">
                    <img src="img/Bloque-restricciones-normas-opcion-1.png" alt="Bloque de restricciones y normas opción 1">
                </div>
                <div id="bloque-restricciones-normas-opcion2">
                    <img src="img/Bloque-restricciones-normas-opcion-2.png" alt="Bloque de restricciones y normas opción 2">
                </div>
            </div>
        </div>

        <h1>Previsualización</h1>
        <div id="previsualizacion">
            <img src="" alt="Previsualización no disponible">
        </div>

        <h1>Suba su propia página</h1>
        <div id="pagina-propia">
            <input type="file" id="miPagina">
        </div>

        <div class="footer">
            <p>Tech Xperience Creators&copy;</p>
            <ul>
                <a href=""><li>Redes(iconos)</li></a>
                <a href=""><li>Políticas de privacidad</li></a>
                <a href=""><li>Acerca de</li></a>
                <a href=""><li>Colaboraciones</li></a>
                <a href=""><li>Contacto</li></a>
                <a href=""><li>Donde estamos</li></a>
            </ul>
        </div>
    </main> */}

