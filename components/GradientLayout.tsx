import { Box, Flex, Text, Image } from '@chakra-ui/react';

const GradientLayout = ({
  color,
  children,
  image,
  title,
  subtitle,
  description,
  roundImage
}) => {
  return (
    <Box
      height='100%'
      overflowY='auto'
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, .95) 75%)`}
    >
      <Flex bg={`${color}.600`} p='40px' align='center'>
        <Box p='20px'>
          <Image
            boxSize='160px'
            boxShadow='2xl'
            src={image}
            borderRadius={roundImage ? '100%' : '3px'}
          />
        </Box>
        <Box p='60px' lineHeight='40px' color='white'>
          <Text fontSize='xs' fontWeight='bold' casing='uppercase'>
            {subtitle}
          </Text>
          <Text fontSize='6xl'>{title}</Text>
          <Text fontSize='xs'>{description}</Text>
        </Box>
      </Flex>
      <Box py='50px'>{children}</Box>
    </Box>
  );
};

export default GradientLayout;
