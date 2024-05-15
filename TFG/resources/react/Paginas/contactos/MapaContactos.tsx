

import {
    AspectRatio,
  } from '@chakra-ui/react';

import React from 'react';
  
export default function MapaContactos() {
    return (
      <AspectRatio zIndex={0}  top={'720px'} height={'94vh'} _before={{paddingBottom: '0px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.2996623515555!2d-4.462811723546774!3d36.69133637227841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9c45623d2c3%3A0x7a634bd28c0cf953!2sMEDAC%20Nova%20%F0%9F%A5%87%20Centro%20Tecnol%C3%B3gico%20de%20FP!5e0!3m2!1ses!2ses!4v1698701252334!5m2!1ses!2ses" loading="lazy"></iframe>
      </AspectRatio>
    );
}