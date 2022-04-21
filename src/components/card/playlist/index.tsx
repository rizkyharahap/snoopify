import { Group, Image, Paper, Space } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

export interface PlaylistCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const PlaylistCard = ({ title, description, imageUrl }: PlaylistCardProps) => (
  <Group align='stretch' direction='column' spacing={0}>
    <Paper shadow='xl' radius='sm'>
      <Image
        radius='sm'
        width='100%'
        height='100%'
        style={{ minHeight: 80 }}
        src={imageUrl}
        alt={title}
        withPlaceholder
      />
    </Paper>

    <Space h='sm' />

    <Title>{title}</Title>

    {description && <Subtitle>{description}</Subtitle>}
  </Group>
);

export default PlaylistCard;
