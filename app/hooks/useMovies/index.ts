import useSWR from "swr";
import { useSetRecoilState } from "recoil";

import { MediaContent } from "@/interfaces";
import { moviesState } from "@/state/atoms";

export default function useMovies() {
  const setMovies = useSetRecoilState(moviesState);
  const { error, isLoading } = useSWR(`/api/movies?page=1`, getMovies, {
    onSuccess: (data) => setMovies(data)
  });

  return {
    error,
    isLoading
  }

}

async function getMovies(url: string) {
  const response = await fetch(url);
  const movies: MediaContent = await response.json();

  return movies;
}