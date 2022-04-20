import { SharedTextProps, Text } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Subtitle = ({
  children,
  ...props
}: PropsWithChildren<SharedTextProps>) => (
  <Text size='sm' lineClamp={2} color='gray' {...props}>
    {children}
  </Text>
);
export default Subtitle;
