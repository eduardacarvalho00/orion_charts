import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex as='footer' justify='space-between' w='100%' h='38px' bg='purple.900' color='#5A5A89' px='60px' fontWeight={700} fontSize={10} mt='40px' py='11px'>
      <Text textTransform='uppercase'>Orion data visualisation</Text>
      <Text>2023</Text>
    </Flex>
  )
}