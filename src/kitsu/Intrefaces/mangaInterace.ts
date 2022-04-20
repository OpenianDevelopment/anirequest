/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

import { image, apiLinks, ratingFrequenies, titles } from './commonInterface'

export interface Manga {
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
        chapterCount: number
        volumeCount: number
        serialization: string
        mangaType: string
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
        chapters: apiLinks
        mangaCharacters: apiLinks
        mangaStaff: apiLinks
    }
}
