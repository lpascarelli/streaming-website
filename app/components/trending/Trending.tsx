'use client';

import { useRecoilValue } from 'recoil';

import Movie from '@/components/trending/movie';
import useMovies from '@/hooks/useMovies';
import { moviesState } from '@/state/atoms';

export default function Trending() {
  const { error, isLoading } = useMovies();
  const movies = useRecoilValue(moviesState);

  const movieUI = movies.results.map((movie, idx) => (
    <Movie key={`${movie.original_title}-${idx}`} movie={movie} />
  ));

  return (
    <div className='flex flex-col'>
      <h1 className='text-[2rem] font-bold mb-4'>Trending</h1>
      <div className='flex gap-[4rem] p-4 overflow-x-scroll'>{movieUI}</div>
    </div>
  );
}
