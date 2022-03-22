export async function animeByname(name:string,perPage?:number,page?:number) {
    if(!perPage && page)return console.error("page cannot be defined if perpage is undefined")
    if(perPage){
        if(!page){page = 1}
        var variablesPage = {
            search: name,
            page: page,
            perPage: perPage
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
                nextAiringEpisode {
                  episode
                  timeUntilAiring
                }
                format
                status
                episodes
                duration
                isAdult
                averageScore
                source
              }
            }
          }`;
        anilistRequest(queryPage,variablesPage)
    }else{
        var variables = {
            search: name
        };
        const query = `query ($id: Int, $search: String) {
            Media(id: $id, search: $search, type: ANIME) {
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
              nextAiringEpisode {
                episode
                timeUntilAiring
              }
              format
              status
              episodes
              duration
              isAdult
              averageScore
              source
            }
          }`
          anilistRequest(query,variables)
    } 
}
export async function animeByID(id:number,perPage?:number,page?:number) {
    if(!perPage && page)return console.error("page cannot be defined if perpage is undefined")
    if(perPage){
        if(!page){page = 1}
        var variablesPage = {
            id: id,
            page: page,
            perPage: perPage
        };
    }else{
        var variables = {
            id: id
        };  
    } 
}


async function anilistRequest(query: string,variables:object){
    const url = "https://graphql.anilist.co",
        options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
    };
    const requestData = await fetch(url, options)
    .then(handleResponse)
    .catch(console.error);
    if (requestData == undefined)return null;
    return requestData
}
async function handleResponse(response: Response) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}