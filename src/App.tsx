import { LoadingOverlay } from '@mantine/core';
import PrimaryLayout from 'components/layout/primary';
import SecondaryLayout from 'components/layout/secondary';
import HomePage from 'pages/home';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import RequireAuth from 'utils/RequiredAuth';

const NotFoundPage = lazy(() => import('pages/404'));
const LoginPage = lazy(() => import('pages/Login'));
const PlaylistPage = lazy(() => import('pages/playlist'));
const CreatePlaylistPage = lazy(() => import('pages/playlist/create'));

function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <RequireAuth>
          <PrimaryLayout />
        </RequireAuth>
      ),
      children: [
        { path: '*', element: <Navigate replace to='/404' /> },
        {
          path: '/',
          element: <HomePage />,
        },

        {
          path: '/playlist/:id',
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <PlaylistPage />
            </Suspense>
          ),
        },
        {
          path: '/create-playlist',
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <CreatePlaylistPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: 'auth',
      element: (
        <SecondaryLayout
          styles={{
            main: {
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '40px',
            },
          }}
        />
      ),
      children: [
        {
          path: '*',
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: '/auth',
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <LoginPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '404',
      element: (
        <SecondaryLayout
          styles={{
            main: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        />
      ),
      children: [
        {
          path: '/404',
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ];

  const routing = useRoutes(routes);

  return <>{routing}</>;
}

export default App;
