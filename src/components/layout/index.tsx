import { AppShell, AppShellProps } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<AppShellProps>) => {
  return (
    <AppShell
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint='xs'
      asideOffsetBreakpoint='xs'
      fixed
    >
      {children}
    </AppShell>
  );
};

export default Layout;
