import { NavItemProps } from 'components/nav/item';
// import Heart from 'tabler-icons-react/dist/icons/heart';
import Home from 'tabler-icons-react/dist/icons/home';
import PlaylistAdd from 'tabler-icons-react/dist/icons/playlist-add';

export const mainNavigations: NavItemProps[] = [
  {
    to: '/',
    icon: <Home />,
    title: 'Home',
  },
  // {
  //   to: '/liked',
  //   icon: <Heart />,
  //   title: 'Liked Song',
  // },
  {
    to: '/create-playlist',
    icon: <PlaylistAdd />,
    title: 'Create Playlist',
  },
];
