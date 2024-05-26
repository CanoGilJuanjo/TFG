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
        $mail = $_GET["mail"];
        $contrasena = $_GET["contrasena"];

        $sql = "SELECT id, email, contrasena FROM usuarios WHERE email = '$mail' AND contrasena = '$contrasena'";

        $result = $conexion->query($sql);
        if ($row = $result->fetch_assoc()) { ?>
            <script>
                localStorage.setItem("idUsr", "<?php echo $row["id"]; ?>");
                localStorage.setItem("emailUsr", "<?php echo $mail; ?>");
                localStorage.setItem("contrasenaUsr", "<?php echo $contrasena; ?>");
                location.href = "/";
            </script>
        <?php
        } else { ?> 
            <script>
                location.href = "/iniciarsesion";
            </script>
        <?php
        }
        ?>
    </body>
</html>