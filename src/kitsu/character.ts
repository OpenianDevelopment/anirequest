import { kitsuRequest } from './global'
import { character } from './Intrefaces/characterInterface'

/**
 * get character by id
 * @param {number} id character id
 * @returns
 */

export async function getById (id: number) : Promise<character> {
  return await kitsuRequest(`characters/${id}`)
}

/**
 * get characters by name
 * @param {name} name character name
 * @returns
 */

export async function searchCharacter (name: string) : Promise<character[]> {
  return await kitsuRequest(`characters?filter[name]=${name}`)
}
