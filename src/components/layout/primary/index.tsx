import { AppShell, Box, Container, Divider, Space, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Drawer from 'components/drawer';
import Header from 'components/header';
import NavButton from 'components/nav/button';
import SideBar from 'components/side-bar';
import { Outlet } from 'react-router-dom';
import { mainNavigations } from 'services/configs/navigations';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import SideNavigation from '../../side-navigation';
import Avatar from './avatar';
import { clearToken } from 'services/reducers/authSlice';
import Logout from 'tabler-icons-react/dist/icons/logout';

const PrimaryLayout = () => {
  const dispatch = useAppDispatch();

  const isSmall = useMediaQuery('(min-width: 768px)');

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='xs'
      padding={0}
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
      })}
      {...(isSmall && {
        navbar: (
          <SideBar
            footer={
              <NavButton
                leftIcon={<Logout />}
                onClick={() => {
                  dispatch(clearToken());
                }}
              >
                Logout
              </NavButton>
            }
          >
            <Space h={40} />
            <SideNavigation navigations={mainNavigations} />
          </SideBar>
        ),
      })}
    >
      {!isSmall && (
        <Drawer
          title={
            <Title mx='xl' my='lg'>
              Snoopify
            </Title>
          }
        >
          <SideNavigation navigations={mainNavigations} />

          <Divider my='xs' />
          <NavButton
            leftIcon={<Logout />}
            onClick={() => {
              dispatch(clearToken());
            }}
          >
            Logout
          </NavButton>
        </Drawer>
      )}

      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          '@media (min-width: 576px)': {
            padding: 16,
          },
        }}
        py='md'
      >
        <Container px='xs' size='lg'>
          <Header>
            <div></div>

            <Avatar />
          </Header>

          <Space h='xl' />
          <Outlet />
        </Container>
      </Box>
    </AppShell>
  );
};

export default PrimaryLayout;
