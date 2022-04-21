import type { ExternalUrls, Pagginate } from './baseTypes';

export type Artists = Pagginate<Artist>;

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
