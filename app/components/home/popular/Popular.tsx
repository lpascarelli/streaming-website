import { useRecoilValue } from 'recoil';

import Movie from '@/components/home/popular/movie';
import ScrollablePanel from '@/components/ui/scrollablePanel';
import { Movies as IMovies } from '@/interfaces';
import { moviesState } from '@/state/atoms';

interface MoviesProps {
  movies: IMovies;
}

export default function Popular() {
  const movies = useRecoilValue(moviesState);

  return (
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
