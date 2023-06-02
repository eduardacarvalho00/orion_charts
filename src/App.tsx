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

          <Box w="1100px" h="850px" position="relative">
            <Center w="863px" h="778px">
            <CircleDetail
              w="87px"
              shadow=" 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 50px #FF0505"
              position="absolute"
              bottom="590px"
              left="320px"
            />
            <CircleDetail
              w="20px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              position="absolute"
              left="250px"
              top="170px"
            />
            <CircleDetail
              mr="27px"
              w="143px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              title="Development"
              value="$31,657"
              mb="200px"
            />
            <CircleDetail
              ml="25px"
              w="60px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 50px #FF0505;"
              position="absolute"
              left="220px"
              bottom="400px"
            />
            <CircleDetail
              w="101px"
              shadow=" 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              position="absolute"
              left="110px"
              bottom="360px"
            />
            <CircleDetail
              w="175px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              title="Design"
              value="$32,982"
              time="3 month"
              position="absolute"
              left="200px"
              bottom="180px"
            />
            <CircleDetail
              w="143px"
              shadow=" 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              title="Finance"
              value="$23,657"
              position="absolute"
              bottom="600px"
              left="440px"
            />
            <CircleDetail
              w="250px"
              shadow="0px 0px 20px rgba(255, 147, 147, 0.13), 60px 120px 80px rgba(5, 0, 255, 0.2), 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0000;"
              title="Investments"
              value="$76,644"
              time="3 month" 
            />
            <CircleDetail
              w="117px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              position="absolute"
              bottom="210px"
              left="500px"
            />
            <CircleDetail
              w="63px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 30px #FF0505"
              position="absolute"
              bottom="540px"
              left="570px"
            />
            <CircleDetail
              w="20px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505;"
              position="absolute"
              top="260px"
              left="660px"
            />
             <CircleDetail
               ml="25px"
               w="120px"
               shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
               title="Business"
               value="$21,987"
            />
            <CircleDetail
              w="101px"
              shadow=" 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              position="absolute"
              left="740px"
              top="370px"
            />
            <CircleDetail
              w="20px"
              shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505"
              position="absolute"
              bottom="350px"
              left="600px"
            />
            </Center>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
