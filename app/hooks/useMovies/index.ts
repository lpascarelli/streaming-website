import useSWR from "swr";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { Movies } from "@/interfaces";
import { moviesState, pageState } from "@/state/atoms";

export default function useMovies() {
  const page = useRecoilValue(pageState);
  const setMovies = useSetRecoilState(moviesState);
  const { error, isLoading } = useSWR(`/api/movies?page=${page}`, getMovies, {
    onSuccess: (data) => setMovies(data)
  });

  return {
    error,
    isLoading
  }

}

async function getMovies(url: string) {
  const response = await fetch(url);
  const movies: Movies = await response.json();

  return movies;
}