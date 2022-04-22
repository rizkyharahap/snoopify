import { Navbar, ScrollArea } from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

const SideBar = ({
  header,
  footer,
  children,
}: PropsWithChildren<{ header?: ReactNode; footer?: ReactNode }>) => {
  return (
    <Navbar
      p={0}
      hiddenBreakpoint='sm'
      width={{ xs: 220, lg: 250 }}
      height='100vh'
      sx={theme => ({
        backgroundColor: theme.colors.brand[9],
        color: theme.white,
      })}
    >
      <Navbar.Section>{header}</Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
        {children}
      </Navbar.Section>
      <Navbar.Section>{footer}</Navbar.Section>
    </Navbar>
  );
};

export default SideBar;
