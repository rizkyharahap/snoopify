import { createApi } from '@reduxjs/toolkit/query/react';
import type { Albums } from 'services/types/albumTypes';
import type { Categories } from 'services/types/categoryTypes';
import { authorizedBaseQuery } from '../helpers/baseQuery';

export const browseApi = createApi({
  reducerPath: 'browseApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['Albums', 'Categories'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getNewReleases: builder.query<Albums, number | undefined>({
      query: (limit = 10) => ({
        url: '/browse/new-releases',
        params: {
          limit,
        },
      }),
      transformResponse: (response: { albums: Albums }) => response.albums,
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Albums' as const,
                id,
              })),
              'Albums',
            ]
          : ['Albums'],
    }),

    getCategories: builder.query<Categories, number | undefined>({
      query: limit => ({
        url: '/browse/categories',
        params: {
          limit,
        },
      }),
      transformResponse: (response: { categories: Categories }) =>
        response.categories,
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Categories' as const,
                id,
              })),
              'Categories',
            ]
          : ['Categories'],
    }),
  }),
});

export const { useGetNewReleasesQuery, useGetCategoriesQuery } = browseApi;
export const { getNewReleases, getCategories } = browseApi.endpoints;
