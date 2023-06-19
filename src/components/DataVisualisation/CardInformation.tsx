import {
  Flex, Center, Icon, Heading, Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CardInformationProps{
  iconName: IconType;
  title: string;
  number:string;
}

export function CardInformation({ title, iconName, number }: CardInformationProps) {
  return (
    <Flex flexDir="column" align="center">
      <Center
        w="46px"
        h="46px"
        borderRadius={8}
        border="1px solid #363661"
        mb="16px"
      >
        <Icon as={iconName} color="purple.500" boxSize={6} />
      </Center>
      <Text
        color="#5A5A89"
        fontWeight={700}
        fontSize={10}
        letterSpacing="1.5px"
        textTransform="uppercase"
        w="max-content"
      >
        {title}
      </Text>
      <Heading color="white" letterSpacing="-1.5px" fontWeight={700} fontSize={60}>{number}</Heading>
    </Flex>
  );
}
