import { Box, Flex, Text } from '@chakra-ui/react';

const PlayerBar = () => {
  return (
    <Box height='100px' width='100vw' bg='gray.900' padding='10px'>
      <Flex align='center'>
        <Box padding='20px' color='white' width='30%'>
          <Text fontSize='large'>Song Name</Text>
          <Text fontSize='small'>Artist Name</Text>
        </Box>
        <Box width='40%'>
          Controls
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
