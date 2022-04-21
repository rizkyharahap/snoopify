export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height?: number | null;
  width?: number | null;
  url: string;
}

export interface Pagginate<T> {
  href: string;
  items: T[];
  limit: number;
  offset: number;
  next: null | string;
  previous: null | string;
  total: number;
}

export interface ExternalIds {
  isrc: string;
}
