import { SharedTextProps, Text } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Title = ({ children, ...props }: PropsWithChildren<SharedTextProps>) => (
  <Text
    size='md'
    my={0}
    component='h3'
    weight={700}
    lineClamp={1}
    sx={theme => ({
      color: theme.black,
    })}
    {...props}
  >
    {children}
  </Text>
);
export default Title;
