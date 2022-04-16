import fetch from 'cross-fetch';
export async function malRequest(mod: string) {
  const url = `https://api.jikan.moe/v4/${mod}`;
  const options = {
    method: 'GET',
  };
  const requestData = await fetch(url, options)
    .then((res: any) => res.json())
    .catch();
  return requestData as any;
}
