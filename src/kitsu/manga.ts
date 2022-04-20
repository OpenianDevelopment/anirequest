import { kitsuRequest } from './global'
import { Manga } from './Intrefaces/mangaInterace'

/**
 * get manga by id
 * @param {number} id manga id
 * @returns
 */

export async function getById (id: number) : Promise<Manga> {
  return await kitsuRequest(`manga/${id}`)
}

/**
 * get manga by id
 * @param {number} id manga id
 * @returns
 */

export async function getChapters (id: number) {
  return await kitsuRequest(`manga/${id}/chapters`)
}
