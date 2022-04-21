import { AppShell, Button } from '@mantine/core';
import Drawer from 'components/drawer';
import Nav from 'components/nav';
import { NavItemProps } from 'components/nav/item';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { clearToken } from 'services/reducers/auth/authSlice';
import Heart from 'tabler-icons-react/dist/icons/heart';
import Home from 'tabler-icons-react/dist/icons/home';
import Logout from 'tabler-icons-react/dist/icons/logout';

const mainNavigations: NavItemProps[] = [
  {
    to: '/',
    icon: <Home />,
    title: 'Home',
  },
  {
    to: '/favorite',
    icon: <Heart />,
    title: 'Favourite Tracks',
  },
];

const PrimaryLayout = () => {
  const dispatch = useAppDispatch();

  return (
    <AppShell
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint='xs'
      asideOffsetBreakpoint='xs'
    >
      <Drawer>
        <Nav links={mainNavigations}>
          <Button
            variant='subtle'
            size='xl'
            leftIcon={<Logout />}
            sx={theme => ({
              position: 'absolute',
              bottom: 24,
              color: theme.white,
              background: 'transparent',
              opacity: 0.7,
              ':hover': {
                opacity: 1,
                background: 'transparent',
              },
            })}
            onClick={() => {
              dispatch(clearToken());
            }}
          >
            Logout
          </Button>
        </Nav>
      </Drawer>

      <Outlet />
    </AppShell>
  );
};

export default PrimaryLayout;
