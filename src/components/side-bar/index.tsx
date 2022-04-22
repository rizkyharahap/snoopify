import { Navbar } from '@mantine/core';
import { PropsWithChildren } from 'react';

const SideBar = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Navbar
      p={0}
      hiddenBreakpoint='sm'
      width={{ xs: 220, lg: 250 }}
      sx={theme => ({
        backgroundColor: theme.colors.brand[9],
        color: theme.white,
      })}
    >
      {children}
    </Navbar>
  );
};

export default SideBar;
