import { fakeFeaturedPlaylists } from 'mocks/data/featuredPlaylists';
import { rest } from 'msw';
import { SPOTIFY_API_URL } from 'services/configs/config';

export const featuredHandlers = rest.get(
  `${SPOTIFY_API_URL}/browse/featured-playlists`,
  (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit');
    console.log('URL : ', req.url.pathname);

    console.log('LIMIT API :', limit);
    return res(ctx.json(fakeFeaturedPlaylists));
  },
);
