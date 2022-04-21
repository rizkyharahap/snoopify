import type { Image, Pagginate } from './baseTypes';

export type Categories = Pagginate<Category>;

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}
