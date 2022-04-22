import { Avatar, Group, GroupProps, useMantineTheme } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

export interface UserCardProps extends GroupProps {
  name?: string;
  follower?: number;
  imageUrl?: string;
  externalUrl?: string;
}

const UserCard = ({
  name,
  follower = 0,
  imageUrl,
  externalUrl = 'https://open.spotify.com/',
  ...props
}: UserCardProps) => {
  const theme = useMantineTheme();

  return (
    <a href={externalUrl} target='_blank' rel='noreferrer'>
      <Group
        sx={theme => ({
          backgroundColor: theme.white,
          borderRadius: '0 12px 12px 0',
        })}
        mr='xl'
        spacing='sm'
        direction='row'
        noWrap
        {...props}
      >
        <Avatar src={imageUrl} alt={name} radius='xl' />

        <div>
          <Title>{name}</Title>

          <Subtitle color={theme.colors.grape[6]}>
            {follower} Followers
          </Subtitle>
        </div>
      </Group>
    </a>
  );
};

export default UserCard;
