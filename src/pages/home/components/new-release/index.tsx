import { SimpleGrid } from '@mantine/core';
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
    <SimpleGrid
      cols={4}
      spacing='xl'
      breakpoints={[
        { maxWidth: 980, cols: 3 },
        { maxWidth: 755, cols: 2 },
        { maxWidth: 600, cols: 3 },
      ]}
    >
      {isLoading || isFetching || isError ? (
        <AlbumLoadingScreen length={limit} />
      ) : (
        data?.items.map(({ id, name, artists, images }) => (
          <AlbumCard
            key={id}
            id={id}
            title={name}
            description={artists[0].name}
            imageUrl={images[0].url}
          />
        ))
      )}
    </SimpleGrid>
  );
};

export default NewRelease;
