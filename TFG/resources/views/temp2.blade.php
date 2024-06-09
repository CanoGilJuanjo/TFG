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
    $mail = $_GET["mail"];
    $contrasena = $_GET["contrasena"];

    $sql = "SELECT contrasena FROM usuarios WHERE email = '$mail'";
    $result = $conexion->query($sql);
    if ($row = $result->fetch_assoc()) {
        $contrasena_tipada = $row['contrasena'];
        $passwordVerify = password_verify($contrasena, $contrasena_tipada);
        if (!$passwordVerify) { ?>
            <script>
                localStorage.setItem("error","Error contraseña incorrecta")
                location.href = "/iniciarsesion";
            </script>
            <?php
        } else {
            $sql2 = "SELECT id, email, contrasena FROM usuarios WHERE email = '$mail' AND contrasena = '$contrasena_tipada'";
            $result = $conexion->query($sql2);
            if ($row = $result->fetch_assoc()) {
                $user = $row["id"]; ?>
                <script>
                    localStorage.setItem("idUsr", "<?php echo $row["id"]; ?>");
                    localStorage.setItem("emailUsr", "<?php echo $mail; ?>");
                    localStorage.setItem("contrasenaUsr", "<?php echo $contrasena_tipada; ?>");
                </script>
                <?php
                $sql = "SELECT id from carrito where id_usuario = '$user'";
                $result = $conexion->query($sql);
                ?>
                <script>
                    localStorage.setItem("idCarrito", "<?php echo $result->fetch_assoc()["id"] ?>");
                    location.href = "/";
                </script>
            <?php
            } else { ?>
                <script>
                    location.href = "/iniciarsesion";
                </script>
    <?php
            }
        }
    }else{
        ?>
        <script>
            location.href = "/iniciarsesion"
            localStorage.setItem("error","Error no existe el usuario")
        </script>
        <?php
    } ?>

</body>

</html>