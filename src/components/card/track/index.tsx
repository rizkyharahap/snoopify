import { Divider, Grid, Group, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';
import { memo, PropsWithChildren } from 'react';

export interface TrackCardProps {
  id: string;
  title: string;
  artist: string;
  year: string | number;
  imageUrl?: string;
}

const TrackCard = ({
  title,
  artist,
  year,
  imageUrl,
  children,
}: PropsWithChildren<TrackCardProps>) => {
  return (
    <div>
      <Group position='apart' noWrap mr='xl'>
        <Grid align='center' gutter='sm'>
          <Grid.Col span={3}>
            <Paper shadow='xl' radius='sm'>
              <Image
                radius='sm'
                width='100%'
                height='100%'
                style={{ minHeight: 44 }}
                src={imageUrl}
                alt={title}
              />
            </Paper>
          </Grid.Col>

          <Grid.Col span={9}>
            <Title>{title}</Title>

            <Subtitle lineClamp={1}>
              {artist} &bull; {year}
            </Subtitle>
          </Grid.Col>
        </Grid>

        <Group noWrap>{children}</Group>
      </Group>

      <Divider mt='lg' />
    </div>
  );
};

export default memo(TrackCard);
