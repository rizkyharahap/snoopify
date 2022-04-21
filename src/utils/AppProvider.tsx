import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupStore } from 'store';

const theme: MantineThemeOverride = {
  colors: {
    brand: [
      '#fde0dc',
      '#ffd6d0',
      '#ffc4bb',
      '#ffb1a7',
      '#ff9e93',
      '#ff8a80',
      '#ff766d',
      '#fd5f5b',
      '#fa4549',
      '#f51e38',
    ],
  },
  primaryColor: 'brand',
  fontFamily: "'Source Sans Pro', sans-serif",
  headings: {
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  black: '#0F1E36',
};

const store = setupStore();

const AppProvider = ({ children }: PropsWithChildren<{}>) => (
  <MantineProvider theme={theme}>
    <NotificationsProvider>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </NotificationsProvider>
  </MantineProvider>
);

export default AppProvider;
