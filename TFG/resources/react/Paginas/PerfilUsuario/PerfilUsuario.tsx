import { CheckIcon, CloseIcon, EditIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, CardFooter, Center, Heading, Stack, Text, Image, useEditableControls, ButtonGroup, IconButton, Flex, Editable, EditablePreview, EditableInput, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const PerfilUsuario = () => {
  //Estos datos tienen que ser traidos de la BBDD
  const consulta =
  {
    nombre: "Pedro",
    apellido: "Pruebas",
    ubicacion: "Malaga,España",
    mail: "pedropruebas@gmail.com",
    historial: [
      {
        evento: "Rosse",
        imagen: "media/evento.png",
        precio: "12,60",
        fechaCompra: "28/04/2024",
        descripcion: "Evento invernal en la discoteca Rosse"
      },
      {
        evento: "Laguna Seca",
        imagen: "media/evento.png",
        precio: "70,40",
        fechaCompra: "12/01/2024",
        descripcion: "3 tandas completas al circuito Laguna Seca"
      }
    ]
  }

  const Carta = ({ historial }) => {
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width={"60vw"}
        height={"20vh"}
        marginBottom={"5px"}
      >
        <Image width={"50vh"} src={historial.imagen} alt={historial.evento}></Image>

        <Stack>
          <CardBody>
            <Heading size='md'>{historial.evento} - {historial.precio}€</Heading>
            <Text py='2'>
              Descripcion: {historial.descripcion}
            </Text>
            <Text>
              Fecha compra: {historial.fechaCompra}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    )
  }

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [ubicacion, setUbicacion] = useState("")
  const [mail, setMail] = useState("")

  //Primera carga de los datos del usuario
  useEffect(() => {
    setNombre(consulta.nombre)
    setApellido(consulta.apellido)
    setMail(consulta.mail)
    setUbicacion(consulta.ubicacion)
  }, [])

  function EditableControls(){
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps
    } = useEditableControls();
    return isEditing?(
        <ButtonGroup justifyContent={"center"}>
          <IconButton icon={<CheckIcon></CheckIcon>}{...getSubmitButtonProps()}/>
          <IconButton icon={<CloseIcon></CloseIcon>} {...getCancelButtonProps()}/>
      </ButtonGroup>
    ):(
      <Flex justifyContent={"center"}>
        <IconButton size={'sm'} icon={<EditIcon></EditIcon>}{...getEditButtonProps()}></IconButton>
      </Flex>
    )
  }
  return (
    <>
      <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "1px 1px 8px black" }}>
        <img style={{
          width: "150px", height: "150px", borderRadius: "50%", margin: "0 auto 20px", display: "block"
        }} src="media/user.png" alt="Foto de perfil" />
        <div style={{
          textAlign: "center",
          display: "flex",
          flexFlow: "column"
        }}>
          {/* <h2 style={{
            margin: "0", fontSize: "24px", marginBottom: "10px"
          }}>{nombre} {apellido}</h2>
          */}
          <Editable textAlign={"center"} defaultValue={consulta.nombre+" "+consulta.apellido} fontSize={"2x1"} isPreviewFocusable={false}>
            <EditablePreview></EditablePreview>
            <Input as={EditableInput}></Input>
            <EditableControls></EditableControls>
          </Editable>
          <p id='mail' style={{ margin: "5px 0" }}><EmailIcon></EmailIcon> : {mail}</p>
          <p style={{ margin: "5px 0" }}><StarIcon></StarIcon> : {ubicacion}</p>
        </div>
      </div>

      <Center>
        <h2 style={{ fontSize: "xx-large" }}>Historial de compras</h2>
      </Center>
      <Center>
        <div style={{ display: "flex", flexFlow: "column wrap" }}>
          {consulta.historial.map(respuesta => {
            return (<Carta historial={respuesta} />)
          })}
        </div>
      </Center>
    </>
  )
}
