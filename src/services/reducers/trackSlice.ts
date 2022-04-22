import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Track, TrackState } from 'services/types/trackTypes';

const initialState: TrackState = {
  selectedTracks: [],
};

const trackSlice = createSlice({
  name: 'track',

  initialState,

  reducers: {
    addSelectedTrack(state, { payload }: PayloadAction<Track>) {
      state.selectedTracks.push(payload);
    },
    removeSelectedTrack(state, { payload }: PayloadAction<string>) {
      state.selectedTracks = state.selectedTracks.filter(
        track => track.id !== payload,
      );
    },
    clearSelectedTrack(state) {
      state.selectedTracks = [];
    },
  },
});

export const { addSelectedTrack, removeSelectedTrack, clearSelectedTrack } =
  trackSlice.actions;

export default trackSlice;
