import { malRequest } from './global';
/**
 * get random anime
 * @returns
 */

export async function anime() {
  return await malRequest('random', 0, 'anime');
}

/**
 * get random manga
 * @returns
 */

export async function manga() {
  return await malRequest('random', 0, 'manga');
}

/**
 * get random character
 * @returns
 */

export async function characters() {
  return await malRequest('random', 0, 'characters');
}

/**
 * get random people
 * @returns
 */

export async function people() {
  return await malRequest('random', 0, 'people');
}

/**
 * get random user
 * @returns
 */

export async function users() {
  return await malRequest('random', 0, 'users');
}
