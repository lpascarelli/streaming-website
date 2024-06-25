'use client';

import { useRecoilValue } from 'recoil';

import Movie from '@/components/popular/movie';
import ScrollablePanel from '@/components/ui/scrollablePanel';
import useMovies from '@/hooks/useMovies';
import { moviesState } from '@/state/atoms';

export default function Popular() {
  const { error, isLoading } = useMovies();
  const movies = useRecoilValue(moviesState);

  const moviesUI = movies.results.map((movie, idx) => (
    <Movie key={`${movie.original_title}-${idx}`} movie={movie} />
  ));

  return <ScrollablePanel title='Popular movies' content={moviesUI} />;
}
