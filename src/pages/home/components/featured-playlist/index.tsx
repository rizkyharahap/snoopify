import { Stack } from '@mantine/core';
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
    <Stack justify='flex-start' spacing='xl'>
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
    </Stack>
  );
};

export default FeaturedPlaylist;
