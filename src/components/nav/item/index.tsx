import { Anchor, Group, List, Text } from '@mantine/core';
import type { FC, ReactElement } from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export interface NavItemProps extends Omit<LinkProps, 'className' | 'style'> {
  icon?: ReactElement;
  disabled?: boolean;
}

const NavItem: FC<NavItemProps> = ({ icon, to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <List.Item>
      <Anchor underline={false} {...props} component={Link} to={to}>
        <Group
          px='xl'
          py='sm'
          sx={theme => ({
            fontWeight: 600,
            color: theme.white,
            opacity: match ? 1 : 0.8,
            ':hover': {
              opacity: 1,
            },
            transition: 'opacity 0.1s',
          })}
        >
          {icon} <Text size='lg'>{children}</Text>
        </Group>
      </Anchor>
    </List.Item>
  );
};

export default NavItem;
