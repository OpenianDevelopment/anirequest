import { coverImage, endDate, season, startDate, title } from './commonInterface'

export interface Anime {
  id: number;
  type: string;
  title: title;
  description: string ;
  coverImage: coverImage;
  startDate: startDate;
  endDate: endDate;
  season: season ;
  seasonYear: number ;
  nextAiringEpisode: {
    episode: number;
    timeUntilAiring: number;
  } ;
  countryOfOrigin: string ;
  trailer: {
    id: string;
  };
  genres: string[];
  format: string;
  synonyms: string[];
  studios: {
    edges: [];
  };
  status: string;
  popularity: number ;
  episodes: number;
  trending: number;
  duration: number;
  isAdult: boolean;
  siteUrl: string;
  averageScore: number;
  source: string;
}
