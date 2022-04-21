import type { ExternalUrls, Image, Pagginate } from './baseTypes';
import { User } from './userTypes';

export interface FeaturedPlaylists {
  message: string;
  playlists: Playlists;
}

export interface AddPlaylist {
  message: string;
  playlist: Playlists;
  public?: boolean;
}

export type Playlists = Pagginate<Playlist>;

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks;
  type: string;
  uri: string;
}

export interface PlaylistTracks {
  href: string;
  total: number;
}
