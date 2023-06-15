import {
  Flex, Box, Center, Heading, Text, Stack,
} from '@chakra-ui/react';
import { CircleDetail } from './components/DataVisualisation/circleDetail';
import { CircleDetail20px } from './components/DataVisualisation/circleDetail20px';
import { Header } from './components/header';
import { CardStatistics } from './components/Statistics/cardStatistics';

function App() {
  return (
    <>
      <Header />
      <Flex justify="center" mt="42px">
        <Flex w="90vw" align="center" justify="space-between">
          <CardStatistics />
         
          <Box w="1100px" h="850px" position="relative">
            <Heading
              fontSize={72}
              color="#16162B"
              fontWeight={800}
              lineHeight="118px"
              letterSpacing="-1.75px"
              fontFamily="Open Sans"
              position="absolute"
              top="40px"
              left="130px"
            >
              Data visualisation
            </Heading>
            <Flex
              border="1px solid #252545"
              borderRadius="full"
              w="778px"
              h="778px"
              position="absolute"
              left="75px" 
              flexDir="column"
              align="center"
            >
              <Flex flexDir="column">
                <Text
                  fontSize={10}
                  fontWeight={700}
                  fontFamily="Open Sans"
                  color="#3D3D60"
                  textAlign="center"
                  letterSpacing="5px"
                  lineHeight="16px"
                  mb="20px"
                >
                  TIME RANGE
                </Text>
                <Stack direction="row" spacing={10} align="center">
                  <Text fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>1W</Text>
                  <Text fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>1M</Text>
                  <Center
                    borderRadius={16}
                    bg="#3247E6"
                    boxShadow="0px 0px 15px rgba(50, 71, 230, 0.3)"
                    w="53px"
                    h="32px"
                  >
                    <Text fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>3M</Text>
                  </Center>
                  
                  <Text fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>1Y</Text>
                  <Text fontFamily="Mulish" fontWeight={700} color="white" fontSize={13}>ALL</Text>
                </Stack>
              </Flex>
            </Flex>
            <Box
              border="1px solid #252545"
              borderRadius="full"
              w="648px"
              h="648px"
              position="absolute"
              left="145px"
              top="70px" 
            />
            
            <Center w="863px" h="778px">
              
            <CircleDetail
              w="87px"
              shadow=" 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 50px #FF0505"
              position="absolute"
              bottom="590px"
              left="320px"
            />
            <CircleDetail20px 
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
            <CircleDetail w="64px" shadow="0px 4px 80px #2300F8, inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 16px 20px rgba(130, 5, 255, 0.95)" position="absolute" left="65px" top="260px" />
            <CircleDetail w="64px" shadow="0px 4px 80px #2300F8, inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 16px 20px rgba(130, 5, 255, 0.95)" position="absolute" left="10px" />
            <CircleDetail w="64px" shadow="0px 4px 80px #2300F8, inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 16px 20px rgba(130, 5, 255, 0.95)" position="absolute" left="65px" bottom="140px" />
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
            <CircleDetail20px 
              left="120px"
              bottom="280px"
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
              shadow="0px 0px 20px rgba(255, 147, 147, 0.13), 60px 120px 80px rgba(5, 0, 255, 0.2), 0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0000"
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
            <CircleDetail w="105px" shadow="0px 4px 80px #2300F8, inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 16px 20px rgba(130, 5, 255, 0.95)" position="absolute" left="800px" top="130px" />
            <CircleDetail20px
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
             <CircleDetail w="64px" shadow="0px 4px 80px #2300F8, inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 16px 20px rgba(130, 5, 255, 0.95)" position="absolute" top="500px" left="800px" />
            <CircleDetail20px
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
