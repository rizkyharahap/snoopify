import { MantineSizes, SimpleGrid, useMantineTheme } from '@mantine/core';
import CategoryCard from 'components/card/category';
import CategoryLoadingScreen from 'components/card/category/loading';
import { useGetCategoriesQuery } from 'services/api/browseApi';
import {
  ObjectBreakPoint,
  useChangeBreakpoint,
} from 'services/hooks/useChangeBreakpoint';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const columns: ObjectBreakPoint<number> = {
  base: 3,
  xs: 5,
  sm: 5,
  md: 6,
  lg: 7,
  xl: 8,
};

const Categories = () => {
  const theme = useMantineTheme();
  const limit = useChangeBreakpoint<number>(columns);

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetCategoriesQuery(limit);

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
        <CategoryLoadingScreen length={limit} />
      ) : (
        data?.items.map(({ id, icons, name }) => (
          <CategoryCard key={id} id={id} name={name} imageUrl={icons[0].url} />
        ))
      )}
    </SimpleGrid>
  );
};

export default Categories;
