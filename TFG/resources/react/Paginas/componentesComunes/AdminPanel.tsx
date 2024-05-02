import React from 'react'
import ModuloComponent from './ModuloComponent'
import { SimpleGrid, Text } from '@chakra-ui/react';


const AdminPanel = () => {
	return (
    <>
    
    <Text textAlign={'left'} padding={5} fontWeight={'bold'}>Módulos instalados</Text>
    <hr/>
    
    <SimpleGrid minChildWidth={'280px'} spacing={'40px'}>
      <ModuloComponent
        titulo={'QR'}
        descripcion={'Genera códigos QR'}
        valueS={'100 máx'}
        valueP={'500 máx'}
        imagen={'https://user-images.githubusercontent.com/7532782/36424180-b6f16ad2-1642-11e8-8bf2-79c572077e0b.png'} />
      <ModuloComponent
        titulo={'Empleados'}
        descripcion={'Gestiona tus empleados'}
        valueS={'2 Admin'}
        valueP={'5 Admin'}
        imagen={'https://tcos.es/wp-content/uploads/2019/03/gestion-turnos-rotativos-1.svg'} />
      <ModuloComponent
        titulo={'Inventario'}
        descripcion={'Ten un seguimiento seguro'}
        valueS={'500 productos'}
        valueP={'2.000 productos'}
        imagen={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVaHhzOWTLcB_y4HvMKpgiMZ2asRUQo0xc0sMoIo20Q&s'} />
      <ModuloComponent
        titulo={'Promoción'}
        descripcion={'¡Anuncia tus descuentos!'}
        valueS={'10 anuncios'}
        valueP={'50 anuncios'}
        imagen={'https://cuadernodemarketing.com/wp-content/uploads/2015/01/promocionesydescuentos.jpg'} />
    </SimpleGrid>

    <Text textAlign={'left'} padding={5} fontWeight={'bold'}>Módulos Disponibles</Text>
    <hr/>

    <SimpleGrid minChildWidth={'280px'} spacing={'40px'}>
      <ModuloComponent
        titulo={'Estadísticas'}
        descripcion={'Estudia tus propias estadísticas'}
        valueS={'Gráficas básicas'}
        valueP={'Gráficas personalizadas'}
        imagen={'https://cdn-icons-png.flaticon.com/512/2709/2709774.png'} />
      <ModuloComponent
        titulo={'Clientes'}
        descripcion={'Gestiona tus clientes'}
        valueS={'2 Admin'}
        valueP={'5 Admin'}
        imagen={'https://www.openred.es/wp-content/uploads/2019/06/crm-openred-1.png'} />
    </SimpleGrid>

    </>
	);
};
export default AdminPanel;
