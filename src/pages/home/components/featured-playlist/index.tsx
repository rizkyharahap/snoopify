import { SimpleGrid } from '@mantine/core';
import PlaylistCard from 'components/card/playlist';
import PlaylistLoadingScreen from 'components/card/playlist/loading';
import { useGetFeaturedPlaylistsQuery } from 'services/api/playlistApi';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const FeaturedPlaylist = () => {
  const limit = 3;

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetFeaturedPlaylistsQuery(limit);

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
        <PlaylistLoadingScreen length={limit} />
      ) : (
        data?.items.map(({ id, name, description, images }) => (
          <PlaylistCard
            key={id}
            id={id}
            title={name}
            description={description}
            imageUrl={images[0].url}
          />
        ))
      )}
    </SimpleGrid>
  );
};

export default FeaturedPlaylist;
