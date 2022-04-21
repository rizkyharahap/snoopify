import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  token: '',
  token_type: '',
  expired_at: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, { payload }: PayloadAction<AuthState>) =>
      (state = payload),
    clearToken: () => initialState,
  },
});

export const { addToken, clearToken } = authSlice.actions;

export default authSlice;
