import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  AddPlaylist,
  AddPlaylistItem,
  Playlist,
  Playlists,
} from 'services/types/playlistTypes';
import { authorizedBaseQuery } from '../helpers/baseQuery';

export const playlistApi = createApi({
  reducerPath: 'playlistApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['Playlists'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getCurrentUserPlaylist: builder.query<Playlists, number | undefined>({
      query: (limit = 10) => ({
        url: '/me/playlists',
        params: {
          limit,
        },
      }),
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Playlists' as const,
                id,
              })),
              { type: 'Playlists', id: 'LIST' },
            ]
          : ['Playlists'],
    }),

    getPlaylistById: builder.query<Playlist, string>({
      query: id => ({
        url: `/playlists/${id}`,
      }),
      providesTags: (_result, _error, id) => [{ type: 'Playlists', id }],
    }),

    addPlaylist: builder.mutation<
      Playlist,
      { user_id: string; data: AddPlaylist }
    >({
      query: ({
        user_id,
        data: { name, description, public: isPublic = false },
      }) => ({
        url: `/users/${user_id}/playlists`,
        method: 'POST',
        body: {
          name,
          description,
          public: isPublic,
        },
      }),
      invalidatesTags: [{ type: 'Playlists', id: 'LIST' }],
    }),

    addPlaylistItem: builder.mutation<Playlist, AddPlaylistItem>({
      query: ({ playlist_id, uris }) => ({
        url: `/playlists/${playlist_id}/tracks`,
        method: 'POST',
        body: {
          uris,
        },
      }),
    }),
  }),
});

export const {
  useGetCurrentUserPlaylistQuery,
  useGetPlaylistByIdQuery,
  useAddPlaylistMutation,
  useAddPlaylistItemMutation,
} = playlistApi;
export const {
  getCurrentUserPlaylist,
  getPlaylistById,
  addPlaylist,
  addPlaylistItem,
} = playlistApi.endpoints;
