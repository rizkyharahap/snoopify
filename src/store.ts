import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { rootReducer } from 'services/reducers';

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
    preloadedState,

    // Activate devtools for development mode
    devTools: process.env.NODE_ENV === 'development',
  });

// Utility function to setup redux listeners for enable refetchOnFocus and refetchOnReconnect
setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
