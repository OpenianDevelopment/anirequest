import { kitsuRequest } from './global'
import { Anime } from './Intrefaces/animeInterface'
/**
 * return anime by id
 * @param {number} id id of anime
 * @returns {Anime}
 */

export async function getById (id: number) : Promise<Anime> {
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

/**
 * returns anime genres
 * @param {number} id id of anime
 * @returns
 */
export async function getGenres (id:number) {
  return await kitsuRequest(`anime/${id}/genres`)
}

/**
 * returns anime categories
 * @param {number} id id of anime
 * @returns
 */
export async function getCategory (id:number) {
  return await kitsuRequest(`anime/${id}/categories`)
}

/**
 * returns castings
 * @param {number} id id of anime
 * @returns
 */
export async function getCastings (id:number) {
  return await kitsuRequest(`anime/${id}/castings`)
}

/**
 * returns installments
 * @param {number} id id of anime
 * @returns
 */
export async function getInstallments (id:number) {
  return await kitsuRequest(`anime/${id}/installments`)
}

/**
 * returns mappings
 * @param {number} id id of anime
 * @returns
 */
export async function getMappings (id:number) {
  return await kitsuRequest(`anime/${id}/mappings`)
}

/**
 * returns reviews
 * @param {number} id id of anime
 * @returns
 */
export async function getMediaRelationship (id:number) {
  return await kitsuRequest(`anime/${id}/mediaRelationships`)
}

/**
 * returns character
 * @param {number} id id of anime
 * @returns
 */
export async function getCharacters (id:number) {
  return await kitsuRequest(`anime/${id}/characters`)
}

/**
 * returns staff
 * @param {number} id id of anime
 * @returns
 */
export async function getStaff (id:number) {
  return await kitsuRequest(`anime/${id}/staff`)
}

/**
 * returns production
 * @param {number} id id of anime
 * @returns
 */
export async function getProduction (id:number) {
  return await kitsuRequest(`anime/${id}/`)
}

/**
 * returns quotes
 * @param {number} id id of anime
 * @returns
 */
export async function getQuotes (id:number) {
  return await kitsuRequest(`anime/${id}/quotes`)
}

/**
 * returns anime streamingLinks
 * @param {number} id id of anime
 * @returns
 */
export async function getStreamingLinks (id:number) {
  return await kitsuRequest(`anime/${id}/streamingLinks`)
}
