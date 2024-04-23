<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config("app.name") }}</title>
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Estilos de Mapas #SE TIENE QUE ELIMINAR DE ESTA PAGINA, SOLO SE USA EN LAS PAGINAS QUE LO NECESITEN# -->
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        <!-- Importamos REACT -->
        @viteReactRefresh
        @vite('resources/react/app.tsx')
    </head>
    <body>
        <div id="app" data-projects=""></div>
    </body>
</html>