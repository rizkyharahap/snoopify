import {
  ActionIcon,
  Divider,
  Group,
  Image,
  Paper,
  Table,
  Title,
} from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import { default as CustomTitle } from 'components/typography/title';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { useAppSelector } from 'services/hooks/useAppSelector';
import { removeSelectedTrack } from 'services/reducers/trackSlice';
import X from 'tabler-icons-react/dist/icons/x';

const SelectedTracksList = () => {
  const dispatch = useAppDispatch();

  const { selectedTracks } = useAppSelector(state => state.track);

  if (selectedTracks.length === 0) return null;

  return (
    <>
      <Title order={2} mb='md'>
        Selected Track
      </Title>

      <Divider mt='sm' />

      <Table verticalSpacing='sm' fontSize='md' striped>
        <thead>
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ALBUM</th>
            <th style={{ textAlign: 'center' }}>REMOVE</th>
          </tr>
        </thead>

        <tbody>
          {selectedTracks.map(({ id, artists, name, album }, index) => (
            <tr key={id}>
              <td>
                <Subtitle lineClamp={1}>{index + 1}</Subtitle>
              </td>
              <td>
                <Group align='center' grow={false} noWrap>
                  <Paper shadow='xl' radius='sm'>
                    <Image
                      radius='sm'
                      width={50}
                      height={50}
                      src={album.images[0].url}
                      alt={name}
                    />
                  </Paper>

                  <div>
                    <CustomTitle size='md'>{name}</CustomTitle>

                    <Subtitle lineClamp={1} size='xs'>
                      {artists[0].name} &bull;{' '}
                      {new Date(album?.release_date).getFullYear()}
                    </Subtitle>
                  </div>
                </Group>
              </td>
              <td>
                <Subtitle lineClamp={1}>{album.name}</Subtitle>
              </td>
              <td>
                <ActionIcon
                  color='red'
                  radius='xl'
                  variant='light'
                  mx='auto'
                  onClick={() => dispatch(removeSelectedTrack(id))}
                >
                  <X size={18} />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Divider mb='xl' />
    </>
  );
};

export default SelectedTracksList;
