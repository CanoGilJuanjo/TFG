<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php
            $_servidor = "localhost";
            $_usuario = "root";
            $_contrasena = "1234";
            $_base_de_datos = "tfg";

            $conexion = new Mysqli($_servidor, $_usuario, $_contrasena, $_base_de_datos) 
            or die("Error de conexión");
        ?>
    </head>
    <body>
    <?php
        $id_usuario = $_GET["id_usuario"];
        $id_evento = $_GET["id_evento"];
        $id_carrito = $_GET["id_carrito"];
        $precio_total = $_GET["precio"];
        $fecha_inicio = $_GET["fecha_inicio"];
        $fecha_fin = $_GET["fecha_fin"];


        $sql = "INSERT INTO entradas(id, cantidad, precio_total, qr, fecha_inicio, fecha_fin, id_usuario, id_evento, id_carrito)
            VALUES(null, '1', '$precio_total', 'qr', '$fecha_inicio', '$fecha_fin', '$id_usuario', '$id_evento', '$id_carrito')";
        
        $conexion -> query($sql);
        
        ?>
        <script>
                location.href = `/evento/${<?php echo $id_evento ?>}`;
        </script>
    </body>
</html><?php /**PATH C:\Users\pollo\Desktop\Trabajo\TFG\resources\views/temp3.blade.php ENDPATH**/ ?>