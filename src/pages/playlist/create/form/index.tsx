import { Button, Group, Paper, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useAddPlaylistItemMutation,
  useAddPlaylistMutation,
} from 'services/api/playlistApi';
import { useGetCurrentUserProfileQuery } from 'services/api/userApi';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { useAppSelector } from 'services/hooks/useAppSelector';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';
import { clearSelectedTrack } from 'services/reducers/trackSlice';
import Check from 'tabler-icons-react/dist/icons/check';
import X from 'tabler-icons-react/dist/icons/x';

const PlaylistForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedTracks } = useAppSelector(state => state.track);
  const { auth } = useAppSelector(state => state);

  const { data: user } = useGetCurrentUserProfileQuery(auth.token || skipToken);
  const [addPlaylist, { data, isError, isLoading, isSuccess, error }] =
    useAddPlaylistMutation();
  const [
    addPlaylistItem,
    {
      isError: isPlaylistItemError,
      isLoading: isPlaylistItemLoading,
      isSuccess: isPlaylistItemSuccess,
      error: playlistItemError,
    },
  ] = useAddPlaylistItemMutation();

  const onSuccessAddPlaylist = useCallback(() => {
    if (data?.id) {
      addPlaylistItem({
        playlist_id: data.id,
        uris: selectedTracks.map(track => track.uri),
      });
    }
  }, [addPlaylistItem, data, selectedTracks]);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
    onSuccess: onSuccessAddPlaylist,
  });

  const onSuccessAddPlaylistItem = useCallback(() => {
    showNotification({
      id: `success-create-playlist`,
      title: 'Playlist created',
      message: 'You can find your playlist at left side of the page',
      color: 'green',
      icon: <Check />,
      radius: 'lg',
    });
    dispatch(clearSelectedTrack());

    if (data) navigate(`/playlist/${data.id}`);
  }, [data, dispatch, navigate]);

  useResponseHandlerQuery({
    error: playlistItemError,
    isError: isPlaylistItemError,
    isSuccess: isPlaylistItemSuccess,
    onSuccess: onSuccessAddPlaylistItem,
  });

  const { onSubmit, getInputProps } = useForm<{
    name: string;
    description: string;
  }>({
    initialValues: {
      name: '',
      description: '',
    },

    validate: {
      name: value =>
        value.length === 0
          ? 'Required name'
          : value.length < 8
          ? 'Must be less than 8 characters'
          : null,
      description: value =>
        value.length === 0 ? 'Required description' : null,
    },
  });

  const handleSubmit = useCallback(
    (values: { name: string; description: string }) => {
      let error = {
        isError: false,
        title: '',
        message: '',
      };

      if (selectedTracks.length === 0)
        error = {
          isError: true,
          title: 'No selected tracks',
          message: 'Please select at least one track',
        };

      if (!user?.id)
        error = {
          isError: true,
          title: 'No user',
          message: 'Please login to create playlist',
        };

      if (error.isError) {
        showNotification({
          id: `error-create-playlist`,
          title: error.title,
          message: error.message,
          color: 'red',
          icon: <X />,
          radius: 'lg',
        });
        return;
      }

      addPlaylist({
        user_id: user!.id,
        data: values,
      });
    },
    [addPlaylist, selectedTracks.length, user],
  );

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Group
        direction='column'
        grow
        sx={{ maxWidth: 600 }}
        spacing='xl'
        pb='md'
      >
        <Paper shadow='lg'>
          <TextInput
            id='tf-name'
            label='Name'
            required
            size='md'
            variant='filled'
            placeholder='Playlist Name'
            {...getInputProps('name')}
          />
        </Paper>

        <Paper shadow='lg'>
          <Textarea
            id='ta-description'
            label='Descriptions'
            required
            size='md'
            variant='filled'
            placeholder='Tell the description of your playlist'
            {...getInputProps('description')}
          />
        </Paper>

        <Button
          radius='md'
          size='md'
          type='submit'
          sx={{ alignSelf: 'flex-end' }}
          color='brand'
          loading={isLoading || isPlaylistItemLoading}
        >
          Save
        </Button>
      </Group>
    </form>
  );
};

export default PlaylistForm;
