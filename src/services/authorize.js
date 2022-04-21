import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from './configs/config';

export const spotifyAuthorizeURL = () => {
  const url = new URL('https://accounts.spotify.com/authorize');

  const params = {
    response_type: 'token',
    client_id: SPOTIFY_CLIENT_ID,
    scope: 'playlist-read-private playlist-modify-private',
    redirect_uri: SPOTIFY_REDIRECT_URI,
  };

  url.search = new URLSearchParams(params).toString();

  return url.href;
};
