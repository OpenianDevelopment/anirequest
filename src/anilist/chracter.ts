import { anilistRequest } from "./global";
export async function getByName(
    name:string,
    perPage?:number,
    page?:number
):Promise<object|object[]|null>{
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
                }
                image {
                  large
                }
                description
                gender
                age
                anime: media(page: 1, perPage: 5, type: ANIME) {
                  nodes {
                    title {
                      romaji
                    }
                  }
                }
                manga: media(page: 1, perPage: 5, type: MANGA) {
                  nodes {
                    title {
                      romaji
                    }
                  }
                }
              }
            }
          }`;
    return await anilistRequest(queryPage, variablesPage);
  } else {
    var variables = {
      search: name,
      sort: "SEARCH_MATCH",
    };
    const query = `query ($id: Int, $search: String) {
        Character(id: $id, search: $search) {
          name {
            full
          }
          image {
            large
          }
          description
          gender
          age
          anime: media(page: 1, perPage: 5, type: ANIME) {
            nodes {
              title {
                romaji
              }
            }
          }
          manga: media(page: 1, perPage: 5, type: MANGA) {
            nodes {
              title {
                romaji
              }
            }
          }
        }
      }`;
        return await anilistRequest(query, variables);
    }
}

export async function getByID(
    id:number,
    perPage?:number,
    page?:number
):Promise<object|null>{
    var variables = {
      id: id,
      sort: "SEARCH_MATCH",
    };
    const query = `query ($id: Int) {
        Character(id: $id) {
          name {
            full
          }
          image {
            large
          }
          description
          gender
          age
          anime: media(page: 1, perPage: 5, type: ANIME) {
            nodes {
              title {
                romaji
              }
            }
          }
          manga: media(page: 1, perPage: 5, type: MANGA) {
            nodes {
              title {
                romaji
              }
            }
          }
        }
      }`;
    return await anilistRequest(query, variables);
}