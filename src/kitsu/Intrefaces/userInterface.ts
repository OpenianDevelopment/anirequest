import { image, apiLinks } from './commonInterface'

export interface User {
    id: number
    type: string
    link: { self: string }
    attributes: {
        createdAt: string
        updatedAt: string
        name: string
        pastNames: []
        slug: string
        about: string
        location: string
        waifuOrHusbando: string
        followersCount: number
        followingCount: number
        lifeSpentOnAnime: number
        birthday: string
        gender: string
        commentsCount: number
        favoritesCount: number
        likesGivenCount: number
        reviewsCount: number
        likesReceivedCount: number
        postsCount: number
        ratingsCount: number
        mediaReactionsCount: number
        proExpiresAt: string
        title: string
        profileCompleted: boolean
        feedCompleted: boolean
        website: string
        proTier: string
        avatar: image
        coverImage: image
        status: string
        subscribedToNewsletter: boolean
        permissions: string
    }
    relationships: {
        waifu: apiLinks
        pinnedPost: apiLinks
        followers: apiLinks
        following: apiLinks
        blocks: apiLinks
        linkedAccounts: apiLinks
        profileapiLinks: apiLinks
        userRoles: apiLinks
        libraryEntries: apiLinks
        favorites: apiLinks
        reviews: apiLinks
        stats: apiLinks
        notificationSettings: apiLinks
        oneSignalPlayers: apiLinks
        categoryFavorites: apiLinks
        quotes: apiLinks
    }
}
