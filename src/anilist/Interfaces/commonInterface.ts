/* eslint-disable no-unused-vars */
export interface title{
    romaji: string | null;
    english: string | null;
    userPreferred: string | null;
    native: string | null;
}
export interface coverImage {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
}
export interface startDate {
    year: number | null;
    month: number | null;
    day: number | null;
};
export interface endDate {
    year: number | null;
    month: number | null;
    day: number | null;
};
export enum season {
    WINTER = 'WINTER',
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    FALL = 'FALL'
}
