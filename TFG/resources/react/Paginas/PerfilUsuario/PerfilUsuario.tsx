import {
    CheckIcon,
    CloseIcon,
    EditIcon,
    EmailIcon,
    StarIcon,
} from "@chakra-ui/icons";
import {
    Divider,
    Card,
    CardBody,
    CardFooter,
    Center,
    Heading,
    Stack,
    Text,
    Image,
    useEditableControls,
    ButtonGroup,
    IconButton,
    Flex,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export interface Usuario {
    id: number;
    nombre: string;
    apellidos: string;
    edad: number;
    localizacion: string;
    email: string;
    nivel: number;
}

export interface Entrada {
    id: number;
    cantidad: number;
    precio_total: number;
    qr: string;
    fecha_inicio: string;
    fecha_fin: string;
    id_usuario: number;
    id_evento: number;
    id_carrito: number;
    foto_evento: string;
    titulo_evento: string;
}

export const PerfilUsuario = () => {
    //Estos datos tienen que ser traidos de la BBDD
    const idUsuarioStr =
        localStorage.getItem("idUsr") == "" ||
        localStorage.getItem("idUsr") == null
            ? ""
            : localStorage.getItem("idUsr");

    const idUsuario = idUsuarioStr ? parseInt(idUsuarioStr, 10) : 0; // Puedes asignar 0 o cualquier valor por defecto

    const [datosUser, setUser] = useState<Usuario>();

    useEffect(() => {
        fetch(`http://localhost:8000/api/usuario/${idUsuario}`)
            .then((respuesta) => respuesta.json())
            .then((respuesta) => {
                setUser(respuesta);
            });
    }, []);

    const [entradas, setEntradas] = useState<Entrada[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/entradas/${idUsuario}`)
            .then((respuesta) => respuesta.json())
            .then((respuesta) => {
                setEntradas(respuesta);
            });
    }, []);

    console.log("🚀 ~ PerfilUsuario ~ entradas:", entradas);
    const [anchoInner, setAncho] = useState(window.innerWidth);

    const anchoInnerS = () => {
        setAncho(window.innerWidth);
    };

    const Carta = ({ historial, ancho }) => {
        return (
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"fit-content"}
                height={"fit-content"}
                marginBottom={"5px"}
                bg={useColorModeValue("#EDF2F7", "#14151e")}
            >
                <Image
                    maxWidth={ancho > 479 ? "50vw" : "100%"}
                    width={ancho > 479 ? "15vw" : ""}
                    src={historial.foto_evento}
                    alt={historial.titulo_evento}
                ></Image>

                <Stack textAlign={"center"} verticalAlign={"middle"}>
                    <CardBody>
                        <Heading size="md">{historial.titulo_evento}</Heading>

                        <Divider />
                        <Text>
                            Precio: <b>{historial.precio_total}€</b>
                        </Text>
                    </CardBody>

                    {/* <CardFooter>
                        <Text>
                            Fecha compra: <b>{historial.fechaCompra}</b>
                        </Text>
                    </CardFooter> */}
                </Stack>
            </Card>
        );
    };

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [mail, setMail] = useState("");

    //Primera carga de los datos del usuario
    /* useEffect(() => {
    setNombre(consulta.nombre)
    setApellido(consulta.apellido)
    setMail(consulta.mail)
    setUbicacion(consulta.ubicacion)
  }, []) */

    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();
        return isEditing ? (
            <ButtonGroup justifyContent={"center"}>
                <IconButton
                    icon={<CheckIcon></CheckIcon>}
                    {...getSubmitButtonProps()}
                />
                <IconButton
                    icon={<CloseIcon></CloseIcon>}
                    {...getCancelButtonProps()}
                />
            </ButtonGroup>
        ) : (
            <Flex justifyContent={"center"}>
                <IconButton
                    size={"sm"}
                    icon={<EditIcon></EditIcon>}
                    {...getEditButtonProps()}
                ></IconButton>
            </Flex>
        );
    }

    //Control para el ancho
    window.onresize = anchoInnerS;

    return (
        <>
            <div
                style={{
                    maxWidth: "600px",
                    margin: "20px auto",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "1px 1px 8px black",
                    marginTop: "10vh",
                }}
            >
                <img
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        margin: "0 auto 20px",
                        display: "block",
                    }}
                    src="media/user.png"
                    alt="Foto de perfil"
                />
                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        flexFlow: "column",
                    }}
                >
                    <Text textAlign={"center"} fontSize={"2x1"}>
                        {datosUser?.nombre + " " + datosUser?.apellidos}
                    </Text>
                    <p id="mail" style={{ margin: "5px 0" }}>
                        <EmailIcon></EmailIcon> : {datosUser?.email}
                    </p>
                    <p style={{ margin: "5px 0" }}>
                        <StarIcon></StarIcon> : {datosUser?.localizacion}
                    </p>
                </div>
            </div>
            <Center>
                <h2
                    style={{
                        fontSize: "xxx-large",
                        marginTop: "25px",
                        marginBottom: "25px",
                    }}
                >
                    Historial de compras
                </h2>
            </Center>
            <Divider marginBottom={"25px"} />
            <Center marginBottom={"25px"}>
                <div style={{ display: "flex", flexFlow: "column wrap" }}>
                    {entradas.map((entrada) =>
                        entrada.id_carrito === 2 ? (
                            <Carta
                                key={entrada.id}
                                historial={entrada}
                                ancho={anchoInner}
                            />
                        ) : (
                            ""
                        )
                    )}
                </div>
            </Center>
        </>
    );
};
