'use client';

import { useRecoilValue } from 'recoil';

import useMovies from '@/hooks/useMovies';
import { moviesState } from '@/state/atoms';

export default function Trending() {
  const { error, isLoading } = useMovies();
  const movies = useRecoilValue(moviesState);

  console.log(error);
  console.log(isLoading);
  console.log(movies);

  return <div>Hello world</div>;
}
