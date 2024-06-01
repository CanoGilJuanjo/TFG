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
        }else{
            $hash = password_hash($contrasena, PASSWORD_DEFAULT);
            $sql = "INSERT INTO usuarios(id, nombre, apellidos, contrasena, edad, localizacion, email, nivel, telefono)
            Values(null, '$nombre', '$apellido', '$hash', '$edad', 'Espana', '$mail', 0, '666 66 66 66')";
            
            $conexion -> query($sql);

            $sql = "SELECT id FROM usuarios WHERE email = '$mail'";

            $result = $conexion->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $id_usuario = $row['id'];
            }

            $sql = "INSERT INTO carrito(id, precio_total, id_usuario)
                Values(null, 0, '$id_usuario')";
            
            $conexion -> query($sql);

            $sql = "SELECT id FROM carrito WHERE id_usuario = '$id_usuario'";
            
            $result = $conexion -> query($sql);
            

            if ($row = $result->fetch_assoc()) { ?>
                <script>
                    localStorage.setItem("idCarrito", <?php echo $row['id'] ?>);
                </script>
            <?php
            }

            $sql = "SELECT id, email, contrasena FROM usuarios WHERE email = '$mail' AND contrasena = '$hash'";

            $result = $conexion->query($sql);
            if ($row = $result->fetch_assoc()) { ?>
                <script>
                    localStorage.setItem("idUsr", "<?php echo $row["id"]; ?>");
                    localStorage.setItem("emailUsr", "<?php echo $mail; ?>");
                    localStorage.setItem("contrasenaUsr", "<?php echo $hash; ?>");
                    location.href = "/";
                </script>
            <?php
            }
        }

        
        ?>
    </body>
</html><?php /**PATH C:\Users\pollo\Desktop\Trabajo\TFG\resources\views/temp.blade.php ENDPATH**/ ?>