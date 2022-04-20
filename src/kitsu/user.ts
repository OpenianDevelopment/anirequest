import { kitsuRequest } from './global'

/**
 * get user by id
 * @param {number} id user id
 * @returns
 */

export async function getById (id: number) {
  return await kitsuRequest(`users/${id}`)
}
