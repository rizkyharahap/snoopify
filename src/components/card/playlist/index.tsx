import { Grid, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';

export interface PlaylistCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const PlaylistCard = ({ title, description, imageUrl }: PlaylistCardProps) => (
  <Grid align='center' gutter='sm'>
    <Grid.Col span={2}>
      <Paper shadow='xl' radius='sm'>
        <Image
          radius='sm'
          width='100%'
          height='100%'
          style={{ minHeight: 44 }}
          src={imageUrl}
          alt={title}
          withPlaceholder
        />
      </Paper>
    </Grid.Col>

    <Grid.Col span={10}>
      <Title>{title}</Title>

      {description && <Subtitle lineClamp={1}>{description}</Subtitle>}
    </Grid.Col>
  </Grid>
);

export default PlaylistCard;
