import { createApi } from '@reduxjs/toolkit/query/react';
import type { SearchTracksParams, Tracks } from 'services/types/trackTypes';
import { authorizedBaseQuery } from '../helpers/baseQuery';

export const searchApi = createApi({
  reducerPath: 'searchApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['Search'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getSearchTracks: builder.query<Tracks, SearchTracksParams>({
      query: ({ q, limit = 10, offset = 0 }) => ({
        url: '/search',
        params: {
          q,
          limit,
          offset,
          type: 'track',
          include_external: 'audio',
        },
      }),
      transformResponse: (response: { tracks: Tracks }) => response.tracks,
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Search' as const,
                id,
              })),
              'Search',
            ]
          : ['Search'],
    }),
  }),
});

export const { useGetSearchTracksQuery } = searchApi;
export const { getSearchTracks } = searchApi.endpoints;
