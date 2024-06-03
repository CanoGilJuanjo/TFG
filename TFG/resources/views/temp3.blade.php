<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php
            $_servidor = "localhost";
            $_usuario = "root";
            $_contrasena = "";
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
        $titulo_evento = $_GET["titulo_evento"];
        $foto_evento = $_GET["foto_evento"];


        $sql = "INSERT INTO entradas(id, titulo_evento, foto_evento, cantidad, precio_total, qr, fecha_inicio, fecha_fin, id_usuario, id_evento, id_carrito)
            VALUES(null, '1', '$titulo_evento', '$foto_evento', '$precio_total', 'qr', '$fecha_inicio', '$fecha_fin', '$id_usuario', '$id_evento', '$id_carrito')";
        
        $conexion -> query($sql);
        
        ?>
        <script>
                location.href = `/evento/${<?php echo $id_evento ?>}`;
        </script>
    </body>
</html>