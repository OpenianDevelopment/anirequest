/* eslint-disable no-unused-vars */
export interface title{
    romaji: string ;
    english: string ;
    userPreferred: string ;
    native: string ;
}
export interface coverImage {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
}
export interface startDate {
    year: number ;
    month: number ;
    day: number ;
};
export interface endDate {
    year: number ;
    month: number ;
    day: number ;
};
export enum season {
    WINTER = 'WINTER',
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    FALL = 'FALL'
}
