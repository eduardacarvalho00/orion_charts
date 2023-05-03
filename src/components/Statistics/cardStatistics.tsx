import {
  Flex, Box, Heading, Image, Text, Stack,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import cicleChart from '../../assets/circleChart.png';
import graphPink from '../../assets/graphPink.png';
import graphGreen from '../../assets/graphGreen.png';
import graphYellow from '../../assets/graphYellow.png';
import { StatCard } from './statCard';

export function CardStatistics() {
  return (
    <Box w="290px" h="900px">
      <Heading fontWeight="extrabold" fontSize={34} mb="26px">
        Statistics
      </Heading>
      <Flex w="290px" h="410px" bg="purple.900" borderRadius="10px" flexDir="column" align="center">
        <Image src={cicleChart} mb="15px" mt="20px" alt="circle graph" />
        <Box>
          <StatCard statNumber="2" justifyContent="center" statNumberFontSize={24} />
        </Box>

        <Box mt="20px">
          <Stack spacing="11px">
            <Flex>
              <Stack spacing="14px" direction="row">
                <Text w="105px">Presentation</Text>
                <Text opacity={0.5}>862</Text>
                <Image src={graphPink} />
              </Stack>
            </Flex>
            <Flex>
            <Stack spacing="14px" direction="row">
                <Text w="105px">Development</Text>
                <Text w="3s0px" opacity={0.5}>753</Text>
                <Image src={graphGreen} />
              </Stack>
            </Flex>
            <Flex>
            <Stack spacing="14px" direction="row">
                <Text w="105px">Research</Text>
                <Text w="3s0px" opacity={0.5}>553</Text>
                <Image src={graphYellow} />
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Flex>

      <Box m="30px 0 30px" w="290px" h="128" bg="purple.900" borderRadius={10} p="20px 30px" lineHeight={1.3}>
        <StatCard statNumberFontSize={34} statNumber="10" textAlign="start" justifyContent="flex-start" />
      </Box>

      <Box w="290px" h="230px" bg="purple.900" borderRadius={10} p="20px 30px">
        <Stack spacing="11px">
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Travel</Text>
              <Text color="purple.300">760</Text>
              <Text>2,540</Text>
              <TriangleUpIcon color="green.500" />
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Presentation</Text>
              <Text color="purple.300">650</Text>
              <Text>2,304</Text>
              <TriangleDownIcon color="red.900" />
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Business</Text>
              <Text color="purple.300">612</Text>
              <Text>2,140</Text>
              <TriangleUpIcon color="green.500" />
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Finance</Text>
              <Text color="purple.300">598</Text>
              <Text>1,976</Text>
              <TriangleUpIcon color="green.500" />
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Travel</Text>
              <Text color="purple.300">513</Text>
              <Text>1,903</Text>
              <TriangleDownIcon color="red.900" />
            </Stack>
          </Flex>
          <Flex>
            <Stack spacing="14px" direction="row">
              <Text w="105px">Startup</Text>
              <Text color="purple.300">498</Text>
              <Text>1,320</Text>
              <TriangleDownIcon color="red.900" />
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
