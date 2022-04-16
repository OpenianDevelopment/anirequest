import { malRequest } from './global';
import {
  CharacterAnime,
  CharacterById,
  CharacterManga,
  CharacterPictures,
  CharacterSearch,
  CharacterSearchQuery,
  CharacterVoiceActors,
} from './Interfaces/characterInterface';
/**
 * Get a character using its MyAnimeList ID
 * @param {number} Id MyAnimeList ID
 * @return {Promise<CharacterById>}
 */
export async function getCharacterById(Id: number): Promise<CharacterById> {
  const urlString = `characters/${Id}`;
  return await malRequest(urlString);
}

/**
 * Get the anime of a character
 * @param {number} Id MyAnimeList ID
 * @return {Promise<CharacterAnime>}
 */
export async function getCharacterAnime(Id: number): Promise<CharacterAnime> {
  const urlString = `characters/${Id}/anime`;
  return await malRequest(urlString);
}

/**
 * Get the manga of a character
 * @param {number} Id MyAnimeList ID
 * @return {Promise<CharacterManga>}
 */
export async function getCharacterManga(Id: number): Promise<CharacterManga> {
  const urlString = `characters/${Id}/manga`;
  return await malRequest(urlString);
}

/**
 * Get the voice actors of a character
 * @param {number} Id MyAnimeList ID
 * @return {Promise<CharacterVoiceActors>}
 */
export async function getCharacterVoiceActors(Id: number): Promise<CharacterVoiceActors> {
  const urlString = `characters/${Id}/voices`;
  return await malRequest(urlString);
}

/**
 * Get the pictures of a character
 * @param {number} Id MyAnimeList ID
 * @return {Promise<CharacterPictures>}
 */
export async function getCharacterPictures(Id: number): Promise<CharacterPictures> {
  const urlString = `characters/${Id}/pictures`;
  return await malRequest(urlString);
}

/**
 * Search for a character using query parameters
 * @param {CharacterSearchQuery} query Query parameters
 * @return {Promise<CharacterPictures>}
 */
export async function getCharactersSearch(query: CharacterSearchQuery): Promise<CharacterSearch> {
  const urlString = `characters?
${query.page ? '&page=' + query.page : ''}
${query.limit ? '&limit=' + query.limit : ''}
${query.q ? '&q=' + query.q : ''}
${query.order_by ? '&order_by=' + query.order_by : ''}
${query.sort ? '&sort=' + query.sort : ''}
${query.letter ? '&letter=' + query.letter : ''}
`.replace(/\n/g, ''); // removing 'new lines'
  return await malRequest(urlString);
}
