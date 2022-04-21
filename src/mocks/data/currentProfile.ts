// https://developer.spotify.com/console/get-current-user/

import { User } from 'services/types/userTypes';

export const mockCurrentProfile: User = {
  display_name: 'Rizky Harahap ',
  external_urls: {
    spotify: 'https://open.spotify.com/user/rnbn4ahpubxbfnc8ts1z7pwf8',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: 'https://api.spotify.com/v1/users/rnbn4ahpubxbfnc8ts1z7pwf8',
  id: 'rnbn4ahpubxbfnc8ts1z7pwf8',
  images: [
    {
      height: null,
      url: 'https://i.scdn.co/image/ab6775700000ee859bd9af3ed76558a5446a59a4',
      width: null,
    },
  ],
  type: 'user',
  uri: 'spotify:user:rnbn4ahpubxbfnc8ts1z7pwf8',
  country: '',
  email: '',
  explicit_content: undefined,
  product: '',
};
