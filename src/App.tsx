import {
  Flex, Box, Heading, Text, Stack,
} from '@chakra-ui/react';
import { RiCopperCoinLine, RiPieChart2Line, RiUserStarLine } from 'react-icons/ri';
import { BoxCircles } from './components/DataVisualisation/BoxCircles';
import { CardInformation } from './components/DataVisualisation/CardInformation';
import { CardTimeRange } from './components/DataVisualisation/TimeRange/CardTimeRange';
import { Header } from './components/Header';
import { CardStatistics } from './components/Statistics/CardStatistics';
import { Footer } from './components/Footer';

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
                <CardTimeRange />
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
            <BoxCircles />
            <Stack
              position="absolute"
              w="960px"
              justify="center"
              direction="row"
              spacing="100px"
              bottom="-20px"
            >
              <CardInformation
                title="Trend goods"
                number="204"
                iconName={RiCopperCoinLine} 
              />
              <CardInformation
                title="Shopping views"
                number="65,540"
                iconName={RiUserStarLine} 
              />
              <CardInformation
                title="Store dymanics"
                number="325"
                iconName={RiPieChart2Line} 
              />
            </Stack>
          </Box>
          
        </Flex>
      </Flex>
      <Footer/>
    </>
  );
}

export default App;
