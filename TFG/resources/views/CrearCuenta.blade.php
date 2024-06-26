<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config("app.name") }}</title>
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="shortcut icon" href="media/BLANCO_FIT.png" type="image/x-icon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Estilos de Mapas #SE TIENE QUE ELIMINAR DE ESTA PAGINA, SOLO SE USA EN LAS PAGINAS QUE LO NECESITEN# -->
        <!-- <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' /> -->
        <!-- Bootstrap -->
        <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
        <!-- Importamos REACT -->
        @viteReactRefresh
        @vite('resources/react/app.tsx')
    </head>
    <body>
        <div id="app" data-projects=""></div>
    </body>
</html>