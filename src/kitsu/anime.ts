import { kitsuRequest } from './global'
/**
 * return anime by id
 * @param {number} id id of anime
 * @returns
 */

export async function getById (id: number) {
  return await kitsuRequest(`anime/${id}`)
}

/**
 * return anime episodes
 * @param {number} id id of anime
 * @returns
 */

export async function getEpisodes (id: number) {
  return await kitsuRequest(`anime/${id}/episodes`)
}
