import {
  ActionIcon,
  Drawer as MantineDrawer,
  DrawerProps,
  Space,
  useMantineTheme,
} from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import UserCard from 'components/card/user';
import { PropsWithChildren, useState } from 'react';
import { useGetCurrentUserProfileQuery } from 'services/api/userApi';
import { useAppSelector } from 'services/hooks/useAppSelector';
import AlignLeft from 'tabler-icons-react/dist/icons/align-left';

const Drawer = ({
  children,
  ...props
}: PropsWithChildren<Omit<DrawerProps, 'opened' | 'onClose'>>) => {
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);

  const auth = useAppSelector(state => state.auth);

  const { data: user } = useGetCurrentUserProfileQuery(auth.token || skipToken);

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
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <UserCard
          name={user?.display_name}
          follower={user?.followers?.total}
          imageUrl={user?.images?.[0]?.url}
          externalUrl={user?.external_urls.spotify}
        />

        <Space h={40} />

        {children}
      </MantineDrawer>

      <ActionIcon radius='xl' size='lg' onClick={() => setOpened(true)}>
        <AlignLeft size={24} />
      </ActionIcon>
    </>
  );
};

export default Drawer;
