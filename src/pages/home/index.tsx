import { Container, Space } from '@mantine/core';
import Heading from 'components/typography/heading';
import Categories from './components/categories';
import FeaturedPlaylist from './components/featured-playlist';
import NewRelease from './components/new-release';

const HomePage = () => {
  return (
    <Container px='xs' size='xl'>
      <Heading>Featured Playlist</Heading>

      <FeaturedPlaylist />

      <Space h='sm' />

      <Heading>Categories</Heading>
      <Categories />

      <Heading>New Release</Heading>
      <NewRelease />

      <Space h='sm' />
    </Container>
  );
};

export default HomePage;
