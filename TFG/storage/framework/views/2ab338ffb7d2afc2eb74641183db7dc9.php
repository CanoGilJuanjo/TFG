<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo e(config("app.name")); ?></title>
        <link rel="shortcut icon" href="<?php echo e(asset('favicon.ico')); ?>" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Estilos de Mapas #SE TIENE QUE ELIMINAR DE ESTA PAGINA, SOLO SE USA EN LAS PAGINAS QUE LO NECESITEN# -->
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        <!-- Bootstrap -->
        <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
        <!-- Importamos REACT -->
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')('resources/react/app.tsx'); ?>
    </head>
    <body>
        <div id="app" data-projects=""></div>
        <script> src="{{ asset('tsx/app.tsx')"</script>
    </body>
</html><?php /**PATH C:\Users\pollo\Desktop\Trabajo\TFG\resources\views/evento.blade.php ENDPATH**/ ?>