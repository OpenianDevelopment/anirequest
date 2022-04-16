import { malRequest } from './global';
import {
  AnimeCharacter,
  AnimeDataById,
  AnimeEpisodeById,
  AnimeEpisodes,
  AnimeForum,
  AnimeMoreInfo,
  AnimeNews,
  AnimePictures,
  AnimeRecommendations,
  AnimeRelations,
  AnimeReviews,
  AnimeSearch,
  AnimeSearchQuery,
  AnimeStaff,
  AnimeStatistics,
  AnimeThemes,
  AnimeUserUpdates,
  AnimeVideos,
} from './Interfaces/animeInterface';

/**
 * Get anime details using it's MyAnimeList ID
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeDataById>}
 */

export async function getAnimeById(Id: number): Promise<AnimeDataById> {
  const urlString = `anime/${Id}`;
  return await malRequest(urlString);
}

/**
 * Get Character list of an anime
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeCharacter[]>}
 */
export async function getAnimeCharacters(Id: number): Promise<AnimeCharacter[]> {
  const urlString = `anime/${Id}/characters`;
  return await malRequest(urlString);
}

/**
 * Get Staff details of an anime
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeStaff>}
 */
export async function getAnimeStaff(Id: number): Promise<AnimeStaff> {
  const urlString = `anime/${Id}/staff`;
  return await malRequest(urlString);
}

/**
 * Get episode list of an anime
 * @param {number} Id MyAnimeList ID
 * @param {number} [page=1] Page Number from which it needs to be fetched
 * @return {Promise<AnimeEpisodes>}
 */
export async function getAnimeEpisodes(Id: number, page?: number): Promise<AnimeEpisodes> {
  const urlString = `anime/${Id}/episodes?page=${page ? page : '1'}`;
  return await malRequest(urlString);
}

/**
 * Get Episode detail
 * @param {number} Id MyAnimeList ID
 * @param {number} episode Episode number
 * @return {Promise<AnimeEpisodeById>}
 */
export async function getAnimeEpisodeById(Id: number, episode: number): Promise<AnimeEpisodeById> {
  const urlString = `anime/${Id}/episodes/${episode}`;
  return await malRequest(urlString);
}

/**
 * Get News related to an anime
 * @param {number} Id MyAnimeList ID
 * @param {number} [page=1] Page Number
 */
export async function getAnimeNews(Id: number, page?: number): Promise<AnimeNews> {
  const urlString = `anime/${Id}/news?page=${page}`;
  return await malRequest(urlString);
}

/**
 * Get anime videos
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeVideos>>}
 */
export async function getAnimeVideos(Id: number): Promise<AnimeVideos> {
  const urlString = `anime/${Id}/videos`;
  return await malRequest(urlString);
}

/**
 * Get Anime Pictures
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimePictures>}
 */
export async function getAnimePictures(Id: number): Promise<AnimePictures> {
  const urlString = `anime/${Id}/pictures`;
  return await malRequest(urlString);
}

/**
 * Get anime statistics
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeStatistics>}
 */
export async function getAnimeStatistics(Id: string): Promise<AnimeStatistics> {
  const urlString = `anime/${Id}/statistics`;
  return await malRequest(urlString);
}

/**
 * Get more info about the anime
 * @param {number} Id MyAnimeList ID
 * @return {Promise <AnimeMoreInfo>}
 */
export async function getAnimeMoreInfo(Id: number): Promise<AnimeMoreInfo> {
  const urlString = `anime/${Id}/moreinfo`;
  return await malRequest(urlString);
}

/**
 * Get recommendation based on anime
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeRecommendations>}
 */
export async function getAnimeRecommendations(Id: number): Promise<AnimeRecommendations> {
  const urlString = `anime/${Id}/recommendations`;
  return await malRequest(urlString);
}

/**
 * Get anime related forums
 * @param {number} Id MyAnimeList ID
 * @param {"all" | "episode" | "other" } topic
 * @return {Promise<AnimeForum>}
 */
export async function getAnimeForum(Id: number, topic?: 'all' | 'episode' | 'other'): Promise<AnimeForum> {
  const urlString = `anime/${Id}/forum?topic=${topic ? topic : 'all'}`;
  return await malRequest(urlString);
}

/**
 * Get user updates of an anime
 * @param {number} Id MyAnimeList ID
 * @param {number} [page=1] page number
 * @return {Promise<AnimeUserUpdates>}
 */
export async function getAnimeUserUpdates(Id: number, page?: number): Promise<AnimeUserUpdates> {
  const urlString = `anime/${Id}/userupdates?page=${page ? page : '1'}`;
  return await malRequest(urlString);
}

/**
 * Get Anime Reviews
 * @param {number} Id MyAnimeList ID
 * @param {number} page Page Number
 * @return {Promise<AnimeReviews>}
 */
export async function getAnimeReviews(Id: number, page?: number): Promise<AnimeReviews> {
  const urlString = `anime/${Id}/reviews?page=${page ? page : '1'}`;
  return await malRequest(urlString);
}

/**
 * Get anime relations
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeRelations>}
 */
export async function getAnimeRelations(Id: number): Promise<AnimeRelations> {
  const urlString = `anime/${Id}/relations`;
  return await malRequest(urlString);
}

/**
 * Get anime themes
 * @param {number} Id MyAnimeList ID
 * @return {Promise<AnimeThemes>}
 */
export async function getAnimeThemes(Id: number): Promise<AnimeThemes> {
  const urlString = `anime/${Id}/themes`;
  return await malRequest(urlString);
}

/**
 * Search for an anime using query parameters
 * @param {AnimeSearchQuery} searchQuery Query parameters
 * @return {Promise<AnimeSearch>}
 */
export async function getAnimeSearch(searchQuery: AnimeSearchQuery): Promise<AnimeSearch> {
  const urlString = `anime?${searchQuery.q ? '&q=' + searchQuery.q : ''}${
    searchQuery.page ? '&page=' + searchQuery.page : ''
  }${searchQuery.limit ? '&limit=' + searchQuery.limit : ''}${searchQuery.type ? '&type=' + searchQuery.type : ''}${
    searchQuery.score ? '&score=' + searchQuery.score : ''
  }${searchQuery.status ? '&status=' + searchQuery.status : ''}${
    searchQuery.rating ? '&rating=' + searchQuery.rating : ''
  }${searchQuery.sort ? '&sort=' + searchQuery.sort : ''}${searchQuery.sfw ? '&sfw=' + searchQuery.sfw : ''}${
    searchQuery.genres ? '&genres=' + searchQuery.genres : ''
  }${searchQuery.letter ? '&letter=' + searchQuery.letter : ''}${
    searchQuery.producer ? '&producer=' + searchQuery.producer : ''
  }${searchQuery.order_by ? '&order_by=' + searchQuery.order_by : ''}`;

  return await malRequest(urlString);
}
