export interface Anime {
    id: number;
    type: string;
    title: {
      romaji: string | null;
      english: string | null;
      native: string | null;
    };
    description: string | null;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
    };
    startDate: {
      year: number | null;
      month: number | null;
      day: number | null;
    };
    endDate: {
      year: number | null;
      month: number | null;
      day: number | null;
    };
    season: string | null;
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