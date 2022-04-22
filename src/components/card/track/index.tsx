import { Grid, Group, GroupProps, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';
import { memo } from 'react';

export interface TrackCardProps extends GroupProps {
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
  ...props
}: TrackCardProps) => {
  return (
    <Group position='apart' noWrap mx='xl' {...props}>
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
  );
};

export default memo(TrackCard);
