import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
  await prisma.song.deleteMany({});
  await prisma.playlist.deleteMany({});
  await prisma.artist.deleteMany({});
  await prisma.user.deleteMany({});

  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url
            }))
          }
        }
      });
    })
  );

  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      firstName: 'Bob',
      lastName: 'Marley',
      password: bcrypt.hashSync('password', salt)
    }
  });

  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${i + 1}`,
          user: {
            connect: { id: user.id }
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id
            }))
          }
        }
      });
    })
  );
};

run()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
