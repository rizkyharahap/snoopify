import { Anchor, Group, List, Text } from '@mantine/core';
import type { FC, ReactElement } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface NavItemProps
  extends Omit<NavLinkProps, 'className' | 'style'> {
  icon?: ReactElement;
}

const NavItem: FC<NavItemProps> = ({ icon, children, ...props }) => (
  <List.Item>
    <Anchor
      {...props}
      component={NavLink}
      to='/ssdsda'
      exact
      underline={false}
      activeStyle={{ opacity: 1 }}
      sx={theme => ({
        color: theme.white,
        opacity: 0.5,
        ':hover': {
          opacity: 1,
        },
      })}
    >
      <Group px='xl' py='sm'>
        {icon} <Text size='xl'>{children}</Text>
      </Group>
    </Anchor>
  </List.Item>
);

export default NavItem;
