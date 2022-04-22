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

export const mockPlaylistById = {
  href: 'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?offset=1&limit=1&market=ES&locale=en-US,en;q=0.9,id;q=0.8',
  items: [
    {
      added_at: '2015-01-15T12:40:03Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/jmperezperez',
        },
        href: 'https://api.spotify.com/v1/users/jmperezperez',
        id: 'jmperezperez',
        type: 'user',
        uri: 'spotify:user:jmperezperez',
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5VQE4WOzPu9h3HnGLuBoA6',
              },
              href: 'https://api.spotify.com/v1/artists/5VQE4WOzPu9h3HnGLuBoA6',
              id: '5VQE4WOzPu9h3HnGLuBoA6',
              name: 'Vlasta Marek',
              type: 'artist',
              uri: 'spotify:artist:5VQE4WOzPu9h3HnGLuBoA6',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5Opp8ursJ6XoTTcqElvAJG',
          },
          href: 'https://api.spotify.com/v1/albums/5Opp8ursJ6XoTTcqElvAJG',
          id: '5Opp8ursJ6XoTTcqElvAJG',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273cf921f1b12eb4ecb99e1b4d4',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02cf921f1b12eb4ecb99e1b4d4',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851cf921f1b12eb4ecb99e1b4d4',
              width: 64,
            },
          ],
          name: 'Tibetan Bowls',
          release_date: '2000',
          release_date_precision: 'year',
          total_tracks: 6,
          type: 'album',
          uri: 'spotify:album:5Opp8ursJ6XoTTcqElvAJG',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5VQE4WOzPu9h3HnGLuBoA6',
            },
            href: 'https://api.spotify.com/v1/artists/5VQE4WOzPu9h3HnGLuBoA6',
            id: '5VQE4WOzPu9h3HnGLuBoA6',
            name: 'Vlasta Marek',
            type: 'artist',
            uri: 'spotify:artist:5VQE4WOzPu9h3HnGLuBoA6',
          },
        ],
        disc_number: 1,
        duration_ms: 730066,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'NLA930601339',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/64IL0ZrOV7F6BDPm5fhfUa',
        },
        href: 'https://api.spotify.com/v1/tracks/64IL0ZrOV7F6BDPm5fhfUa',
        id: '64IL0ZrOV7F6BDPm5fhfUa',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/5o3jMYOSbaVz3tkgwhELSV',
          },
          href: 'https://api.spotify.com/v1/tracks/5o3jMYOSbaVz3tkgwhELSV',
          id: '5o3jMYOSbaVz3tkgwhELSV',
          type: 'track',
          uri: 'spotify:track:5o3jMYOSbaVz3tkgwhELSV',
        },
        name: 'Is',
        popularity: 2,
        preview_url:
          'https://p.scdn.co/mp3-preview/c40175884feaa1277fe11990ee40764174cff220?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:64IL0ZrOV7F6BDPm5fhfUa',
      },
      video_thumbnail: {
        url: null,
      },
    },
  ],
  limit: 1,
  next: 'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?offset=2&limit=1&market=ES&locale=en-US,en;q=0.9,id;q=0.8',
  offset: 1,
  previous:
    'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?offset=0&limit=1&market=ES&locale=en-US,en;q=0.9,id;q=0.8',
  total: 5,
};
