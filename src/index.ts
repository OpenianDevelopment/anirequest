// Anilist
import * as aniAnime from './anilist/anime'
import * as aniCharacter from './anilist/chracter'
import * as aniManga from './anilist/manga'
import * as aniUser from './anilist/user'
// My Anime List
import * as malAnime from './mal/anime'
import * as malCharacter from './mal/character'
import * as malManga from './mal/manga'
// Kitsu
import * as kitAnime from './kitsu/anime'
import * as kitManga from './kitsu/manga'
import * as kitUser from './kitsu/user'

const anilist = {
  anime: aniAnime,
  character: aniCharacter,
  manga: aniManga,
  user: aniUser
}

const mal = {
  anime: malAnime,
  character: malCharacter,
  manga: malManga
}

const kitsu = {
  anime: kitAnime,
  user: kitUser,
  manga: kitManga
}

export default { anilist, mal, kitsu }
