import {
  Container,
  LoadingOverlay,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import TrackCard from 'components/card/track';
import Subtitle from 'components/typography/subtitle';
import { useSearchParams } from 'react-router-dom';
import { useGetSearchTracksQuery } from 'services/api/searchApi';
import { milisToMinutesAndSeconds } from 'services/helpers/convertTime';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';
import SelectTrackAction from './components/action';

const SearchPage = () => {
  const theme = useMantineTheme();
  const [params] = useSearchParams();

  const query = params.get('q');
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetSearchTracksQuery(query ? { q: query } : skipToken, {
      refetchOnMountOrArgChange: true,
    });

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <Container px='xs' size='lg'>
      <LoadingOverlay
        visible={isLoading || isFetching}
        loaderProps={{ size: 'xl', color: 'white', variant: 'bars' }}
        overlayColor={theme.colors.dark[4]}
        overlayOpacity={0.6}
      />

      <SimpleGrid
        spacing='md'
        cols={1}
        breakpoints={[
          { minWidth: theme.breakpoints.lg, cols: 2 },
          { minWidth: theme.breakpoints.xl, cols: 3 },
        ]}
      >
        {data?.items.map(track => {
          const { id, artists, name, duration_ms, album } = track;

          return (
            <TrackCard
              key={id}
              id={id}
              title={name}
              description={`${artists[0].name} &bull; (${new Date(duration_ms)
                .toISOString()
                .substring(14, 5)})`}
              imageUrl={album.images[0].url}
            >
              <SelectTrackAction track={track} />
              <Subtitle size='md'>
                {milisToMinutesAndSeconds(duration_ms)}
              </Subtitle>
            </TrackCard>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default SearchPage;
