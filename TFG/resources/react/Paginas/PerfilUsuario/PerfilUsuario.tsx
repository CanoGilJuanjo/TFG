import { EditIcon, EmailIcon } from '@chakra-ui/icons'
import { Button, Icon, styled } from '@chakra-ui/react'
import React, { useState } from 'react'

export const PerfilUsuario = () => {
  const editarMail = () => {

  }

  return (
    <>
      <div style={{maxWidth:"600px",margin:"20px auto",padding:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.1)"}}>
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
          }}>Pedro Pruebas Codigo</h2>
          <p style={{margin:"5px 0"}}><EmailIcon></EmailIcon> : usuario@example.com <EditIcon _hover={{cursor:"pointer"}}  onClick={editarMail}></EditIcon> </p>
          <p style={{margin:"5px 0",display:"flex",width:"max-width"}}><img src='media/ubicacion.ico' style={{width:"20px",margin:0,padding:0}}/> : Malaga, España</p>
        </div>
      </div>
    </>
  )
}
