import {
  Drawer as MantineDrawer,
  DrawerProps,
  useMantineTheme,
} from '@mantine/core';
import { PropsWithChildren, useCallback } from 'react';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { useAppSelector } from 'services/hooks/useAppSelector';
import { setIsDrawerOpen } from 'services/reducers/globalSlice';

const Drawer = ({
  children,
  ...props
}: PropsWithChildren<Omit<DrawerProps, 'opened' | 'onClose'>>) => {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();

  const { isDrawerOpen } = useAppSelector(state => state.global);

  const handleDrawerOpen = useCallback(() => {
    dispatch(setIsDrawerOpen());
  }, [dispatch]);

  return (
    <>
      <MantineDrawer
        size='md'
        styles={{
          drawer: {
            backgroundColor: theme.colors.brand[9],
            color: theme.white,
          },
          closeButton: {
            color: theme.white,
            svg: {
              width: 24,
              height: 24,
            },
            margin: 16,
            ':hover': {
              backgroundColor: theme.fn.rgba(theme.colors.brand[6], 0.7),
            },
          },
        }}
        {...props}
        opened={isDrawerOpen}
        onClose={handleDrawerOpen}
      >
        {children}
      </MantineDrawer>
    </>
  );
};

export default Drawer;
