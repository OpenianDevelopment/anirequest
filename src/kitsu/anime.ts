import { kitsuRequest } from './global'
import { Anime, animeEpisode, stramingLinks } from './Intrefaces/animeInterface'
import { genres, mappings, Casting, Categories, mediaCharacters, MediaRelationship, MediaStaff } from './Intrefaces/commonInterface'
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

export async function getEpisodes (id: number) : Promise<animeEpisode[]> {
  return await kitsuRequest(`anime/${id}/episodes`)
}

/**
 * returns anime genres
 * @param {number} id id of anime
 * @returns
 */
export async function getGenres (id:number) : Promise<genres[]> {
  return await kitsuRequest(`anime/${id}/genres`)
}

/**
 * returns anime categories
 * @param {number} id id of anime
 * @returns
 */
export async function getCategory (id:number) : Promise<Categories[]> {
  return await kitsuRequest(`anime/${id}/categories`)
}

/**
 * returns anime castings
 * @param {number} id id of anime
 * @returns
 */
export async function getCastings (id:number) : Promise<Casting[]> {
  return await kitsuRequest(`anime/${id}/castings`)
}

/**
 * returns anime mappings
 * @param {number} id id of anime
 * @returns
 */
export async function getMappings (id:number) : Promise<mappings[]> {
  return await kitsuRequest(`anime/${id}/mappings`)
}

/**
 * returns anime media relations
 * @param {number} id id of anime
 * @returns
 */
export async function getMediaRelationship (id:number) : Promise<MediaRelationship[]> {
  return await kitsuRequest(`anime/${id}/media-relationships`)
}

/**
 * returns anime character
 * @param {number} id id of anime
 * @returns
 */
export async function getCharacters (id:number) : Promise<mediaCharacters[]> {
  return await kitsuRequest(`anime/${id}/characters`)
}

/**
 * returns anime staff
 * @param {number} id id of anime
 * @returns
 */
export async function getStaff (id:number) : Promise<MediaStaff[]> {
  return await kitsuRequest(`anime/${id}/staff`)
}

/**
 * returns anime streamingLinks
 * @param {number} id id of anime
 * @returns
 */
export async function getStreamingLinks (id:number) : Promise<stramingLinks[]> {
  return await kitsuRequest(`anime/${id}/streaming-links`)
}
