import { Text } from '@chakra-ui/react';

interface ButtonTimeRangeProps{
  text: string;
}

export function ButtonTimeRange({ text }: ButtonTimeRangeProps) {
  return (
    <Text as="button" fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>{text}</Text>
  );
}
