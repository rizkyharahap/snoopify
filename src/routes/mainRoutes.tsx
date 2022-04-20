import type { NavItemProps } from 'components/nav/item';
import Heart from 'tabler-icons-react/dist/icons/heart';
import Home from 'tabler-icons-react/dist/icons/home';

interface MainRoutesProps {
  private: NavItemProps[];
  public: NavItemProps[];
}

const mainRoutes: MainRoutesProps = {
  private: [
    {
      to: '/',
      exact: true,
      icon: <Home />,
      title: 'Home',
    },
    {
      to: '/favorite',
      exact: true,
      icon: <Heart />,
      title: 'Favourite Tracks',
    },
  ],
  public: [
    {
      to: '/auth',
    },
  ],
};

export { mainRoutes };
