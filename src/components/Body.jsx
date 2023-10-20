import {
  Center,
  Heading,
} from '@chakra-ui/react'

import { useLocation } from "react-router-dom";

function Body() {

  const title = useLocation().state
  
  return (
    <Center w='100%' h='100%'>
      <Heading size='xl' color='gray.400'>{title}</Heading>
    </Center>
  )
}

export default Body