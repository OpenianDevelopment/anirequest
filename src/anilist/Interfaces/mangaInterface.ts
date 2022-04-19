import { coverImage, startDate, title } from './commonInterface'

export interface Manga {
  id: number;
  idMal: number | null;
  type: string;
  title: title;
  description: string | null;
  coverImage: coverImage;
  startDate: startDate;
  format: string;
  status: string;
  chapters: number | null;
  volumes: number | null;
  isAdult: boolean;
  averageScore: number | null;
  siteUrl: string;
  trailer: string | null;
  genres: string[];
  trending: number | null;
  relations: {
    edges: { id: number }[];
  };
  favourites: number | null;
  synonys: string[];
  countryOfOrigin: string | null;
  source: string;
}
