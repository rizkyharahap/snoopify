import { Group, Skeleton } from '@mantine/core';

const PlaylistLoadingScreen = ({ length }: { length: number }) => {
  return (
    <>
      {Array.from({ length }).map((_value, index) => (
        <Group key={index} align='stretch' direction='column' spacing={0}>
          <Skeleton height={100} radius='sm' />

          <Skeleton height={16} mt='sm' radius='sm' />
          <Skeleton height={24} mt='xs' radius='sm' />
        </Group>
      ))}
    </>
  );
};
export default PlaylistLoadingScreen;
