'use client';

import { useRecoilValue } from 'recoil';

import Movie from '@/components/popular/movie';
import useMovies from '@/hooks/useMovies';
import { moviesState } from '@/state/atoms';

export default function Popular() {
  const { error, isLoading } = useMovies();
  const movies = useRecoilValue(moviesState);

  const movieUI = movies.results.map((movie, idx) => (
    <Movie key={`${movie.original_title}-${idx}`} movie={movie} />
  ));

  return (
    <div className='flex flex-col mb-4'>
      <h1 className='text-[2rem] font-bold mb-4'>Popular Movies</h1>
      <div className='flex gap-[4rem] py-4 overflow-x-scroll'>{movieUI}</div>
    </div>
  );
}
