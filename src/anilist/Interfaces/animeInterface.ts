import { coverImage, endDate, season, startDate, title } from './commonInterface'

export interface Anime {
  id: number;
  type: string;
  title: title;
  description: string | null;
  coverImage: coverImage;
  startDate: startDate;
  endDate: endDate;
  season: season | null;
  seasonYear: number | null;
  nextAiringEpisode: {
    episode: number;
    timeUntilAiring: number;
  } | null;
  countryOfOrigin: string | null;
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
  popularity: number | null;
  episodes: number;
  trending: number;
  duration: number;
  isAdult: boolean;
  siteUrl: string;
  averageScore: number;
  source: string;
}
