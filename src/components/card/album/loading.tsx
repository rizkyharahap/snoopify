import { Grid, Skeleton } from '@mantine/core';

const AlbumLoadingScreen = ({ length }: { length: number }) => {
  return (
    <>
      {Array.from({ length }).map((_value, index) => (
        <Grid key={index} align='center' gutter='sm'>
          <Grid.Col span={2}>
            <Skeleton sx={{ minHeight: 50 }} radius='sm' />
          </Grid.Col>

          <Grid.Col span={10}>
            <Skeleton height={16} radius='sm' />
            <Skeleton height={24} mt='xs' radius='sm' />
          </Grid.Col>
        </Grid>
      ))}
    </>
  );
};

export default AlbumLoadingScreen;
