import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { GlobalState } from 'services/types/globalTypes';

const initialState: GlobalState = {
  isDrawerOpen: false,
};

const globalSlice = createSlice({
  name: 'global',

  initialState,

  reducers: {
    setIsDrawerOpen(state, { payload }: PayloadAction<boolean | undefined>) {
      state.isDrawerOpen =
        payload === undefined ? !state.isDrawerOpen : payload;
    },
  },
});

export const { setIsDrawerOpen } = globalSlice.actions;

export default globalSlice;
