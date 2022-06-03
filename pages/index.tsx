import { Box, Flex, Text, Image } from '@chakra-ui/react';
import GradientLayout from '../components/GradientLayout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      roundImage={true}
      color='purple'
      subtitle='profile'
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image='https://i.pravatar.cc/300'
    >
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Top artists this month
          </Text>
          <Text fontSize='md'>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX='10px' width='12.5%'>
              <Box bg='gray.900' borderRadius='4px' padding='15px' width='100%'>
                <Image
                  borderRadius='100%'
                  src='https://i.pravatar.cc/300?u=a042581f4e29026704d'
                />
                <Box marginTop='20px'>
                  <Text fontSize='lg'>{artist.name}</Text>
                  <Text fontSize='xs'>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: {
      artists
    }
  };
};

export default Home;
