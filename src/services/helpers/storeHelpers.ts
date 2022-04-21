import { combineReducers } from '@reduxjs/toolkit';
import { userApi } from 'services/api/userApi';
import { browseApi } from 'services/api/browseApi';
import { playlistApi } from 'services/api/playlistApi';
import { searchApi } from 'services/api/searchApi';
import authSlice from 'services/reducers/authSlice';

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,

  // Api reducers
  [browseApi.reducerPath]: browseApi.reducer,
  [playlistApi.reducerPath]: playlistApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const rootMiddlewares = [
  browseApi.middleware,
  playlistApi.middleware,
  searchApi.middleware,
  userApi.middleware,
];
