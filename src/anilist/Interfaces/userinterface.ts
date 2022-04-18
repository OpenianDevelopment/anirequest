export interface User {
  id: number;
  name: string | null;
  createdAt: number;
  previousNames: {
    name: string;
    createdAt: number;
    updatedAt: number;
  }[];
  updatedAt: number;
  bannerImage: string | null;
  avatar: {
    large: string | null;
    medium: string | null;
  };
  about: string | null;
  statistics: {
    anime: { count: number; episodesWatched: number; minutesWatched: number };
    manga: { count: number; volumesRead: number; chaptersRead: number };
  };
  unreadNotificationCount: number | null;
  siteUrl: string;
}
