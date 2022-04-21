import { Group, Image, Paper } from '@mantine/core';
import Title from 'components/typography/title';

export interface AlbumCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

const AlbumCard = ({ name, imageUrl }: AlbumCardProps) => (
  <Group align='stretch' direction='column' spacing={0}>
    <Paper shadow='xl' radius={999}>
      <Image
        radius={999}
        width='100%'
        height='100%'
        src={imageUrl}
        alt={name}
        withPlaceholder
      />
    </Paper>

    <Title mt='sm'>{name}</Title>
  </Group>
);

export default AlbumCard;
