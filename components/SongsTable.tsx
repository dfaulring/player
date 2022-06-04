import { formatTime, formatDate } from '../lib/formatters';
import {
  Box,
  Table,
  Thead,
  Td,
  Th,
  Tr,
  IconButton,
  Tbody
} from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

const SongsTable = ({ songs }) => {
  return (
    <Box bg='transparent' color='white'>
      <Box padding='10px' marginBottom='20px'>
        <IconButton
          icon={<BsFillPlayFill fontSize='30p' />}
          colorScheme='green'
          size='lg'
          isRound
          aria-label='Play Button'
        />
      </Box>
      <Table variant='unstyled'>
        <Thead borderBottom='1px solid' borderColor='rgba(255, 255, 255, 0.2)'>
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Date Added</Th>
            <Th>
              <AiOutlineClockCircle />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {songs.map((song, i) => (
            <Tr
              sx={{
                transition: 'all .3s',
                '&:hover': {
                  bg: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              key={song.id}
            >
              <Td>{i + 1}</Td>
              <Td>{song.name}</Td>
              <Td>{formatDate(song.createdAt)}</Td>
              <Td>{formatTime(song.duration)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SongsTable;
