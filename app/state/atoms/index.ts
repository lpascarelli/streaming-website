import { atom } from "recoil";

import { Movies } from "@/interfaces";

export const moviesState = atom<Movies>({
  key: 'moviesState',
  default: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  }
});
