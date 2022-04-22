import {
  LoadingOverlay,
  SimpleGrid,
  Space,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import TrackCard from 'components/card/track';
import Subtitle from 'components/typography/subtitle';
import { useParams } from 'react-router-dom';
import { useGetPlaylistByIdQuery } from 'services/api/playlistApi';
import { milisToMinutesAndSeconds } from 'services/helpers/convertTime';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const PlaylistPage = () => {
  const { id } = useParams();

  const theme = useMantineTheme();

  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetPlaylistByIdQuery(id || skipToken, {
      refetchOnMountOrArgChange: true,
    });

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <>
      <Title>{data?.name}</Title>

      <Space h='xl' />

      <LoadingOverlay
        visible={isLoading || isFetching}
        loaderProps={{ size: 'xl', color: 'white', variant: 'bars' }}
        overlayColor={theme.colors.dark[4]}
        overlayOpacity={0.6}
      />

      <SimpleGrid
        spacing='lg'
        cols={1}
        breakpoints={[{ minWidth: theme.breakpoints.md, cols: 2 }]}
      >
        {data?.tracks?.items.map(({ track }) => {
          const { id, name, artists, album, duration_ms } = track;

          return (
            <TrackCard
              key={id}
              id={id}
              title={name}
              artist={artists[0].name}
              year={new Date(album?.release_date).getFullYear()}
              imageUrl={album.images[0].url}
            >
              <Subtitle size='md'>
                {milisToMinutesAndSeconds(duration_ms)}
              </Subtitle>
            </TrackCard>
          );
        })}
      </SimpleGrid>

      <Space h='xl' />
    </>
  );
};

export default PlaylistPage;
