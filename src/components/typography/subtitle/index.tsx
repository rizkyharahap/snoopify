import { SharedTextProps, Text } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Subtitle = ({
  children,
  ...props
}: PropsWithChildren<SharedTextProps>) => (
  <Text
    lineClamp={2}
    weight={600}
    color='gray'
    sx={{ lineHeight: 1.3 }}
    {...props}
  >
    {children}
  </Text>
);
export default Subtitle;
