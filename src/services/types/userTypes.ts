import type { ExternalUrls, Image } from './baseTypes';

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface Followers {
  href: any;
  total: number;
}

export interface User {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  followers: Followers;
  images?: Image[];
  country?: string;
  email?: string;
  explicit_content?: ExplicitContent;
  product?: string;
}
