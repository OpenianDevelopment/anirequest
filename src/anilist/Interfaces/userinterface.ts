export interface User {
  id: number;
  name: string ;
  createdAt: number;
  previousNames: {
    name: string;
    createdAt: number;
    updatedAt: number;
  }[];
  updatedAt: number;
  bannerImage: string ;
  avatar: {
    large: string ;
    medium: string ;
  };
  about: string ;
  statistics: {
    anime: { count: number; episodesWatched: number; minutesWatched: number };
    manga: { count: number; volumesRead: number; chaptersRead: number };
  };
  unreadNotificationCount: number ;
  siteUrl: string;
}
