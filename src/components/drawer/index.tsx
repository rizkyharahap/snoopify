import {
  ActionIcon,
  Avatar,
  Drawer as MantineDrawer,
  DrawerProps,
  Group,
  Space,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import AlignLeft from 'tabler-icons-react/dist/icons/align-left';

const Drawer = ({
  children,
  ...props
}: PropsWithChildren<Omit<DrawerProps, 'opened' | 'onClose'>>) => {
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();
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
        <Group
          sx={theme => ({
            backgroundColor: theme.white,
            width: 'fit-content',
            borderRadius: '0 12px 12px 0',
          })}
          mr='xl'
          px='xl'
          py='md'
          spacing='sm'
          direction='row'
          noWrap
        >
          <Avatar
            src='https://placeimg.com/640/640/people'
            alt="it's me"
            radius='xl'
          />

          <Group spacing={0}>
            <Text
              component='p'
              color={theme.black}
              my={0}
              size='sm'
              weight={600}
              lineClamp={1}
            >
              My Name is Mantap Jiwa Oke bisa yakkk
            </Text>
            <Text
              component='p'
              color={theme.colors.grape[6]}
              my={0}
              size='xs'
              lineClamp={1}
            >
              0 Followers
            </Text>
          </Group>
        </Group>

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
