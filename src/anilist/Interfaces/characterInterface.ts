import { title } from './commonInterface'

export interface Nodes {
  title: title;
  status: string;
  startDate: string | null;
  endDate: string | null;
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
  anime: { nodes: Nodes[] };
  manga: { nodes: Nodes[] };
}
