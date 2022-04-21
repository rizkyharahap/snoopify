// https://developer.spotify.com/console/get-featured-playlists/

export const mockFeaturedPlaylist = {
  message: "Editor's picks",
  playlists: {
    href: 'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2022-04-21T06%3A54%3A14&offset=0&limit=2',
    items: [
      {
        collaborative: false,
        description:
          'Set the mood of your day with these awesome, happy songs!',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX0UrRvztWcAU',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0UrRvztWcAU',
        id: '37i9dQZF1DX0UrRvztWcAU',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000030bd6693bac1f89a70d623e4d',
            width: null,
          },
        ],
        name: 'Wake Up Happy',
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
          'MTY1MDUyNDAxMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0UrRvztWcAU/tracks',
          total: 150,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX0UrRvztWcAU',
      },
      {
        collaborative: false,
        description: 'Get your day off to a cracking start!',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXc5e2bJhV6pu',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXc5e2bJhV6pu',
        id: '37i9dQZF1DXc5e2bJhV6pu',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003037da32de996d7c859b3b563',
            width: null,
          },
        ],
        name: 'Morning Motivation',
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
          'MTY1MDUyNDAzNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXc5e2bJhV6pu/tracks',
          total: 80,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DXc5e2bJhV6pu',
      },
    ],
    limit: 2,
    next: 'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2022-04-21T06%3A54%3A14&offset=2&limit=2',
    offset: 0,
    previous: null,
    total: 11,
  },
};
