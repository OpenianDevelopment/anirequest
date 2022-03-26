import { anilistRequest,User } from './global';
/**
 * Returns a single User by name
 * @param name name of User
 * @returns user or null
 **/
export async function getByName(name: string):Promise<User|null> {
  const variables = {
    search: name,
    sort: 'SEARCH_MATCH',
  };
  const query = `query ($id: Int, $search: String, $sort: [UserSort]) {
        User(id: $id, search: $search, sort: $sort) {
          id
          name
          createdAt
          previousNames {
            name
            createdAt
            updatedAt
          }
          updatedAt
          bannerImage
          avatar {
            large
            medium
          }
          about
          statistics {
            anime {
              count
              episodesWatched
              minutesWatched
            }
            manga {
              count
              volumesRead
              chaptersRead
            }
          }
          unreadNotificationCount
          siteUrl
        }
      }`;
  const results = await anilistRequest(query, variables);
  if (results == null) return null;
  return results.User as Promise<User>;
}
/**
 * Returns multiple User by name
 * @param name name of Users
 * @param perPage how many per page
 * @param page select page to show (not required)
 * @returns user or null
 **/
export async function getArrayByName(name: string, perPage: number, page?: number):Promise<User[]|null> {
  if (!page) {
    page = 1;
  }
  const variablesPage = {
    search: name,
    sort: 'SEARCH_MATCH',
    page,
    perPage,
  };
  const queryPage = `query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [UserSort]) {
            Page(page: $page, perPage: $perPage) {
              pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
              }
              users(id: $id, search: $search, sort: $sort) {
                id
                name
                createdAt
                previousNames {
                    name
                    createdAt
                    updatedAt
                }
                updatedAt
                bannerImage
                avatar {
                  large
                  medium
                }
                about
                statistics {
                  anime {
                    count
                    episodesWatched
                    minutesWatched
                  }
                  manga {
                    count
                    volumesRead
                    chaptersRead
                  }
                }
                unreadNotificationCount
                siteUrl
              }
            }
          }`;
  const results = await anilistRequest(queryPage, variablesPage);
  if (results == null) return null;
  if (results.Page.users.length == 0) return null;
  return results.Page.users as Promise<User[]>;
}
/**
 * Returns a single User by id
 * @param id id of User
 * @returns user or null
 **/
export async function getByID(id: number):Promise<User|null> {
  const variables = {
    id,
    sort: 'SEARCH_MATCH',
  };
  const query = `query ($id: Int, $sort: [UserSort]) {
        User(id: $id, sort: $sort) {
          id
          name
          createdAt
          previousNames {
            name
            createdAt
            updatedAt
          }
          updatedAt
          bannerImage
          avatar {
            large
            medium
          }
          about
          statistics {
            anime {
              count
              episodesWatched
              minutesWatched
            }
            manga {
              count
              volumesRead
              chaptersRead
            }
          }
          unreadNotificationCount
          siteUrl
        }
      }
      `;
  const results = await anilistRequest(query, variables);
  if (results == null) return null;
  return results.User as Promise<User>;
}


