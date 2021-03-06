import { anilistRequest } from './global'
import { Manga } from './Interfaces/mangaInterface'
/**
 * return manga by name
 * @param {string} name of manga
 * @returns manga or null
 */
export async function getByName (name: string): Promise<Manga | null> {
  const variables = {
    search: name
  }
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
      }`
  const results = await anilistRequest(query, variables)
  if (results == null) return null
  return results.Media as Promise<Manga>
}
/**
 * return manga by name
 * @param {string} name name of manga
 * @param {number} perPage how many per page
 * @param {number} page select page to show (not required)
 * @returns manga or null
 */
export async function getArrayByName (name: string, perPage: number, page?: number): Promise<Manga[] | []> {
  if (!page) {
    page = 1
  }
  const variablesPage = {
    search: name,
    page,
    perPage
  }
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
          }`
  const results = await anilistRequest(queryPage, variablesPage)
  if (results == null) return []
  if (results.Page.media.length === 0) return []
  return results.Page.media as Promise<Manga[]>
}
/**
 * return manga by id
 * @param {number} id id of manga
 * @returns manga or null
 */
export async function getByID (id: number): Promise<Manga | null> {
  const variables = {
    id
  }
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
      }`
  const results = await anilistRequest(query, variables)
  if (results == null) return null
  return results.Media as Promise<Manga>
}
