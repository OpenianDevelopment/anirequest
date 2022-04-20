
/* eslint-disable camelcase */
export interface ratingFrequenies {
    '2': string
    '3': string
    '4': string
    '5': string
    '6': string
    '7': string
    '8': string
    '9': string
    '10': string
    '11': string
    '12': string
    '13': string
    '14': string
    '15': string
    '16': string
    '17': string
    '18': string
    '19': string
    '20': string
}

export interface titles {
    en?: string,
    en_jp?: string,
    en_us?: string,
    ja_jp?: string
}

export interface image {
    tiny?: string,
    large?: string,
    small?: string,
    medium?: string,
    original: string,
    meta: { dimensions: {} }
}

export interface apiLinks {
    links: {
        self: string
        related: string
    }
}

export interface mediaCharacters{
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: string
      updatedAt: string
      role: string
    },
    relationships: {
        media: apiLinks
        character: apiLinks
        voices: apiLinks
    }
}

export interface genres{
    id: string
    type: string
    links: { self: string },
    attributes: {
      createdAt: string
      updatedAt: string
      name: string
      slug: string
      description: string
    }
}

export interface mappings {
    id: string
    type: string
    links: { self: string },
    attributes: {
      createdAt: string
      updatedAt: string
      externalSite: string
      externalId: string
    },
    relationships: apiLinks
}

export interface MediaRelationship {
    id: string
    type: string
    links: { self: string }
    attributes: {
      createdAt: string
      updatedAt: string
      role: string
    },
    relationships: {
        source: apiLinks
        destination: apiLinks
    }
}

export interface MediaStaff {
    id: string
    type: string
    links: { self: string },
    attributes: {
        createdAt: string
        updatedAt: string
        role: string
    },
    relationships: {
        media:apiLinks
        person:apiLinks
    }
}
