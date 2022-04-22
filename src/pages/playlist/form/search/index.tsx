import {
  Divider,
  InputWrapper,
  SimpleGrid,
  Space,
  useMantineTheme,
} from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import TrackCard from 'components/card/track';
import SearchBar from 'components/header/search-bar';
import Pagination from 'components/pagination';
import Subtitle from 'components/typography/subtitle';
import { useState } from 'react';
import { useGetSearchTracksQuery } from 'services/api/searchApi';
import { milisToMinutesAndSeconds } from 'services/helpers/convertTime';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';
import SelectTrackAction from '../action';

const limit = 10;

const Search = () => {
  const theme = useMantineTheme();
  const [activePage, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetSearchTracksQuery(
      query ? { q: query, limit, offset: activePage - 1 } : skipToken,
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
    <>
      <InputWrapper
        id='tf-search'
        label="Let's find something for your playlist"
        size='xl'
        labelProps={{ style: { fontWeight: 'bold' } }}
        sx={{ maxWidth: 350 }}
      >
        <SearchBar
          isLoading={isLoading || isFetching}
          id='tf-search'
          onSubmit={value => {
            if (value) setQuery(value);
          }}
          placeholder='Search tracks here'
        />
      </InputWrapper>

      <Space h='xl' />

      <SimpleGrid
        spacing='lg'
        cols={1}
        breakpoints={[{ minWidth: theme.breakpoints.md, cols: 2 }]}
      >
        {data?.items.map(track => {
          const { id, artists, name, duration_ms, album } = track;

          return (
            <div key={id}>
              <TrackCard
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

              <Divider mt='lg' />
            </div>
          );
        })}
      </SimpleGrid>

      <Space h='xl' />

      <Pagination count={data?.total} page={activePage} onChange={setPage} />
    </>
  );
};

export default Search;
