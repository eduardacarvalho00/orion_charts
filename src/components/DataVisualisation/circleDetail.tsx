import {
  Center, Text, Heading, CenterProps, 
} from '@chakra-ui/react';

interface CircleDetailProps extends CenterProps{
  value?: string
  title?: string,
  time?: string,
  w: string,
  shadow: string
}

export function CircleDetail({
  time, title, value, w, shadow, ...rest 
}: CircleDetailProps) {
  return (
    <Center
      w={w}
      h={w}
      borderRadius="full"
      bg="radial-gradient(96% 96% at 70.4% 31.2%, #030092 0%, rgba(0, 2, 16, 0) 100%)"
      boxShadow={shadow}
      flexDir="column"
      {...rest}
    >
      <Text fontSize={16}>{title}</Text>
      <Heading fontWeight="bold" fontSize={20}>{value}</Heading>
      <Text fontSize={14} color="purple.400">{time}</Text>
    </Center>
  );
}
