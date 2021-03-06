import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { browseApi } from 'services/api/browseApi';
import { playlistApi } from 'services/api/playlistApi';
import { searchApi } from 'services/api/searchApi';
import { userApi } from 'services/api/userApi';
import authSlice from 'services/reducers/authSlice';
import globalSlice from 'services/reducers/globalSlice';
import trackSlice from 'services/reducers/trackSlice';

export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    globalSlice.name,
    browseApi.reducerPath,
    playlistApi.reducerPath,
    userApi.reducerPath,
    searchApi.reducerPath,
  ],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [globalSlice.name]: globalSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [trackSlice.name]: trackSlice.reducer,

    // Api reducers
    [browseApi.reducerPath]: browseApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  }),
);

export const rootMiddlewares = [
  browseApi.middleware,
  playlistApi.middleware,
  searchApi.middleware,
  userApi.middleware,
];
