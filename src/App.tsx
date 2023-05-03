import {
  Flex, Box, Center,
} from '@chakra-ui/react';
import { CircleDetail } from './components/DataVisualisation/circleDetail';
import { Header } from './components/Header';
import { CardStatistics } from './components/Statistics/cardStatistics';

function App() {
  return (
    <>
      <Header />
      <Flex justify="center" mt="42px">
        <Flex w="90vw" align="center" justify="space-between">
          <CardStatistics />

          <Box w="1222px" h="850px" position="relative">
            <Center w="863px" h="778px">
            <CircleDetail
              mr="27px"
              w="143px"
              shadow="00px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505;"
              title="Development"
              value="$31,657"
            />
            <CircleDetail
              ml="25px"
              w="60px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 50px #FF0505;"
              position="absolute"
            />
            <CircleDetail
              w="250px"
              shadow="0px 0px 20px rgba(255, 147, 147, 0.13), 60px 120px 80px rgba(5, 0, 255, 0.2), 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0000;"
              title="Investments"
              value="$76,644"
              time="3 month" 
            />
             <CircleDetail
               ml="25px"
               w="120px"
               shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
               title="Business"
               value="$21,987"
            />
            
            </Center>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
