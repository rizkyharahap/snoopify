import { Stack } from '@mantine/core';
import AlbumCard from 'components/card/album';
import AlbumLoadingScreen from 'components/card/album/loading';
import { useGetNewReleasesQuery } from 'services/api/browseApi';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const NewRelease = () => {
  const limit = 6;

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetNewReleasesQuery(limit);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <Stack justify='flex-start' spacing='xl'>
      {isLoading || isFetching || isError ? (
        <AlbumLoadingScreen length={limit} />
      ) : (
        data?.items.map(({ id, name, artists, images }) => (
          <AlbumCard
            key={id}
            id={id}
            name={name}
            description={artists[0].name}
            imageUrl={images[0].url}
          />
        ))
      )}
    </Stack>
  );
};

export default NewRelease;
