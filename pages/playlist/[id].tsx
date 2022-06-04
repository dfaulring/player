import { validateToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

const Playlist = ({ playlist }) => {
  return <h1>{playlist.name}</h1>;
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
