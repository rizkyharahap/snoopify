import { ActionIcon, Box, Container, Group } from '@mantine/core';
import { PropsWithChildren, useCallback } from 'react';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { setIsDrawerOpen } from 'services/reducers/globalSlice';
import AlignLeft from 'tabler-icons-react/dist/icons/align-left';
import SearchBar from './search-bar';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

const Header = ({ children }: PropsWithChildren<{}>) => {
  const navigate = useNavigate();

  const isSmall = useMediaQuery('(min-width: 768px)');

  const dispatch = useAppDispatch();

  const handleDrawerOpen = useCallback(() => {
    dispatch(setIsDrawerOpen());
  }, [dispatch]);

  return (
    <Box component='header'>
      <Container px='xs' size='lg'>
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

          <SearchBar
            onSubmit={value => {
              // Navigate to search if there is a search query
              if (value)
                navigate({
                  pathname: '/search',
                  search: `?q=${value}`,
                });
            }}
            placeholder='Search tracks here'
          />

          {children}
        </Group>
      </Container>
    </Box>
  );
};

export default Header;
