import { Group, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

export interface AlbumCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const AlbumCard = ({ title, description, imageUrl }: AlbumCardProps) => (
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

    <Title>{title}</Title>

    {description && <Subtitle>{description}</Subtitle>}
  </Group>
);

export default AlbumCard;
