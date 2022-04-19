import fetch from 'cross-fetch';
export async function kitsuRequest(mod: string) {
  const url = `https://kitsu.io/api/edge/${mod}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
  };
  const requestData = await fetch(url, options)
    .then((res: any) => res.json())
    .catch();
  return requestData as any;
}
