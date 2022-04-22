import { fakeSearchTracks } from 'mocks/data/searchs';
import { rest } from 'msw';
import { SPOTIFY_API_URL } from 'services/configs/config';

export const searchHandlers = rest.get(
  `${SPOTIFY_API_URL}/search`,
  (req, res, ctx) => {
    return res(ctx.json(fakeSearchTracks));
  },
);
