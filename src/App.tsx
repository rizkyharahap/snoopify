import { LoadingOverlay } from '@mantine/core';
import PrimaryLayout from 'components/layout/primary';
import SecondaryLayout from 'components/layout/secondary';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import RequireAuth from 'utils/RequiredAuth';

const NotFoundPage = lazy(() => import('pages/404'));
const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/Login'));

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
          element: (
            <Suspense fallback={<LoadingOverlay visible />}>
              <HomePage />
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
