import { ActionIcon, Box, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { PropsWithChildren, useCallback } from 'react';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { setIsDrawerOpen } from 'services/reducers/globalSlice';
import AlignLeft from 'tabler-icons-react/dist/icons/align-left';

const Header = ({ children }: PropsWithChildren<{}>) => {
  const isSmall = useMediaQuery('(min-width: 768px)');

  const dispatch = useAppDispatch();

  const handleDrawerOpen = useCallback(() => {
    dispatch(setIsDrawerOpen());
  }, [dispatch]);

  return (
    <Box component='header'>
      <Group position='apart'>
        {!isSmall && (
          <ActionIcon
            color='gray'
            size='xl'
            radius='md'
            variant='light'
            onClick={handleDrawerOpen}
          >
            <AlignLeft size={30} />
          </ActionIcon>
        )}

        {children}
      </Group>
    </Box>
  );
};

export default Header;
