import { Media, Movie, TVShow } from "@/interfaces";

export type TimeWindow = 'day' | 'week';
export type ContentType = 'all' | 'movie' | 'tv' | 'people';

export type MediaResults = Media | Movie | TVShow