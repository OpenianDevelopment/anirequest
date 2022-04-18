import * as aniAnime from './anilist/anime'
import * as aniCharacter from './anilist/chracter'
import * as aniManga from './anilist/manga'
import * as aniUser from './anilist/user'

import * as malAnime from './mal/anime'
import * as malCharacter from './mal/character'
import * as malManag from './mal/manga'

const anilist = {
  anime: aniAnime,
  character: aniCharacter,
  manga: aniManga,
  user: aniUser
}

const mal = {
  anime: malAnime,
  character: malCharacter,
  manga: malManag
}

export default { anilist, mal }
