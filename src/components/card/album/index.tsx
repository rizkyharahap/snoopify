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
  <Group align='stretch' direction='column' spacing='sm'>
    <Paper shadow='xl' radius='sm'>
      <Image
        radius='sm'
        width='100%'
        height='100%'
        sx={{
          minWidth: 80,
          '@media (min-width: 576px)': {
            minWidth: 110,
          },
          '@media (min-width: 768px)': {
            minWidth: 120,
          },
        }}
        src={imageUrl}
        alt={title}
      />
    </Paper>

    <div>
      <Title>{title}</Title>

      {description && <Subtitle>{description}</Subtitle>}
    </div>
  </Group>
);

export default AlbumCard;
