import {
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import Heading from 'components/typography/heading';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

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

const TrackItem = () => {
  const theme = useMantineTheme();
  return (
    <Grid align='center' gutter='sm'>
      <Grid.Col span={2}>
        <Paper shadow='xl' radius='sm'>
          <Image
            radius='sm'
            width='100%'
            height='100%'
            style={{ minHeight: 44 }}
            src='https://placeimg.com/640/640/people'
            alt='Image'
            withPlaceholder
          />
        </Paper>
      </Grid.Col>
      <Grid.Col span={8}>
        <Title>Minim amet anim irure minim occaecat ex esse dolor.</Title>
        <Subtitle lineClamp={1}>
          Elit ad ut consectetur ad. Adipisicing irure quis et Lorem elit aliqua
          duis Lorem. Ea in minim exercitation fugiat excepteur enim nostrud
          sint incididunt reprehenderit incididunt pariatur velit eu.
        </Subtitle>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size='md' lineClamp={1} color={theme.colors.gray[6]}>
          3:13
        </Text>
      </Grid.Col>
    </Grid>
  );
};

const ArtistItem = () => {
  return (
    <Group align='stretch' direction='column' spacing={0}>
      <Paper shadow='xl' radius={999}>
        <Image
          radius={999}
          width='100%'
          height='100%'
          src='https://placeimg.com/640/640/people'
          alt='Image'
          withPlaceholder
        />
      </Paper>
      <Space h='sm' />
      <Title>Minim amet anim irure minim occaecat ex esse dolor.</Title>
    </Group>
  );
};

const HomePage = () => {
  const theme = useMantineTheme();

  return (
    <Container px='xs' size='xl'>
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

      <Space h='sm' />

      <Heading>Top Tracks</Heading>

      <Stack justify='flex-start' spacing='lg'>
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </Stack>

      <Space h='sm' />

      <Heading>Sugested Artist</Heading>

      <SimpleGrid
        cols={4}
        spacing='xl'
        breakpoints={[
          { maxWidth: 980, cols: 3 },
          { maxWidth: 755, cols: 2 },
          { maxWidth: theme.breakpoints.xs, cols: 3 },
        ]}
      >
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
