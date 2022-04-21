// https://developer.spotify.com/console/get-new-releases/

export const mockNewReleases = {
  href: 'https://api.spotify.com/v1/browse/new-releases?locale=en-US%2Cen%3Bq%3D0.9%2Cid%3Bq%3D0.8&offset=0&limit=20',
  items: [
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1h6Cn3P4NGzXbaXidqURXs',
          },
          href: 'https://api.spotify.com/v1/artists/1h6Cn3P4NGzXbaXidqURXs',
          id: '1h6Cn3P4NGzXbaXidqURXs',
          name: 'Swedish House Mafia',
          type: 'artist',
          uri: 'spotify:artist:1h6Cn3P4NGzXbaXidqURXs',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/2Dbe9L757CSQbhnbW5PVSH',
      },
      href: 'https://api.spotify.com/v1/albums/2Dbe9L757CSQbhnbW5PVSH',
      id: '2Dbe9L757CSQbhnbW5PVSH',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273bd6f8ac82dc5fe1028c14f7d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02bd6f8ac82dc5fe1028c14f7d',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851bd6f8ac82dc5fe1028c14f7d',
          width: 64,
        },
      ],
      name: 'Paradise Again',
      release_date: '2022-04-15',
      release_date_precision: 'day',
      total_tracks: 17,
      type: 'album',
      uri: 'spotify:album:2Dbe9L757CSQbhnbW5PVSH',
    },
  ],
  limit: 20,
  next: 'https://api.spotify.com/v1/browse/new-releases?locale=en-US%2Cen%3Bq%3D0.9%2Cid%3Bq%3D0.8&offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 100,
};
