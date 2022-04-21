import { kitsuRequest } from './global'
import { favorites, followers, following, libraryEntries, linkedAccounts, stats, User, waifu } from './Intrefaces/userInterface'

/**
 * get user by id
 * @param {number} id user id
 * @returns
 */

export async function getById (id: number) : Promise<User> {
  return await kitsuRequest(`users/${id}`)
}

/**
 * get user waifu
 * @param {number} id user id
 * @returns
 */

export async function getWaifu (id: number) : Promise<waifu> {
  return await kitsuRequest(`users/${id}/waifu`)
}

/**
 * get user pinned post
 * @param {number} id user id
 * @returns
 */

export async function getPinnedPost (id: number) : Promise<any> {
  return await kitsuRequest(`users/${id}/pinned-post`)
}

/**
 * get user followers
 * @param {number} id user id
 * @returns
 */

export async function getFollowers (id: number) : Promise<followers[]> {
  return await kitsuRequest(`users/${id}/followers`)
}

/**
 * get user following
 * @param {number} id user id
 * @returns
 */

export async function getFollowing (id: number) : Promise<following[]> {
  return await kitsuRequest(`users/${id}/following`)
}

/**
 * get user linked accounts
 * @param {number} id user id
 * @returns
 */

export async function getLinkedAccounts (id: number) : Promise<linkedAccounts[]> {
  return await kitsuRequest(`users/${id}/profile-links`)
}

/**
 * get user libary entries
 * @param {number} id user id
 * @returns
 */

export async function getLibaryEntries (id: number) : Promise<libraryEntries[]> {
  return await kitsuRequest(`users/${id}/library-entries`)
}

/**
 * get user favories
 * @param {number} id user id
 * @returns
 */

export async function getFavorites (id: number) : Promise<favorites[]> {
  return await kitsuRequest(`users/${id}/favorites`)
}

/**
 * get user stats
 * @param {number} id user id
 * @returns
 */

export async function getStats (id: number) : Promise<stats[]> {
  return await kitsuRequest(`users/${id}/stats`)
}

/**
 * returns users from name
 * @param {string} name name of users
 * @returns
 */
export async function searchUsers (name:string) : Promise<User[]> {
  return await kitsuRequest(`users?filter[name]=${name}`)
}
