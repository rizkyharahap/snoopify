import {
  AppShell,
  AppShellProps,
  Container,
  GroupedTransition,
  Stack,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const SecondaryLayout = ({
  styles,
  ...props
}: Omit<AppShellProps, 'children'>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AppShell
      styles={theme => ({
        body: {
          background: theme.colors.brand[9],
          minHeight: '100vh',
          color: theme.white,
        },
        ...styles,
      })}
      padding='xl'
      {...props}
    >
      <GroupedTransition
        mounted={isMounted}
        transitions={{
          slide: { duration: 300, transition: 'slide-up' },
          fade: {
            duration: 600,
            transition: 'fade',
            timingFunction: 'ease',
          },
        }}
      >
        {({ slide, fade }) => (
          <Container size='xs' style={slide}>
            <Stack spacing='xl' style={fade}>
              <Outlet />
            </Stack>
          </Container>
        )}
      </GroupedTransition>
    </AppShell>
  );
};

export default SecondaryLayout;
