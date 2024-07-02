import { MediaResults } from "@/types";

export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends Media {
  media_type: string;
}

export interface TVShow
extends Omit<Media, 'release_date' | 'original_title' | 'video' | 'title'> {
  first_air_date: string;
  media_type: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export interface MediaContent {
  page: number;
  results: MediaResults[];
  total_pages: number;
  total_results: number;
}
