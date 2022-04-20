import { List } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import NavItem, { NavItemProps } from './item';

interface NavProps {
  links: NavItemProps[];
}

const Nav = ({ links, children }: PropsWithChildren<NavProps>) => {
  return (
    <nav>
      <List listStyleType='none'>
        {links.map((link, index) => (
          <List.Item key={index}>
            <NavItem {...link}>{link.title}</NavItem>
          </List.Item>
        ))}

        {children && <List.Item>{children}</List.Item>}
      </List>
    </nav>
  );
};

export default Nav;
