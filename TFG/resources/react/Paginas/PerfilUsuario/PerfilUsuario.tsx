import { EditIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, CardFooter, Center, Heading, Stack,Text, Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const PerfilUsuario = () => {
  //Estos datos tienen que ser traidos de la BBDD
  const consulta =
  {
    nombre: "Pedro",
    apellido: "Pruebas",
    ubicacion: "Malaga,España",
    mail:"pedropruebas@gmail.com",
    historial:[
      {
        evento:"Rosse",
        imagen:"media/evento.png", 
        precio:"12,60",
        fechaCompra:"28/04/2024",
        descripcion:"Evento invernal en la discoteca Rosse"
      }
    ]
  }

  const Carta = ({historial}) =>{
    return(
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width={"90%"}
      >
        <Image width={"50vh"} src={historial.imagen} alt={historial.evento}></Image>

        <Stack>
          <CardBody>
            <Heading size='md'>{historial.evento}</Heading>
            <Text py='2'>
              {historial.descripcion}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    )
  }
  
  const [historialCompras,setHistorialCompra] = useState([])
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [ubicacion,setUbicacion] = useState("")
  const [mail,setMail] = useState("")

  useEffect(()=>{
    setNombre(consulta.nombre)
    setApellido(consulta.apellido)
    setMail(consulta.mail)
    setUbicacion(consulta.ubicacion)
  },[])

  return (
    <>
      <div style={{maxWidth:"600px",margin:"20px auto",padding:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"1px 1px 8px black"}}>
        <img style={{
          width:"150px",height:"150px",borderRadius:"50%",margin:"0 auto 20px",display:"block"
        }} src="media/user.png" alt="Foto de perfil"/>
        <div style={{
          textAlign:"center",
          display:"flex",
          flexFlow:"column"
        }}>
          <h2 style={{
            margin:"0",fontSize:"24px",marginBottom:"10px"
          }}>{nombre} {apellido}</h2>
          <p id='mail' style={{margin:"5px 0"}}><EmailIcon></EmailIcon> : {mail}</p>
          <p style={{margin:"5px 0"}}><StarIcon></StarIcon> : {ubicacion}</p>
        </div>
      </div>
      
      <Center>
        <h2 style={{fontSize:"xx-large"}}>Historial de compras</h2>
      </Center>
      <Center>
          <div style={{display:"flex", flexFlow:"column wrap"}}>
            {consulta.historial.map(respuesta =>{
              return(<Carta historial={respuesta}/>)
            })}
          </div>
          </Center>
    </>
  )
}
