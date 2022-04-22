import { Button } from '@mantine/core';
import Nav from 'components/nav';
import { NavItemProps } from 'components/nav/item';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { clearToken } from 'services/reducers/authSlice';
import Logout from 'tabler-icons-react/dist/icons/logout';

const SideNavigation = ({ navigations }: { navigations: NavItemProps[] }) => {
  const dispatch = useAppDispatch();

  return (
    <Nav links={navigations}>
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
  );
};

export default SideNavigation;
