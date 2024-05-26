

import {
    AspectRatio,
    calc,
  } from '@chakra-ui/react';

import React from 'react';
  
export default function MapaContactos() {
    return (
      <AspectRatio zIndex={0}  top={'100vh'} height={"95vh"} _before={{paddingBottom: '0px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.2847859815483!2d-4.4502849!3d36.715721099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7faad536219%3A0x7b124f712b0b7231!2sEl%20C%C3%ADrculo%20Coworking!5e0!3m2!1ses!2ses!4v1716046116131!5m2!1ses!2ses" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </AspectRatio>
    );
}