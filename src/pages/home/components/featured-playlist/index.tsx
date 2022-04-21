import { Group, Image, Paper, SimpleGrid, Space } from '@mantine/core';
import Heading from 'components/typography/heading';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';
import { useGetFeaturedPlaylistsQuery } from 'services/api/playlistApi';

const PlaylistCard = () => (
  <Group align='stretch' direction='column' spacing={0}>
    <Paper shadow='xl' radius='sm'>
      <Image
        radius='sm'
        width='100%'
        height='100%'
        style={{ minHeight: 100 }}
        src='https://placeimg.com/640/640/people'
        alt='Image'
        withPlaceholder
      />
    </Paper>

    <Space h='sm' />

    <Title>Minim amet anim irure minim occaecat ex esse dolor.</Title>

    <Subtitle>
      Elit ad ut consectetur ad. Adipisicing irure quis et Lorem elit aliqua
      duis Lorem. Ea in minim exercitation fugiat excepteur enim nostrud sint
      incididunt reprehenderit incididunt pariatur velit eu.
    </Subtitle>
  </Group>
);

const FeaturedPlaylist = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetFeaturedPlaylistsQuery(undefined);

  return (
    <div>
      <Heading>Featured Playlist</Heading>

      <SimpleGrid
        cols={4}
        spacing='xl'
        breakpoints={[
          { maxWidth: 980, cols: 3 },
          { maxWidth: 755, cols: 2 },
          { maxWidth: 600, cols: 3 },
        ]}
      >
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </SimpleGrid>
    </div>
  );
};

export default FeaturedPlaylist;
