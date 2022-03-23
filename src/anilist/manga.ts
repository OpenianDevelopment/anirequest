import { anilistRequest } from './global';
export async function getByName(name: string) {
  const variables = {
    search: name,
  };
  const query = `query ($id: Int, $search: String) {
        Media(id: $id, search: $search, type: MANGA) {
            id
            idMal
            type
            title {
              romaji
              english
              native
            }
            description
            coverImage {
              extraLarge
            }
            startDate {
              year
              month
              day
            }
            format
            status
            chapters
            volumes
            isAdult
            averageScore
            siteUrl
            trailer {
              id
            }
            genres
            trending
            relations {
              edges {
                id
              }
            }
            favourites
            synonyms
            countryOfOrigin
            source
        }
      }`;
  const results = await anilistRequest(query, variables);
  if (results == null) return null;
  return results.Media as Promise<Manga>;
}
export async function getArrayByName(name: string, perPage?: number, page?: number) {
  if (!perPage && page) {
    return null;
  }
  if (perPage) {
    if (!page) {
      page = 1;
    }
    const variablesPage = {
      search: name,
      page,
      perPage,
    };
    const queryPage = `query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
              pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
              }
              media (id: $id, search: $search, type: MANGA) {
                id
          idMal
          type
          title {
            romaji
            english
            native
          }
          description
          coverImage {
            extraLarge
          }
          startDate {
            year
            month
            day
          }
          format
          status
          chapters
          volumes
          isAdult
          averageScore
          siteUrl
          trailer {
            id
          }
          genres
          trending
          relations {
            edges {
              id
            }
          }
          favourites
          synonyms
          countryOfOrigin
          source
              }
            }
          }`;
    return (await anilistRequest(queryPage, variablesPage)) as Promise<MPage | null>;
  }
}

export async function getByID(id: number) {
  const variables = {
    id,
  };
  const query = `query ($id: Int) {
        Media(id: $id, type: MANGA) {
          id
          idMal
          type
          title {
            romaji
            english
            native
          }
          description
          coverImage {
            extraLarge
          }
          startDate {
            year
            month
            day
          }
          format
          status
          chapters
          volumes
          isAdult
          averageScore
          siteUrl
          trailer {
            id
          }
          genres
          trending
          relations {
            edges {
              id
            }
          }
          favourites
          synonyms
          countryOfOrigin
          source
        }
      }`;
  const results = await anilistRequest(query, variables);
  if (results == null) return null;
  return results.Media as Promise<Manga>;
}
interface MPage {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: Manga[];
  };
}
interface Manga {
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
