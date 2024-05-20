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
        $nombre = $_GET["nombre"];
        $apellido = $_GET["apellido"];
        $edad = $_GET["edad"];
        $mail = $_GET["mail"];
        $contrasena = $_GET["contrasena"];

        $sql = "SELECT email FROM usuarios WHERE email = '$mail'";
        
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if ($row['email'] == $mail) { ?>
                <script>
                    location.href = "/crearcuenta";
                </script>
            <?php
            }
        }

        $sql = "INSERT INTO usuarios(id, nombre, apellidos, contrasena, edad, localizacion, email, nivel, telefono)
            Values(null, '$nombre', '$apellido', '$contrasena', '$edad', 'Espana', '$mail', 0, '666 66 66 66')";
        
        $conexion -> query($sql);

        session_start();
        $_SESSION["mail"] = $mail;
        ?>
        <script>
            location.href = "/";
        </script>
    </body>
</html>