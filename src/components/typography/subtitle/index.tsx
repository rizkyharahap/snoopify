import { SharedTextProps, Text } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Subtitle = ({
  children,
  ...props
}: PropsWithChildren<SharedTextProps>) => (
  <Text
    size='sm'
    lineClamp={2}
    weight={600}
    color='gray'
    sx={{ lineHeight: 1 }}
    {...props}
  >
    {children}
  </Text>
);
export default Subtitle;
