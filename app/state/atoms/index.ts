import { atom } from "recoil";

import { MediaContent } from "@/interfaces";

export const moviesState = atom<MediaContent>({
  key: 'moviesState',
  default: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  }
});

export const trendingsState = atom<MediaContent>({
  key: 'trendingsState',
  default: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  },
});