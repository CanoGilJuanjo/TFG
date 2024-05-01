
import {
  Heading,
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const ModuloComponent = ({
	titulo,
	descripcion,
	valueS,
	valueP,
    imagen,
}) => {
	return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            imagen}
          objectFit="cover"
          alt="#"
        />

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              <Text>{titulo}</Text>
            </Heading>
            <Text color={'gray.500'}>{descripcion}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{valueS}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Standar
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{valueP}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Prime
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Usar Módulo
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

export default ModuloComponent;
