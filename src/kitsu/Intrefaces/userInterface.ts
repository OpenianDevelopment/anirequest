import { title } from '../../anilist/Interfaces/commonInterface'
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

export interface followers {
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: string
      updatedAt: string
    },
    relationships: { follower: apiLinks, followed: apiLinks }
}

export interface favorites {
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: string
      updatedAt: string
      favRank: number
    }
    relationships: { user: apiLinks, item: apiLinks }
}

export interface following {
    id: string
    type: string
    links: { self: string },
    attributes: {
      createdAt: string
      updatedAt: string
    },
    relationships: { follower: apiLinks, followed: apiLinks }
}

export interface libraryEntries {
    id: string
    type: string
    links: { self: string },
    attributes: {
        createdAt: string
        updatedAt: string
        status: string
        progress: number
        volumesOwned: number
        reconsuming: boolean
        reconsumeCount: number
        notes: string
        private: boolean
        reactionSkipped: string
        progressedAt: string
        startedAt: string
        finishedAt: string
        rating: string
        ratingTwenty: boolean
    },
    relationships: {
        user: apiLinks
        anime: apiLinks
        manga: apiLinks
        drama: apiLinks
        review: apiLinks
        mediaReaction: apiLinks
        media: apiLinks
        unit: apiLinks
        nextUnit: apiLinks
    }
}

export interface linkedAccounts {
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: boolean
      updatedAt: boolean
      url: string
    },
    relationships: { user: apiLinks, profileLinkSite: apiLinks }
}

export interface stats {
    id: string
    type: string
    links: { self: string }
    attributes: {
        createdAt: string
        updatedAt: string
        kind: string
        statsData: {}
  },
  relationships: { user: { links: apiLinks } }
}

export interface waifu {
    id: string
    type: string
    links: { self: string }
    attributes: {
        createdAt: string
        updatedAt: string
        slug: string
        names: title
        canonicalName: string
        otherNames: string[]
        name: string
        malId: number
        description: string
        image: image
    }
    relationships: {
        primaryMedia: apiLinks
        castings: apiLinks
        mediaCharacters: apiLinks
        quotes: apiLinks
    }
}
