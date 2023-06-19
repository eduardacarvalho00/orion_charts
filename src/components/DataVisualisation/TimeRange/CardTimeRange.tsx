import { Stack, Center } from '@chakra-ui/react';
import { ButtonTimeRange } from './ButtonTimeRange';

export function CardTimeRange() {
  return (
    <Stack direction="row" spacing={10} align="center">
      <ButtonTimeRange text="1W" />
      <ButtonTimeRange text="1M" />
      <Center
        as="button" 
        borderRadius={16}
        bg="#3247E6"
        boxShadow="0px 0px 15px rgba(50, 71, 230, 0.3)"
        w="53px"
        h="32px"
      >
        <ButtonTimeRange text="3M" />
      </Center>
      <ButtonTimeRange text="1Y" />
      <ButtonTimeRange text="ALL" />
    </Stack>
  );
}
