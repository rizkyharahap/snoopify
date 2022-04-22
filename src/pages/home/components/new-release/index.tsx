import { MantineSizes, SimpleGrid, useMantineTheme } from '@mantine/core';
import AlbumCard from 'components/card/album';
import AlbumLoadingScreen from 'components/card/album/loading';
import { useGetNewReleasesQuery } from 'services/api/browseApi';
import {
  ObjectBreakPoint,
  useChangeBreakpoint,
} from 'services/hooks/useChangeBreakpoint';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const columns: ObjectBreakPoint<number> = {
  base: 3,
  xs: 4,
  sm: 4,
  md: 5,
  lg: 6,
  xl: 6,
};

const NewRelease = () => {
  const theme = useMantineTheme();

  const limit = useChangeBreakpoint<number>(columns);

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetNewReleasesQuery(limit);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <SimpleGrid
      spacing='xl'
      cols={columns.base}
      breakpoints={Object.keys(columns)
        .filter(key => key !== 'base')
        .map(key => {
          return {
            minWidth: theme.breakpoints[key as keyof MantineSizes],
            cols: columns[key as keyof MantineSizes],
          };
        })}
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
