import type { ExternalUrls, Image, Pagginate } from './baseTypes';
import type { Track } from './trackTypes';
import type { User } from './userTypes';

export interface FeaturedPlaylists {
  message: string;
  playlists: Playlists;
}

export type PlaylistTracks = Pagginate<PlaylistTrack>;

export interface PlaylistTrack {
  added_at: string;
  added_by: User;
  is_local: boolean;
  primary_color: any;
  track: Track;
  video_thumbnail: VideoThumbnail;
}

export interface VideoThumbnail {
  url: string | null;
}

export interface AddPlaylist {
  name: string;
  description: string;
  public?: boolean;
}

export interface AddPlaylistItem {
  playlist_id: string;
  uris: string[];
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
  tracks: Pagginate<PlaylistTrack>;
  type: string;
  uri: string;
}
