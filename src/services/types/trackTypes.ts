import type { Album } from './albumTypes';
import type { Artist } from './artistTypes';
import type { ExternalIds, ExternalUrls, Pagginate } from './baseTypes';

export interface TrackState {
  selectedTracks: Track[];
}

export interface SearchTracksParams {
  q: string;
  limit?: number;
  offset?: number;
}

export type Tracks = Pagginate<Track>;

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
