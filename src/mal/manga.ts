import { malRequest } from './global';
import {
  MangaDataById,
  MangaCharacters,
  MangaNews,
  MangaTopicFilter,
  MangaTopics,
  MangaPictures,
  MangaStatistics,
  MangaMoreInfo,
  MangaRecommendations,
  MangaUserUpdates,
  MangaReviews,
  MangaRelations,
  MangaExternal,
  MangaSearchQuery,
  MangaSearch,
} from './Interfaces/mangaInterface';
/**
 * Get a manga using it's MyAnimeList ID
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaDataById>}
 */
export async function getMangaById(Id: number): Promise<MangaDataById> {
  const urlString = `manga/${Id}`;
  return await malRequest(urlString);
}

/**
 * Get the characters of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaCharacters>}
 */
export async function getMangaCharacters(Id: number): Promise<MangaCharacters> {
  const urlString = `manga/${Id}/characters`;
  return await malRequest(urlString);
}

/**
 * Get the news of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaNews>}
 */
export async function getMangaNews(Id: number): Promise<MangaNews> {
  const urlString = `manga/${Id}/news`;
  return await malRequest(urlString);
}

/**
 * Get the topics of a manga
 * @param {number} Id MyAnimeList ID
 * @param {MangaTopicFilter} [filter] Topic filters
 * @return {Promise<MangaTopics>}
 */
export async function getMangaTopics(Id: number, filter?: MangaTopicFilter): Promise<MangaTopics> {
  let urlString = `manga/${Id}/forum`;
  if (filter) urlString += `?filter=${filter}`;
  return await malRequest(urlString);
}

/**
 * Get the pictures of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaPictures>}
 */
export async function getMangaPictures(Id: number): Promise<MangaPictures> {
  const urlString = `manga/${Id}/pictures`;
  return await malRequest(urlString);
}

/**
 * Get statistics of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaStatistics>}
 */
export async function getMangaStatistics(Id: number): Promise<MangaStatistics> {
  const urlString = `manga/${Id}/statistics`;
  return await malRequest(urlString);
}

/**
 * Get more info about a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaMoreInfo>}
 */
export async function getMangaMoreInfo(Id: number): Promise<MangaMoreInfo> {
  const urlString = `manga/${Id}/moreinfo`;
  return await malRequest(urlString);
}

/**
 * Get manga recommendations
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaRecommendations>}
 */
export async function getMangaRecommendations(Id: number): Promise<MangaRecommendations> {
  const urlString = `manga/${Id}/recommendations`;
  return await malRequest(urlString);
}

/**
 * Get user updates of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaUserUpdates>}
 */
export async function getMangaUserUpdates(Id: number): Promise<MangaUserUpdates> {
  const urlString = `manga/${Id}/userupdates`;
  return await malRequest(urlString);
}

/**
 * Get manga reviews
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaReviews>}
 */
export async function getMangaReviews(Id: number): Promise<MangaReviews> {
  const urlString = `manga/${Id}/reviews`;
  return await malRequest(urlString);
}

/**
 * Get the relations of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaRelations>}
 */
export async function getMangaRelations(Id: number): Promise<MangaRelations> {
  const urlString = `manga/${Id}/relations`;
  return await malRequest(urlString);
}

/**
 * Get the external links of a manga
 * @param {number} Id MyAnimeList ID
 * @return {Promise<MangaExternal>}
 */
export async function getMangaExternal(Id: number): Promise<MangaExternal> {
  const urlString = `manga/${Id}/external`;
  return await malRequest(urlString);
}

/**
 * Search for a manga using query parameters
 * @param {MangaSearchQuery} query Query parameters
 * @return {Promise<MangaSearch>}
 */
export async function getMangaSearch(query: MangaSearchQuery): Promise<MangaSearch> {
  const urlString = `manga?
${query.page ? '&page=' + query.page : ''}
${query.limit ? '&limit=' + query.limit : ''}
${query.q ? '&q=' + query.q : ''}
${query.type ? '&type=' + query.type : ''}
${query.score ? '&score=' + query.score : ''}
${query.min_score ? '&min_score=' + query.min_score : ''}
${query.max_score ? '&max_score=' + query.max_score : ''}
${query.status ? '&status=' + query.status : ''}
${query.sfw ? '&sfw=' + query.sfw : ''}
${query.genres ? '&genres=' + query.genres : ''}
${query.genres_exclude ? '&genres_exclude=' + query.genres_exclude : ''}
${query.order_by ? '&order_by=' + query.order_by : ''}
${query.sort ? '&sort=' + query.sort : ''}
${query.letter ? '&letter=' + query.letter : ''}
${query.magazine ? '&magazine=' + query.magazine : ''}
`.replace(/\n/g, ''); // Making sure there is no new lines
  return await malRequest(urlString);
}
