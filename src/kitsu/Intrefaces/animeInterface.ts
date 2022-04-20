/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

import { image, apiLinks, ratingFrequenies, titles } from './commonInterface'

export interface Anime {
    id: number
    type: string
    link: {self: string}
    attributes: {
        createdAt: string
        updatedAt: string
        slug: string
        synopsis: string
        description: string
        coverImageTopOffset: number
        titles: titles
        canonicalTitle: string
        abbreviatedTitles: string[]
        averageRating: string
        ratingFrequenies: ratingFrequenies
        userCount: number
        favoritesCount: number
        startDate: string
        endDate: string
        nextRelease: string
        popularityRank: number
        ratingRank: number
        ageRating: string
        ageRatingGuide: string
        subtype: string
        status: string
        tba: string
        posterImage: image
        coverImage: image
        episodeCount: number
        episodeLength: number
        totalLength: number
        youtubeVideoId: string
        showType: string
        nsfw: boolean
    }
    relationships: {
        genres: apiLinks
        categories: apiLinks
        castings: apiLinks
        installments: apiLinks
        mappings: apiLinks
        reviews: apiLinks
        mediaRelationships: apiLinks
        characters: apiLinks
        staff: apiLinks
        productions: apiLinks
        quotes: apiLinks
        episodes: apiLinks
        streamingapiLinks: apiLinks
        animeProductions: apiLinks
        animeCharacters: apiLinks
        animeStaff: apiLinks
    }
}

export interface animeEpisode{
    id: string
    type: string
    links: { self: string }
    attributes: {
        createdAt: string
        updatedAt: string
        synopsis: string
        description: string
        titles: titles
        canonicalTitle: string
        seasonNumber: number
        number: number
        relativeNumber: boolean
        airdate: string
        length: number
        thumbnail: image
    },
    relationships: {
        media: apiLinks
        videos: apiLinks
    }
}

export interface stramingLinks {
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: string
      updatedAt: string
      url: string
      subs: string[]
      dubs: string[]
    },
    relationships: {
        streamer: apiLinks
        media: apiLinks
    }
}
