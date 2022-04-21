import { apiLinks, image, titles } from './commonInterface'

export interface character {
    id: string
  type: string
  links: { self: string },
  attributes: {
    createdAt: string
    updatedAt: string
    slug: string
    names: titles
    canonicalName: string
    otherNames: string[]
    name: string
    malId: number
    description: string
    image: image
  },
  relationships: {
    primaryMedia: apiLinks
    castings: apiLinks
    mediaCharacters: apiLinks
    quotes: apiLinks
  }
}
