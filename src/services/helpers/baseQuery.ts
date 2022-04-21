import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { SPOTIFY_API_URL } from 'services/configs/config';
import { RootState } from 'store';

export const authorizedBaseQuery = fetchBaseQuery({
  baseUrl: `${SPOTIFY_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});
