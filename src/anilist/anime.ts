import { anilistRequest } from './global'
import { Anime } from './Interfaces/animeInterface'

/**
 * return anime by name
 * @param {string} name name of anime
 * @returns anime or null
 */
export async function getByName (name: string): Promise<Anime | null> {
  const variables = {
    search: name
  }
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
          }`
  const results = await anilistRequest(query, variables)
  if (results == null) return null
  return results.Media as Promise<Anime>
}
/**
 * return array of anime
 * @param {string} name name of anime
 * @param {number} perPage how many per page
 * @param {number} page select page to show (not required)
 * @returns anime array
 */
export async function getArrayByName (name: string, perPage: number, page?: number): Promise<Anime[] | []> {
  if (!page) {
    page = 1
  }
  const variablesPage = {
    search: name,
    page,
    perPage
  }
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
    }`
  const results = await anilistRequest(queryPage, variablesPage)
  if (results == null) return []
  if (results.Page.media.length === 0) return []
  return results.Page.media as Promise<Anime[]>
}
/**
 * return anime by id
 * @param {number} id id of anime
 * @returns null or anime
 */

export async function getByID (id: number): Promise<Anime | null> {
  const variables = {
    id
  }
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
    }`
  const results = await anilistRequest(query, variables)
  if (results == null) return null
  return results.Media as Promise<Anime>
}
