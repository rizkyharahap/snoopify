import { SharedTextProps, Text } from '@mantine/core';
import type { PropsWithChildren } from 'react';

const Heading = ({
  children,
  ...props
}: PropsWithChildren<SharedTextProps>) => (
  <Text
    component='h2'
    weight={700}
    size='xl'
    sx={theme => ({
      color: theme.black,
    })}
    {...props}
  >
    {children}
  </Text>
);
export default Heading;
