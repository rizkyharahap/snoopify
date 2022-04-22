import { Divider, Space, Title } from '@mantine/core';
import Categories from './components/categories';
import FeaturedPlaylist from './components/featured-playlist';
import NewRelease from './components/new-release';

const HomePage = () => {
  return (
    <>
      <Title order={2} mb='md'>
        New Release
      </Title>
      <NewRelease />

      <Divider my='xl' />

      <Title order={2} mb='lg'>
        Categories
      </Title>
      <Categories />

      <Divider my='xl' />

      <Title order={2} mb='lg'>
        Featured Playlist
      </Title>
      <FeaturedPlaylist />

      <Space h='xl' />
    </>
  );
};

export default HomePage;
