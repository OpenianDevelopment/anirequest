import { coverImage, startDate, title } from './commonInterface'

export interface Manga {
  id: number;
  idMal: number | null;
  type: string;
<<<<<<< Updated upstream
  title: title;
  description: string | null;
  coverImage: coverImage;
  startDate: startDate;
=======
  title: {
    romaji: string | null;
    english: string | null;
    natvie: string | null;
  };
  description: string | null;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  startDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
>>>>>>> Stashed changes
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
