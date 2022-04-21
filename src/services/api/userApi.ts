import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from 'services/types/userTypes';
import { authorizedBaseQuery } from '../helpers/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['User'],

  refetchOnReconnect: true,

  endpoints: builder => ({
    getCurrentUserProfile: builder.query<User, string>({
      query: () => '/me',
      providesTags: ['User'],
    }),
  }),
});

export const { useGetCurrentUserProfileQuery } = userApi;
export const { getCurrentUserProfile } = userApi.endpoints;
