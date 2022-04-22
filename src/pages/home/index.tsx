import { Container, Space } from '@mantine/core';
import Heading from 'components/typography/heading';
import Categories from './components/categories';
import FeaturedPlaylist from './components/featured-playlist';
import NewRelease from './components/new-release';

const HomePage = () => {
  return (
    <Container px='xs' size='lg'>
      <Heading>New Release</Heading>
      <NewRelease />

      <Space h='sm' />

      <Heading>Categories</Heading>
      <Categories />

      <Space h='sm' />

      <Heading>Featured Playlist</Heading>
      <FeaturedPlaylist />

      <Space h='xl' />
    </Container>
  );
};

export default HomePage;
