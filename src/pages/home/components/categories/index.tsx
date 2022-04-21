import { SimpleGrid, useMantineTheme } from '@mantine/core';
import CategoryCard from 'components/card/category';
import CategoryLoadingScreen from 'components/card/category/loading';
import { useGetCategoriesQuery } from 'services/api/browseApi';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const Categories = () => {
  const theme = useMantineTheme();

  const limit = 6;

  const { data, isError, error, isFetching, isLoading, isSuccess } =
    useGetCategoriesQuery(limit);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <SimpleGrid
      cols={4}
      spacing='md'
      breakpoints={[
        { maxWidth: 980, cols: 3 },
        { maxWidth: 755, cols: 2 },
        { maxWidth: theme.breakpoints.xs, cols: 3 },
      ]}
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
