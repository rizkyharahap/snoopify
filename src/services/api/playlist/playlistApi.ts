import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  AddPlaylist,
  FeaturedPlaylists,
  Playlists,
  Playlist,
} from 'services/types/playlistTypes';
import { authorizedBaseQuery } from '../../helpers/baseQuery';

export const playlistApi = createApi({
  reducerPath: 'playlistApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['Playlists'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getFeaturedPlaylists: builder.query<Playlists, number>({
      query: (limit = 10) => ({
        url: '/browse/featured-playlists',
        params: {
          limit,
        },
      }),
      transformResponse: (response: FeaturedPlaylists) => response.playlists,
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Playlists' as const,
                id,
              })),
              'Playlists',
            ]
          : ['Playlists'],
    }),

    getCurrentUserPlaylist: builder.query<Playlists, number>({
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
              'Playlists',
            ]
          : ['Playlists'],
    }),

    addPlaylist: builder.mutation<
      Playlist,
      { user_id: string; data: AddPlaylist }
    >({
      query: ({ user_id, data }) => ({
        url: `/users/${user_id}/playlists`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: result => [{ type: 'Playlists', id: result?.id }],
    }),
  }),
});

export const { useGetFeaturedPlaylistsQuery, useGetCurrentUserPlaylistQuery } =
  playlistApi;
export const { getFeaturedPlaylists, getCurrentUserPlaylist } =
  playlistApi.endpoints;
