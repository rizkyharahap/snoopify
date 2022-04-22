import { Box, Button, Center, Image, Space, Text, Title } from '@mantine/core';
import ListeningMusic from 'assets/images/listening-music.png';
import SpofityLogo from 'assets/images/spotify-logo.png';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetCurrentUserProfileQuery } from 'services/api/userApi';
import { spotifyAuthorizeURL } from 'services/api/authorize';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { useAppSelector } from 'services/hooks/useAppSelector';
import { useResponseHandlerQuery } from 'services/hooks/useResponseHandlerQuery';
import { addToken } from 'services/reducers/authSlice';
import ExpiredToken from 'utils/ExpiredToken';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Get the token from the url
  const params = new URLSearchParams(location.hash.replace('#', '?'));

  const token = params.get('access_token');
  const token_type = params.get('token_type');
  const expires_in = params.get('expires_in');

  const auth = useAppSelector(state => state.auth);

  const { isError, error, isLoading, isSuccess } =
    useGetCurrentUserProfileQuery(auth.token || skipToken);

  useResponseHandlerQuery({
    error,
    isError,
    isSuccess,
    onSuccess() {
      navigate('/');
    },
  });

  useEffect(() => {
    if (token && token_type && expires_in) {
      const { expired_at } = new ExpiredToken(parseInt(expires_in));

      // Assign token into redux store
      dispatch(
        addToken({
          token,
          token_type,
          expired_at,
        }),
      );
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
        loading={isLoading}
        loaderPosition='right'
      >
        Sign In with Spotify
      </Button>
    </>
  );
};

export default LoginPage;
