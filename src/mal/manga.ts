import { malRequest } from './global';
/**
 * get manga by id
 * @param id
 */

export async function getByID(id: number) {
  return await malRequest('manga', id);
}
