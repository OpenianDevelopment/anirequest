import { kitsuRequest } from './global';

/**
 * get manga by id
 * @param {number} id manga id
 * @returns
 */

export async function getById(id: number) {
  return await kitsuRequest(`manga/${id}`);
}

/**
 * get manga by id
 * @param {number} id manga id
 * @returns
 */

export async function getChapters(id: number) {
  return await kitsuRequest(`manga/${id}/chapters`);
}
