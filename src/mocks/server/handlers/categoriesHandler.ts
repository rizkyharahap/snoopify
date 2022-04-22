import { fakeNewReleases } from 'mocks/data/newRealease';
import { rest } from 'msw';
import { SPOTIFY_API_URL } from 'services/configs/config';

export const categoriesHandlers = rest.get(
  `${SPOTIFY_API_URL}/browse/categories`,
  (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit');
    console.log('URL : ', req.url.pathname);

    console.log('LIMIT API :', limit);
    return res(ctx.json(fakeNewReleases));
  },
);
