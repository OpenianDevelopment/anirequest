# AniRequest

<a href="https://www.npmjs.com/package/@openian-development/anirequest"><img src="https://img.shields.io/npm/dt/@openian-development/anirequest?label=Downloads&logo=NPM" alt="Total Downloads (NPM Link)" /></a> <a href="https://www.npmjs.com/package/@openian-development/anirequest"><img src="https://img.shields.io/npm/dt/@openian-development/anirequest?label=Monthly&logo=NPM" alt="Total Downloads (NPM Link)" /></a> <a href="https://www.patreon.com/rohank05"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a> <a href="https://menhera-chan.in/support"><img src="https://img.shields.io/discord/735899211677041099?color=5865F2&logo=discord&logoColor=white" alt="Discord server"></a> <a href="https://github.com/OpenianDevelopment/anirequest/blob/main/LICENSE" ><img src="https://img.shields.io/github/license/OpenianDevelopment/anirequest"></a>

Multiple anime tracker api interface

## Documentation

Read our [docs here](https://openiandevelopment.github.io/anirequest/index.html)
 
## Additional Info

Any issues report [in our github](https://github.com/OpenianDevelopment/anirequest/issues)

## Getting started

` npm i @openian-development/anirequest`
### JavaScript

```js
const anirequest = require('@openian-development/anirequest')

run()

async function run(){
    // anilist
    console.log(await anirequest.anilist.anime.getByID(1))
    // my anime list
    console.log(await anirequest.mal.anime.getById(1))
    // kitsu
    console.log(await anirequest.kitsu.anime.getById(1))
}
```

### TypeScript

```ts
import anirequest from '@openian-development/anirequest'

run()

async function run() {
  // anilist
  console.log(await anirequest.anilist.anime.getByID(1))
  // my anime list
  console.log(await anirequest.mal.anime.getById(1))
  // kitsu
  console.log(await anirequest.kitsu.anime.getById(1))
}
```
## Results

### Anilist
```
{
  id: 1,
  type: 'ANIME',
  title: {
    romaji: 'Cowboy Bebop',
    english: 'Cowboy Bebop',
    native: 'カウボーイビバップ'
  },
  description: 'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\n' +
    'While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
  coverImage: {
    extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
    large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
    medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png'
  },
  startDate: { year: 1998, month: 4, day: 3 },
  endDate: { year: 1999, month: 4, day: 24 },
  season: 'SPRING',
  seasonYear: 1998,
  nextAiringEpisode: null,
  countryOfOrigin: 'JP',
  trailer: null,
  genres: [ 'Action', 'Adventure', 'Drama', 'Sci-Fi' ],
  format: 'TV',
  synonyms: [ '카우보이 비밥', 'קאובוי ביבופ', 'คาวบอย บีบ๊อป' ],
  studios: { edges: [ [Object], [Object], [Object] ] },
  status: 'FINISHED',
  popularity: 251743,
  episodes: 26,
  trending: 19,
  duration: 24,
  isAdult: false,
  siteUrl: 'https://anilist.co/anime/1',
  averageScore: 86,
  source: 'ORIGINAL'
}
```
### Mal
```
{
  data: {
    mal_id: 1,
    url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
    images: { jpg: [Object], webp: [Object] },
    trailer: {
      youtube_id: 'qig4KOK2R2g',
      url: 'https://www.youtube.com/watch?v=qig4KOK2R2g',
      embed_url: 'https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1',
      images: [Object]
    },
    title: 'Cowboy Bebop',
    title_english: 'Cowboy Bebop',
    title_japanese: 'カウボーイビバップ',
    title_synonyms: [],
    type: 'TV',
    source: 'Original',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1998-04-03T00:00:00+00:00',
      to: '1999-04-24T00:00:00+00:00',
      prop: [Object],
      string: 'Apr 3, 1998 to Apr 24, 1999'
    },
    duration: '24 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 8.76,
    scored_by: 815972,
    rank: 36,
    popularity: 42,
    members: 1587681,
    favorites: 70340,
    synopsis: "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
    background: `When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.`,
    season: 'spring',
    year: 1998,
    broadcast: {
      day: 'Saturdays',
      time: '01:00',
      timezone: 'Asia/Tokyo',
      string: 'Saturdays at 01:00 (JST)'
    },
    producers: [ 
      {
        mal_id: 23,
        type: 'anime',
        name: 'Bandai Visual',
        url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
      } 
    ],
    licensors: [ 
      {
        mal_id: 102,
        type: 'anime',
        name: 'Funimation',
        url: 'https://myanimelist.net/anime/producer/102/Funimation'
      },
      {
        mal_id: 233,
        type: 'anime',
        name: 'Bandai Entertainment',
        url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment'
      }  
    ],
    studios: [ 
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise'
      } 
    ],
    genres: [ 
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action'
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi'
      }
    ],
    explicit_genres: [],
    themes: [ 
      {
        mal_id: 50,
        type: 'anime',
        name: 'Adult Cast',
        url: 'https://myanimelist.net/anime/genre/50/Adult_Cast'
      },
      {
        mal_id: 29,
        type: 'anime',
        name: 'Space',
        url: 'https://myanimelist.net/anime/genre/29/Space'
      }
    ],
    demographics: []
  }
}
```
### Kitsu

```
{
  id: '1',
  type: 'anime',
  links: { self: 'https://kitsu.io/api/edge/anime/1' },
  attributes: {
    createdAt: '2013-02-20T16:00:13.609Z',
    updatedAt: '2022-04-20T00:00:06.938Z',
    slug: 'cowboy-bebop',
    synopsis: 'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.\n' +
      "Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \n" +
      'Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n' +
      '\n' +
      '(Source: MAL Rewrite)',
    description: 'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.\n' +
      "Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \n" +
      'Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n' +
      '\n' +
      '(Source: MAL Rewrite)',
    coverImageTopOffset: 400,
    titles: { en: 'Cowboy Bebop', en_jp: 'Cowboy Bebop', ja_jp: 'カウボーイビバップ' },
    canonicalTitle: 'Cowboy Bebop',
    abbreviatedTitles: [ 'COWBOY BEBOP' ],
    averageRating: '82.09',
    ratingFrequencies: {
      '2': '4344',
      '3': '61',
      '4': '430',
      '5': '36',
      '6': '197',
      '7': '39',
      '8': '4079',
      '9': '52',
      '10': '846',
      '11': '77',
      '12': '2492',
      '13': '158',
      '14': '8615',
      '15': '423',
      '16': '8927',
      '17': '882',
      '18': '10933',
      '19': '805',
      '20': '36529'
    },
    userCount: 121662,
    favoritesCount: 4580,
    startDate: '1998-04-03',
    endDate: '1999-04-24',
    nextRelease: null,
    popularityRank: 31,
    ratingRank: 101,
    ageRating: 'R',
    ageRatingGuide: '17+ (violence & profanity)',
    subtype: 'TV',
    status: 'finished',
    tba: null,
    posterImage: {
      tiny: 'https://media.kitsu.io/anime/poster_images/1/tiny.jpg',
      large: 'https://media.kitsu.io/anime/poster_images/1/large.jpg',
      small: 'https://media.kitsu.io/anime/poster_images/1/small.jpg',
      medium: 'https://media.kitsu.io/anime/poster_images/1/medium.jpg',
      original: 'https://media.kitsu.io/anime/poster_images/1/original.jpg',
      meta: [Object]
    },
    coverImage: {
      tiny: 'https://media.kitsu.io/anime/1/cover_image/tiny-1f92cfe65c1b31d8b47e36f025d32b35.jpeg',
      large: 'https://media.kitsu.io/anime/1/cover_image/large-88da0208ac7fdd1a978de8b539008bd8.jpeg',
      small: 'https://media.kitsu.io/anime/1/cover_image/small-33ff2ab0f599bc15ed73856ecd13fe71.jpeg',
      original: 'https://media.kitsu.io/anime/1/cover_image/fb57e5f25616633a41f0f5f1ded938ee.jpeg',
      meta: [Object]
    },
    episodeCount: 26,
    episodeLength: 25,
    totalLength: 626,
    youtubeVideoId: 'qig4KOK2R2g',
    showType: 'TV',
    nsfw: false
  },
  relationships: {
    genres: { links: [Object] },
    categories: { links: [Object] },
    castings: { links: [Object] },
    installments: { links: [Object] },
    mappings: { links: [Object] },
    reviews: { links: [Object] },
    mediaRelationships: { links: [Object] },
    characters: { links: [Object] },
    staff: { links: [Object] },
    productions: { links: [Object] },
    quotes: { links: [Object] },
    episodes: { links: [Object] },
    streamingLinks: { links: [Object] },
    animeProductions: { links: [Object] },
    animeCharacters: { links: [Object] },
    animeStaff: { links: [Object] }
  }
}
```