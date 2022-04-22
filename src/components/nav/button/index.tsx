import { Button, ButtonProps } from '@mantine/core';

const NavButton = ({ children, ...props }: ButtonProps<'button'>) => {
  return (
    <Button
      variant='subtle'
      size='lg'
      px='xl'
      py='sm'
      sx={theme => ({
        color: theme.white,
        backgroundColor: 'transparent',
        opacity: 0.8,
        ':hover': {
          opacity: 1,
          backgroundColor: 'transparent',
        },
        ':disabled': {
          color: `${theme.white} !important`,
          backgroundColor: 'transparent !important',
          opacity: 0.4,
        },
        transition: 'opacity 0.1s',
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
