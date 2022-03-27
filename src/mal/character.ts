import { malRequest } from './global';
/**
 * get character by id
 * @param id
 */

export async function getByID(id: number) {
  return await malRequest('characters', id);
}
