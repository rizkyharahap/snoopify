import { Anchor, Group, Text } from '@mantine/core';
import type { FC, ReactElement } from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export interface NavItemProps extends Omit<LinkProps, 'className' | 'style'> {
  icon?: ReactElement;
}

const NavItem: FC<NavItemProps> = ({ icon, to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Anchor
      {...props}
      component={Link}
      to='/ssdsda'
      underline={false}
      sx={theme => ({
        color: theme.white,
        opacity: match ? 1 : 0.6,
        ':hover': {
          opacity: 1,
        },
      })}
    >
      <Group px='xl' py='sm'>
        {icon} <Text size='xl'>{children}</Text>
      </Group>
    </Anchor>
  );
};

export default NavItem;
