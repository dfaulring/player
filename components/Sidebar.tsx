import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';
import { usePlaylist } from '../lib/hooks';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/'
  }
];

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const { playlists } = usePlaylist();

  console.log('runnning', playlists)

  return (
    <Box
      width='100%'
      height='calc(100vh - 100px)'
      bg='black'
      px='5px'
      color='gray'
    >
      <Box py='20px' height='100%'>
        <Box>
          <Box width='120px' mb='20px' px='20px'>
            LOGO
          </Box>
          <Box mb='20px'>
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem px='20px' fontSize='16px' key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route}>
                      <LinkOverlay cursor='pointer'>
                        <ListIcon as={menu.icon} color='white' mr='20px' />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <List spacing={2}>
              {musicMenu.map((item) => (
                <ListItem px='20px' fontSize='16px' key={item.name}>
                  <LinkBox>
                    <NextLink href={item.route}>
                      <LinkOverlay cursor='pointer'>
                        <ListIcon as={item.icon} color='white' mr='20px' />
                        {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box pr='20px'>
          <Divider color='gray.800' my='20px' />
        </Box>
        <Box height='66%' overflowY='auto' py='20px'>
          <List spacing={2}>
            {playlists.map((playlist: any) => (
              <ListItem px='20px' key={playlist.id}>
                <LinkBox>
                  <NextLink href='/' passHref>
                    <LinkOverlay cursor='pointer'>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
