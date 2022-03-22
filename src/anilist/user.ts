import { anilistRequest } from "./global";
export async function getByName(
    name:string,
    perPage?:number,
    page?:number
){
    if (!perPage && page){
        console.error("page cannot be defined if perpage is undefined");
        return null
    }
    if (perPage) {
        if (!page) {
          page = 1;
        }
        var variablesPage = {
          search: name,
          sort: "SEARCH_MATCH",
          page: page,
          perPage: perPage,
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
    return await anilistRequest(queryPage, variablesPage) as Promise<uPage|null>;
  } else {
    var variables = {
      search: name,
      sort: "SEARCH_MATCH",
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
        return await anilistRequest(query, variables) as Promise<user|null>;
    }
}

export async function getByID(
    id:number
):Promise<user|null>{
    var variables = {
      id: id,
      sort: "SEARCH_MATCH",
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
    return await anilistRequest(query, variables) as Promise<user|null>;
}

interface uPage{
    Page:{
        pageInfo: {
        total: number,
        currentPage: number,
        lastPage: number,
        hasNextPage: boolean,
        perPage: number
      },
      users: Array<user>}
}

interface user{
    User:{
        id:number,
        name:string|null,
        createdAt:number,
        previousNames:Array<{name:string,createdAt:number,updatedAt:number}>,
        updatedAt:number,
        bannerImage:string|null
        avatar:{
            large:string|null,
            medium:string|null
        }
        about:string|null,
        statistics:{
            anime:{count: number, episodesWatched: number, minutesWatched: number},
            manga:{count: number, volumesRead: number, chaptersRead: number}
        },
        unreadNotificationCount: number|null,
        siteUrl: string
    }
}