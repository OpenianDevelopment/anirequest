import fetch from 'cross-fetch';
export async function malRequest(type: string, id?: number, special?: string) {
  let url = `https://api.jikan.moe/v4/`;
  if (type == 'random') {
    url += `${type}/${special}`;
  } else if (special) {
    url += `${type}/${id}/${special}`;
  } else {
    url += `${type}/${id}`;
  }
  const options = {
    method: 'GET',
  };
  const requestData = await fetch(url, options)
    .then((res) => res.json())
    .catch();
  if (requestData.data === undefined) return null;
  return requestData.data as any;
}
