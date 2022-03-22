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
          page: page,
          perPage: perPage,
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
                title {
                  romaji
                  english
                }
                description
                coverImage{
                  extraLarge
                }
                startDate{
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
                source
              }
            }
          }`;
    return await anilistRequest(queryPage, variablesPage);
  } else {
    var variables = {
      search: name,
    };
    const query = `query ($id: Int, $search: String) {
        Media(id: $id, search: $search, type: MANGA) {
          id
          title {
            romaji
            english
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
          source
        }
      }`;
        return await anilistRequest(query, variables);
    }
}

export async function getByID(
    id:number
):Promise<object|null>{
    var variables = {
      id: id,
    };
    const query = `query ($id: Int) {
        Media(id: $id, type: MANGA) {
          id
          title {
            romaji
            english
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
          source
        }
      }`;
    return await anilistRequest(query, variables);
}