import { anilistRequest } from './global';
export async function getByName(name: string ) {
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
    return (await anilistRequest(queryPage, variablesPage)) as Promise<UPage | null>;
  }
}

export async function getByID(id: number) {
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

interface UPage {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    users: User[];
  };
}

interface User {
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
