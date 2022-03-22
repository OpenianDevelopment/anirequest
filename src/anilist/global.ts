import fetch from "cross-fetch";
export async function anilistRequest(query: string, variables: object) {
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
    if (requestData == undefined) return null;
    return requestData.data as any;
}
async function handleResponse(response: Response) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}