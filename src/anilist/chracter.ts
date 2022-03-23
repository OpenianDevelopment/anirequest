import { anilistRequest } from './global';
/**
 * return chracter by name
 * @param name chracter name
 * @returns chracter or null
 **/
export async function getByName(name: string) {
  const variables = {
    search: name,
    sort: 'SEARCH_MATCH',
  };
  const query = `query ($id: Int, $search: String) {
        Character(id: $id, search: $search) {
            name {
                full
                first
                middle
                last
                userPreferred
                native
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              dateOfBirth {
                year
                month
                day
              }
              bloodType
              siteUrl
              favourites
              description
              gender
              age
              anime: media(page: 1, perPage: 5, type: ANIME) {
                nodes {
                  title {
                    romaji
                    english
                    userPreferred
                    native
                  }
                }
              }
              manga: media(page: 1, perPage: 5, type: MANGA) {
                nodes {
                  title {
                    romaji
                    english
                    userPreferred
                    native
                  }
                }
            }
        }
      }`;
  return (await anilistRequest(query, variables)) as Promise<object | null>;
}
/**
 * return array of characters by name
 * @param name name of character
 * @param perPage how many per page
 * @param page select page to show (not required)
 * @returns array of character or null
 */

export async function getArraybyName(name: string, perPage: number, page?: number) {
  if (perPage) {
    if (!page) {
      page = 1;
    }
    const variablesPage = {
      search: name,
      sort: 'SEARCH_MATCH',
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
              characters(id: $id, search: $search) {
                name {
                    full
                    first
                    middle
                    last
                    userPreferred
                    native
                    alternative
                    alternativeSpoiler
                  }
                  image {
                    large
                    medium
                  }
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  bloodType
                  siteUrl
                  favourites
                  description
                  gender
                  age
                  anime: media(page: 1, perPage: 5, type: ANIME) {
                    nodes {
                      title {
                        romaji
                        english
                        userPreferred
                        native
                      }
                    }
                  }
                  manga: media(page: 1, perPage: 5, type: MANGA) {
                    nodes {
                      title {
                        romaji
                        english
                        userPreferred
                        native
                      }
                    }
                  }
              }
            }
          }`;
    return (await anilistRequest(queryPage, variablesPage)) as Promise<object | null>;
  }
}
/**
 * return character by id
 * @param id id of chracter
 * @returns character or null
 */

export async function getByID(id: number) {
  const variables = {
    id,
    sort: 'SEARCH_MATCH',
  };
  const query = `query ($id: Int) {
        Character(id: $id) {
          name {
            full
            first
            middle
            last
            userPreferred
            native
            alternative
            alternativeSpoiler
          }
          image {
            large
            medium
          }
          dateOfBirth {
            year
            month
            day
          }
          bloodType
          siteUrl
          favourites
          description
          gender
          age
          anime: media(page: 1, perPage: 5, type: ANIME) {
            nodes {
              title {
                romaji
                english
                userPreferred
                native
              }
            }
          }
          manga: media(page: 1, perPage: 5, type: MANGA) {
            nodes {
              title {
                romaji
                english
                userPreferred
                native
              }
            }
          }
        }
      }`;
  return (await anilistRequest(query, variables)) as Promise<object | null>;
}
