/* eslint-disable react/no-children-prop */
import { Icon, SearchIcon } from '@chakra-ui/icons';
import {
  Image, Flex, Input, InputGroup, InputRightElement, Grid, GridItem, Link,
} from '@chakra-ui/react';
import { MdOutlinePerson } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import logo from '../assets/logo.png';

export function Header() {
  return (
    <Flex as="header" h="60px" bg="purple.900" align="center" justify="space-around">
        <Image src={logo} />
        <InputGroup bg="gray.900" borderRadius="8px" w="520px" h="32px" borderColor="transparent">
          <Input borderRadius="8px" h="32px" />
          <InputRightElement children={<SearchIcon color="purple.700" boxSize={5} mb={2} />} />
        </InputGroup>

        <Grid templateColumns="repeat(4, 1fr)" gap="80px">
          <GridItem>
            <Link color="purple.500" fontSize={16}>Statistics</Link>
          </GridItem>
          <GridItem>
            <Link color="purple.500" fontSize={16}>Overview</Link>
          </GridItem>
          <GridItem>
            <Link color="purple.500" fontSize={16}>Dashboard</Link>
          </GridItem>
          <GridItem>
            <Link color="purple.500" fontSize={16}>Analytics</Link>
          </GridItem>
        </Grid>

        <Flex flex="row" as="button">
          <Icon as={MdOutlinePerson} boxSize={8} color={'purple.500'} mr="18px" />
          <Icon as={FiSettings} boxSize={7} color={'purple.500'} />
        </Flex>
      </Flex>
  );
}
