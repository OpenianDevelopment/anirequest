import { malRequest } from './global';
/**
 * get anime by id
 * @param id 
 * @param special staff,characters,episodes,news,video,pictures,statistics,moreinfo,userupdates,reviews,relations,themes,external
            
 */

export async function getByID(id: number, special?: string) {
  if (special) {
    special.toLowerCase();
    if (!checkSpecial(special)) {
      throw new Error(
        'special vlaue is not valid \n Acceptable special are: \n staff,characters,episodes,news,video,pictures,statistics,moreinfo,userupdates,reviews,relations,themes,external',
      );
    }
    return await malRequest('anime', id, special);
  }
  return await malRequest('anime', id);
}

function checkSpecial(special: string) {
  switch (special) {
    case 'staff':
      return true;
    case 'characters':
      return true;
    case 'episodes':
      return true;
    case 'news':
      return true;
    case 'video':
      return true;
    case 'pictures':
      return true;
    case 'statistics':
      return true;
    case 'moreinfo':
      return true;
    case 'userupdates':
      return true;
    case 'reviews':
      return true;
    case 'relations':
      return true;
    case 'themes':
      return true;
    case 'external':
      return true;
  }
  return false;
}
