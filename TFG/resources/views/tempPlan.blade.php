<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planes</title>
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
        $nombre = $_GET["nombre"];
        $precio = $_GET["precioTotal"];
        $foto = $_GET["foto"];
        $fechaI = $_GET["fechaInicio"];
        $fechaF = $_GET["fechaFin"];
        $usuario = $_GET["idUser"];
        $carrito = $_GET["carrito"];
        $sql = "INSERT INTO entradas(id,titulo_evento,foto_evento,cantidad,precio_total,qr,fecha_inicio,fecha_fin,id_usuario,id_evento,id_carrito) VALUES(null,'$nombre','$foto',1,$precio,qr,'$fechaI','$fechaF',$usuario,1,$carrito)";
        $conexion -> query($sql);
        ?>
        <script>
            location.href = "/carritocompra"    
        </script>
    <?php

    ?>
</body>
</html>