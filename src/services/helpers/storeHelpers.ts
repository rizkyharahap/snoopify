import { combineReducers } from '@reduxjs/toolkit';
import { userApi } from 'services/api/user/userApi';
import authSlice from 'services/reducers/authSlice';

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const rootMiddlewares = [userApi.middleware];
