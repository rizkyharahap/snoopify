import { Avatar, Group, Text, useMantineTheme } from '@mantine/core';

export type UserCardProps = {
  name?: string;
  follower?: number;
  imageUrl?: string;
  externalUrl?: string;
};

const UserCard = ({
  name,
  follower = 0,
  imageUrl,
  externalUrl = 'https://open.spotify.com/',
}: UserCardProps) => {
  const theme = useMantineTheme();

  return (
    <a href={externalUrl} target='_blank' rel='noreferrer'>
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
        <Avatar src={imageUrl} alt="it's me" radius='xl' />

        <div>
          <Text
            component='p'
            color={theme.black}
            my={0}
            size='sm'
            weight={600}
            lineClamp={1}
          >
            {name}
          </Text>

          <Text
            component='p'
            color={theme.colors.grape[6]}
            my={0}
            size='xs'
            lineClamp={1}
          >
            {follower} Followers
          </Text>
        </div>
      </Group>
    </a>
  );
};

export default UserCard;
