import GradientLayout from '../../components/GradientLayout';
import SongsTable from '../../components/SongsTable';
import { validateToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

const getBGColor = (id) => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'gray',
    'teal',
    'yellow'
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id);

  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle='playlist'
      description={`${playlist.songs.length} songs`}
      image='https://i.pravatar.cc/300'
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};

interface JwtPayload {
  id: number;
}

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(
    req.cookies['PLAYER_ACCESS_TOKEN']
  ) as JwtPayload;
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true
            }
          }
        }
      }
    }
  });

  return {
    props: {
      playlist
    }
  };
};

export default Playlist;
