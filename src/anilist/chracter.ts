import { anilistRequest, Character } from './global';
/**
 * return chracter by name
 * @param name chracter name
 * @returns chracter or null
 **/
export async function getByName(name: string): Promise<Character | null> {
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
  const data = await anilistRequest(query, variables);
  if (data == null) return null;
  return data.Character as Promise<Character>;
}
/**
 * return array of characters by name
 * @param name name of character
 * @param perPage how many per page
 * @param page select page to show (not required)
 * @returns array of character or null
 */

export async function getArraybyName(name: string, perPage: number, page?: number): Promise<Character[] | null> {
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
  const results = await anilistRequest(queryPage, variablesPage);
  if (results == null) return null;
  if (results.Page.characters.length == 0) return null;
  return results.Page.characters as Promise<Character[]>;
}
/**
 * return character by id
 * @param id id of chracter
 * @returns character or null
 */

export async function getByID(id: number): Promise<Character | null> {
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
              status
              startDate
              endDate
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
              status
              startDate
              endDate
            }
          }
        }
      }`;
  const data = await anilistRequest(query, variables);
  if (data == null) return null;
  return data.Character as Promise<Character>;
}
