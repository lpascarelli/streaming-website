'use client';

import { useRecoilValue } from 'recoil';

import Movie from '@/components/popular/movie';
import Error from '@/components/ui/error';
import Loading from '@/components/ui/loading';
import ScrollablePanel from '@/components/ui/scrollablePanel';
import useMovies from '@/hooks/useMovies';
import { Movies as IMovies } from '@/interfaces';
import { moviesState } from '@/state/atoms';

interface MoviesProps {
  movies: IMovies;
}

export default function Popular() {
  const { error, isLoading } = useMovies();
  const movies = useRecoilValue(moviesState);

  if (error) {
    return (
      <Error text='Something went wrong while loading your content. Please try again later' />
    );
  }

  return isLoading ? (
    <div className='flex justify-center'>
      <Loading />
    </div>
  ) : (
    <ScrollablePanel
      title='Popular movies'
      content={<Movies movies={movies} />}
    />
  );
}

const Movies = ({ movies }: MoviesProps) =>
  movies.results.map((movie, idx) => (
    <Movie key={`${movie.original_title}-${idx}`} movie={movie} />
  ));
