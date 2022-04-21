import { kitsuRequest } from './global'
import { Casting, Categories, genres, mappings, mediaCharacters, MediaRelationship, MediaStaff } from './Intrefaces/commonInterface'
import { chapters, Manga } from './Intrefaces/mangaInterace'

/**
 * get manga by id
 * @param {number} id manga id
 * @returns
 */

export async function getById (id: number) : Promise<Manga> {
  return await kitsuRequest(`manga/${id}`)
}

/**
 * get manga chapters
 * @param {number} id manga id
 * @returns
 */

export async function getChapters (id: number) : Promise<chapters[]> {
  return await kitsuRequest(`manga/${id}/chapters`)
}

/**
 * get manga genres
 * @param {number} id manga id
 * @returns
 */

export async function getGenres (id: number) : Promise<genres[]> {
  return await kitsuRequest(`manga/${id}/genres`)
}

/**
 * get manga categories
 * @param {number} id manga id
 * @returns
 */

export async function getCategories (id: number) : Promise<Categories[]> {
  return await kitsuRequest(`manga/${id}/categories`)
}

/**
 * get manga castings
 * @param {number} id manga id
 * @returns
 */

export async function getCastings (id: number) : Promise<Casting[]> {
  return await kitsuRequest(`manga/${id}/castings`)
}

/**
 * get manga mappings
 * @param {number} id manga id
 * @returns
 */

export async function getMappings (id: number) : Promise<mappings[]> {
  return await kitsuRequest(`manga/${id}/mappings`)
}

/**
 * get manga media relationships
 * @param {number} id manga id
 * @returns
 */

export async function getMediaRelationships (id: number) : Promise<MediaRelationship[]> {
  return await kitsuRequest(`manga/${id}/media-relationships`)
}

/**
 * get manga characters
 * @param {number} id manga id
 * @returns
 */

export async function getCharacters (id: number) : Promise<mediaCharacters[]> {
  return await kitsuRequest(`manga/${id}/characters`)
}

/**
 * get manga staff
 * @param {number} id manga id
 * @returns
 */

export async function getStaff (id: number) : Promise<MediaStaff[]> {
  return await kitsuRequest(`manga/${id}/staff`)
}

/**
 * returns manga from name
 * @param {string} name name of manga
 * @returns
 */
export async function searchMangas (name:string) : Promise<Manga[]> {
  return await kitsuRequest(`manga?filter[text]=${name}`)
}
