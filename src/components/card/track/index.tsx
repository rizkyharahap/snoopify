import { Grid, Group, Image, Paper } from '@mantine/core';
import Subtitle from 'components/typography/subtitle';
import Title from 'components/typography/title';
import { memo, PropsWithChildren } from 'react';

export interface TrackCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const TrackCard = ({
  title = 'Mantap Jiwa',
  description = 'Eitaro, IDOCS (2020)',
  imageUrl = 'http://placehold.jp/d91775/ffffff/150x150.png',
  children,
}: PropsWithChildren<TrackCardProps>) => {
  return (
    <Group position='apart' noWrap>
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

          {description && <Subtitle lineClamp={1}>{description}</Subtitle>}
        </Grid.Col>
      </Grid>

      <Group noWrap>{children}</Group>
    </Group>
  );
};

export default memo(TrackCard);
