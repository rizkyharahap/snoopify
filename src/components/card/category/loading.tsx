import { Group, Skeleton } from '@mantine/core';

const CategoryLoadingScreen = ({ length }: { length: number }) => {
  return (
    <>
      {Array.from({ length }).map((_value, index) => (
        <Group key={index} align='stretch' direction='column' spacing={0}>
          <Skeleton height={84} radius={100} />

          <Skeleton height={16} mt='xs' radius='sm' />
        </Group>
      ))}
    </>
  );
};

export default CategoryLoadingScreen;
