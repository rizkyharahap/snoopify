import { Divider, Space, Title } from '@mantine/core';
import PlaylistForm from './form';
import Search from './search';
import SelectedTracksList from './selected-track-list';

const CreatePlaylistPage = () => {
  return (
    <>
      <Title>Create Playlist</Title>

      <Space h='md' />

      <PlaylistForm />

      <Divider my='xl' />

      <SelectedTracksList />

      <Space h='sm' />

      <Search />

      <Space h='xl' />
    </>
  );
};

export default CreatePlaylistPage;
