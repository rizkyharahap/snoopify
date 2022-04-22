import {
  Container,
  LoadingOverlay,
  Pagination,
  SimpleGrid,
  Space,
  useMantineTheme,
} from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import TrackCard from 'components/card/track';
import Subtitle from 'components/typography/subtitle';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSearchTracksQuery } from 'services/api/searchApi';
import { milisToMinutesAndSeconds } from 'services/helpers/convertTime';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';
import SelectTrackAction from './components/action';

const SearchPage = () => {
  const [activePage, setPage] = useState(1);

  const theme = useMantineTheme();
  const [params] = useSearchParams();

  const query = params.get('q');
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetSearchTracksQuery(
      query ? { q: query, offset: activePage } : skipToken,
      {
        refetchOnMountOrArgChange: true,
      },
    );

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <Container px='xs' size='md'>
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
        {data?.items.map(track => {
          const { id, artists, name, duration_ms, album } = track;

          return (
            <>
              <TrackCard
                key={id}
                id={id}
                title={name}
                artist={artists[0].name}
                year={new Date(album?.release_date).getFullYear()}
                imageUrl={album.images[0].url}
              >
                <SelectTrackAction track={track} />
                <Subtitle size='md'>
                  {milisToMinutesAndSeconds(duration_ms)}
                </Subtitle>
              </TrackCard>
            </>
          );
        })}
      </SimpleGrid>

      <Space h='xl' />

      {data?.total && data.total > 1 && (
        <Pagination
          color='brand'
          ml='auto'
          align='flex-end'
          total={data.total}
          page={activePage}
          onChange={setPage}
        />
      )}
    </Container>
  );
};

export default SearchPage;
