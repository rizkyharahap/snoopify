import { Grid, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

export interface AlbumCardProps {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
}

const AlbumCard = ({ name, description, imageUrl }: AlbumCardProps) => (
  <Grid align='center' gutter='sm'>
    <Grid.Col span={2}>
      <Paper shadow='xl' radius='sm'>
        <Image
          radius='sm'
          width='100%'
          height='100%'
          style={{ minHeight: 44 }}
          src={imageUrl}
          alt={name}
          withPlaceholder
        />
      </Paper>
    </Grid.Col>

    <Grid.Col span={10}>
      <Title>{name}</Title>

      {description && <Subtitle lineClamp={1}>{description}</Subtitle>}
    </Grid.Col>
  </Grid>
);

export default AlbumCard;
