import { coverImage, startDate, title } from './commonInterface'

export interface Manga {
  id: number;
  idMal: number ;
  type: string;
  title: title;
  description: string ;
  coverImage: coverImage;
  startDate: startDate;
  format: string;
  status: string;
  chapters: number ;
  volumes: number ;
  isAdult: boolean;
  averageScore: number ;
  siteUrl: string;
  trailer: string ;
  genres: string[];
  trending: number ;
  relations: {
    edges: { id: number }[];
  };
  favourites: number ;
  synonys: string[];
  countryOfOrigin: string ;
  source: string;
}
