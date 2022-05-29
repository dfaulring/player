import { FC, useState } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push('/');
  };

  return (
    <Box height='100vh' width='100vw' bg='black' color='white'>
      <Flex
        justify='center'
        align='center'
        height='100px'
        borderBottom='white 1px solid'
      >
        LOGO
      </Flex>
      <Flex justify='center' align='center' height='calc(100vh - 100px)'>
        <Box padding='50px' bg='gray.900' borderRadius='6px'>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder='email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              mt='16px'
              placeholder='password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              mt='24px'
              width='100%'
              type='submit'
              bg='green.500'
              _hover={{ bg: 'green.300' }}
              isLoading={isLoading}
              textTransform='capitalize'
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
