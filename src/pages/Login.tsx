import { Box, Button, Center, Image, Space, Text, Title } from '@mantine/core';
import ListeningMusic from 'assets/images/listening-music.png';
import SpofityLogo from 'assets/images/spotify-logo.png';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { spotifyAuthorizeURL } from 'services/authorize';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { addToken } from 'services/reducers/auth/authSlice';
import ExpiredToken from 'utils/ExpiredToken';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.hash.replace('#', '?'));
  const token = params.get('access_token');
  const token_type = params.get('token_type');
  const expires_in = params.get('expires_in');

  useEffect(() => {
    if (token && token_type && expires_in) {
      const { expired_at } = new ExpiredToken(parseInt(expires_in));

      dispatch(
        addToken({
          token,
          token_type,
          expired_at,
        }),
      );

      navigate('/');
    }
  }, [dispatch, expires_in, navigate, token, token_type]);

  return (
    <>
      <Center>
        <Image src={ListeningMusic} />
      </Center>

      <Space h='lg' />

      <Box>
        <Title sx={{ fontSize: 28 }}>
          Listening and watching anytime, anywhere{' '}
        </Title>

        <Text size='lg'>
          Welcome to Snoopify, Please login to enjoy the best music
        </Text>
      </Box>

      <Button
        component='a'
        href={spotifyAuthorizeURL()}
        color='dark'
        variant='white'
        radius='xl'
        size='xl'
        rightIcon={<Image src={SpofityLogo} width={40} height={40} />}
        fullWidth
        loading={!!token}
        loaderPosition='right'
      >
        Sign In with Spotify
      </Button>
    </>
  );
};

export default LoginPage;
