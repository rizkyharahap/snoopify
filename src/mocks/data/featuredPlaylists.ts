export const fakeFeaturedPlaylists = {
  message: "Editor's picks",
  playlists: {
    href: 'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2022-04-22T16%3A52%3A40&offset=0&limit=1',
    items: [
      {
        collaborative: false,
        description:
          'The very best in new music from around the world. Cover: The Kid LAROI',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXJfnUiYjUKT',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT',
        id: '37i9dQZF1DWXJfnUiYjUKT',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003cf0886192e2ecea0e117a24e',
            width: null,
          },
        ],
        name: 'New Music Friday',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTY1MDU3ODQyMiwwMDAwMDM3MDAwMDAwMTgwNGUyM2ZhODcwMDAwMDE4MDRlMGNjZTZk',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT/tracks',
          total: 97,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWXJfnUiYjUKT',
      },
    ],
    limit: 1,
    next: 'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2022-04-22T16%3A52%3A40&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 12,
  },
};
