import { Divider, SimpleGrid, useMantineTheme } from '@mantine/core';
import PlaylistCard from 'components/card/playlist';
import PlaylistLoadingScreen from 'components/card/playlist/loading';
import { useGetFeaturedPlaylistsQuery } from 'services/api/browseApi';
import {
  ObjectBreakPoint,
  useChangeBreakpoint,
} from 'services/hooks/useChangeBreakpoint';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const columns: ObjectBreakPoint<number> = {
  base: 10,
  xs: 10,
  sm: 10,
  md: 10,
  lg: 10,
  xl: 12,
};

const FeaturedPlaylist = () => {
  const theme = useMantineTheme();

  const limit = useChangeBreakpoint<number>(columns);

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetFeaturedPlaylistsQuery(limit);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <SimpleGrid
      spacing='xl'
      cols={1}
      breakpoints={[
        { minWidth: theme.breakpoints.xs, cols: 2 },
        { minWidth: theme.breakpoints.xl, cols: 3 },
      ]}
    >
      {isLoading || isFetching || isError ? (
        <PlaylistLoadingScreen length={limit} />
      ) : (
        data?.items.map(({ id, name, description, images }) => (
          <div key={id}>
            <PlaylistCard
              key={id}
              id={id}
              title={name}
              description={description}
              imageUrl={images[0].url}
            />

            <Divider mt='lg' />
          </div>
        ))
      )}
    </SimpleGrid>
  );
};

export default FeaturedPlaylist;
