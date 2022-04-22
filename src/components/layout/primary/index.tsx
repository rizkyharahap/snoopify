import { AppShell, GroupProps, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import UserCard from 'components/card/user';
import Drawer from 'components/drawer';
import Header from 'components/header';
import { NavItemProps } from 'components/nav/item';
import SideBar from 'components/side-bar';
import { Outlet } from 'react-router-dom';
import { useGetCurrentUserProfileQuery } from 'services/api/userApi';
import { useAppSelector } from 'services/hooks/useAppSelector';
import Search from 'tabler-icons-react/dist/icons/search';
import Heart from 'tabler-icons-react/dist/icons/heart';
import Home from 'tabler-icons-react/dist/icons/home';
import SideNavigation from '../../side-navigation';

const mainNavigations: NavItemProps[] = [
  {
    to: '/',
    icon: <Home />,
    title: 'Home',
  },
  {
    to: '/search',
    icon: <Search />,
    title: 'Search',
  },
  {
    to: '/liked',
    icon: <Heart />,
    title: 'Liked Song',
  },
];

const Useritem = (props: GroupProps) => {
  const auth = useAppSelector(state => state.auth);

  const { data: user } = useGetCurrentUserProfileQuery(auth.token || skipToken);

  return (
    <UserCard
      name={user?.display_name}
      follower={user?.followers?.total}
      imageUrl={user?.images?.[0]?.url}
      externalUrl={user?.external_urls.spotify}
      {...props}
    />
  );
};

const PrimaryLayout = () => {
  const isSmall = useMediaQuery('(min-width: 768px)');

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='xs'
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...(isSmall && {
        navbar: (
          <SideBar>
            <Space h={40} />
            <SideNavigation navigations={mainNavigations} />
          </SideBar>
        ),
      })}
    >
      {!isSmall && (
        <Drawer>
          <Useritem style={{ width: '80%' }} px='xl' py='md' />
          <Space h={40} />
          <SideNavigation navigations={mainNavigations} />
        </Drawer>
      )}

      <Header>{isSmall && <Useritem />}</Header>
      <Space h='xl' />

      <Outlet />
    </AppShell>
  );
};

export default PrimaryLayout;
