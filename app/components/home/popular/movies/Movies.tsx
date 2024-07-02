import { useRecoilValue } from 'recoil';

import MediaContent from '@/components/ui/mediaContent';
import ScrollablePanel from '@/components/ui/scrollablePanel';
import { MediaContent as IMediaContent } from '@/interfaces';
import { moviesState } from '@/state/atoms';

interface MoviesProps {
  movies: IMediaContent;
}

export default function PopularMovies() {
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
    <MediaContent key={`${movie.id}-${idx}`} content={movie} />
  ));
