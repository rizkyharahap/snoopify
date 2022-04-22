import { List } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import NavItem, { NavItemProps } from './item';

interface NavProps {
  links: NavItemProps[];
}

const Nav = ({ links, children }: PropsWithChildren<NavProps>) => {
  return (
    <List listStyleType='none'>
      {links.map((link, index) => (
        <NavItem key={index} {...link}>
          {link.title}
        </NavItem>
      ))}

      {children}
    </List>
  );
};

export default Nav;
