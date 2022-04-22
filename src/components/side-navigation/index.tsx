import { Divider } from '@mantine/core';
import Nav from 'components/nav';
import NavItem, { NavItemProps } from 'components/nav/item';
import { useGetCurrentUserPlaylistQuery } from 'services/api/playlistApi';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';

const SideNavigation = ({ navigations }: { navigations: NavItemProps[] }) => {
  const { data, isSuccess, isError, error } =
    useGetCurrentUserPlaylistQuery(10);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
  });

  return (
    <Nav links={navigations}>
      <Divider mx='md' my='sm' />

      {data?.items.map(({ id, name }) => {
        return (
          <NavItem key={id} to={`/playlist/${id}`}>
            {name}
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default SideNavigation;
