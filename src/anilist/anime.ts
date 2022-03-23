import { anilistRequest } from './global';
export async function getByName(name: string) {
  const variables = {
    search: name,
  };
  const query = `query ($id: Int, $search: String) {
            Media(id: $id, search: $search, type: ANIME) {
              id
    type
    title {
      romaji
      english
      native
    }
    description
    coverImage {
      extraLarge
      large
      medium
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    season
    seasonYear
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    countryOfOrigin
    trailer {
      id
    }
    genres
    format
    synonyms
    studios {
      edges {
        id
      }
    }
    status
    popularity
    episodes
    trending
    duration
    isAdult
    siteUrl
    averageScore
    source
            }
          }`;
  return (await anilistRequest(query, variables)) as Promise<object | null>;
}
export async function getArrayByName(name: string, perPage: number, page?: number) {
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
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media(id: $id, search: $search, type: ANIME) {
            id
type
title {
  romaji
  english
  native
}
description
coverImage {
  extraLarge
  large
  medium
}
startDate {
  year
  month
  day
}
endDate {
  year
  month
  day
}
season
seasonYear
nextAiringEpisode {
  episode
  timeUntilAiring
}
countryOfOrigin
trailer {
  id
}
genres
format
synonyms
studios {
  edges {
    id
  }
}
status
popularity
episodes
trending
duration
isAdult
siteUrl
averageScore
source
          }
        }
      }`;
    return (await anilistRequest(queryPage, variablesPage)) as Promise<object | null>;
  }
}

export async function getByID(id: number) {
  const variables = {
    id,
  };
  const query = `query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
    type
    title {
      romaji
      english
      native
    }
    description
    coverImage {
      extraLarge
      large
      medium
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    season
    seasonYear
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    countryOfOrigin
    trailer {
      id
    }
    genres
    format
    synonyms
    studios {
      edges {
        id
      }
    }
    status
    popularity
    episodes
    trending
    duration
    isAdult
    siteUrl
    averageScore
    source
      }
    }`;
  return (await anilistRequest(query, variables)) as Promise<object | null>;
}
