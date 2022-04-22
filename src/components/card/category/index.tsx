import { Group, Image, Paper } from '@mantine/core';
import Title from 'components/typography/title';

export interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

const CategoryCard = ({ name, imageUrl }: CategoryCardProps) => (
  <Group align='stretch' direction='column' spacing={0}>
    <Paper shadow='xl' radius={999}>
      <Image
        radius={999}
        width='100%'
        height='100%'
        sx={{ minheight: 84 }}
        src={imageUrl}
        alt={name}
        withPlaceholder
      />
    </Paper>

    <Title mt='xs' align='center'>
      {name}
    </Title>
  </Group>
);

export default CategoryCard;
