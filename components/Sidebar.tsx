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

const Sidebar = () => {
  return (
    <Box
      width='100%'
      height='calc(100vh - 100px)'
      bg='black'
      px='5px'
      color='gray'
    >
      <Box py='20px'>
        <Box>
          <Box width='120px' mb='20px'>
            LOGO player
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
