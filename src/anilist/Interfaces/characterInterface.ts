import { title } from './commonInterface'

export interface Nodes {
  title: title;
  status: string;
  startDate: string ;
  endDate: string ;
}

export interface Character {
  name: {
    full: string ;
    first: string ;
    middle: string ;
    last: string ;
    userPreferred: string ;
    native: string ;
    alternative: string[];
    alternativeSpoiler: string[];
  };
  image: {
    large: string;
    medium: string;
  };
  dateOfBirth: { year: string ; month: string ; day: string };
  bloodType: string ;
  siteUrl: string;
  favourites: number;
  description: string ;
  gender: string ;
  age: string ;
  anime: { nodes: Nodes[] };
  manga: { nodes: Nodes[] };
}
