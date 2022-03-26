import fetch from 'cross-fetch';
export async function anilistRequest(query: string, variables: object) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const requestData = await fetch('https://graphql.anilist.co', options).then(handleResponse).catch();
  if (requestData === undefined) return null;
  return requestData.data as any;
}
async function handleResponse(response: Response) {
  const json = await response.json();
  return response.ok ? json : Promise.reject(json);
}

export interface User {
  id: number;
  name: string | null;
  createdAt: number;
  previousNames: {
    name: string;
    createdAt: number;
    updatedAt: number;
  }[];
  updatedAt: number;
  bannerImage: string | null;
  avatar: {
    large: string | null;
    medium: string | null;
  };
  about: string | null;
  statistics: {
    anime: { count: number; episodesWatched: number; minutesWatched: number };
    manga: { count: number; volumesRead: number; chaptersRead: number };
  };
  unreadNotificationCount: number | null;
  siteUrl: string;
}

export interface Manga {
  id: number;
  idMal: number | null;
  type: string;
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
export interface Character {
  name: {
    full: string | null;
    first: string | null;
    middle: string | null;
    last: string | null;
    userPreferred: string | null;
    native: string | null;
    alternative: string[];
    alternativeSpoiler: string[];
  };
  image: {
    large: string;
    medium: string;
  };
  dateOfBirth: { year: string | null; month: string | null; day: string | null };
  bloodType: string | null;
  siteUrl: string;
  favourites: number;
  description: string | null;
  gender: string | null;
  age: string | null;
  anime: { nodes: nodes[] };
  manga: { nodes: nodes[] };
}
export interface nodes {
  title: {
    romaji: string | null;
    english: string | null;
    userPreferred: string | null;
    native: string | null;
  };
  status: string;
  startDate: string | null;
  endDate: string | null;
}
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
