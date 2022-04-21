import { createApi } from '@reduxjs/toolkit/query/react';
import type { Artists } from 'services/types/artistTypes';
import type { Categories } from 'services/types/categoryTypes';
import { authorizedBaseQuery } from '../helpers/baseQuery';

export const browseApi = createApi({
  reducerPath: 'browseApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['Artists', 'Categories'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getNewReleases: builder.query<Artists, number>({
      query: (limit = 10) => ({
        url: '/browse/new-releases',
        params: {
          limit,
        },
      }),
      providesTags: result =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Artists' as const,
                id,
              })),
              'Artists',
            ]
          : ['Artists'],
    }),

    getCategories: builder.query<Categories, number>({
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
