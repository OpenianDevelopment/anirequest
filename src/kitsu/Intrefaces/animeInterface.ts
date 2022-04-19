/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
export interface Anime {
    data:{
        id:number
        type:string
        link:{self:string}
        attributes:{
            createdAt: string
            updatedAt: string
            slug: string
            synopsis: string
            description: string
            coverImageTopOffset: number
            titles: {
                en: string,
                en_jp: string,
                en_us: string,
                ja_jp: string
            }
            canonicalTitle: string
            abbreviatedTitles:string[]
            averageRating: string
            ratingFrequenies:{
                '2':string
                '3':string
                '4':string
                '5':string
                '6':string
                '7':string
                '8':string
                '9':string
                '10':string
                '11':string
                '12':string
                '13':string
                '14':string
                '15':string
                '16':string
                '17':string
                '18':string
                '19':string
                '20':string
            }
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
            posterImage: {
                tiny: string,
                large: string,
                small: string,
                medium: string,
                original: string,
                meta: { dimensions: {} }
            }
            coverImage: {
                tiny: string,
                large: string,
                small: string,
                medium: string,
                original: string,
                meta: { dimensions: {} }
            }
            episodeCount: number
            episodeLength: number
            totalLength: number
            youtubeVideoId: string
            showType: string
            nsfw:boolean
        }
        relationships:{
            genres: { links: links}
            categories: {links: links}
            castings: {links: links}
            installments: {links: links}
            mappings: {links: links}
            reviews: {links: links}
            mediaRelationships: {links: links}
            characters: {links: links}
            staff:{links: links}
            productions:{links: links}
            quotes:{links: links}
            episodes:{links: links}
            streamingLinks:{links: links}
            animeProductions:{links: links}
            animeCharacters:{links: links}
            animeStaff:{links: links}
        }
    }
}

export interface links {
    self: string
    related: string
}
