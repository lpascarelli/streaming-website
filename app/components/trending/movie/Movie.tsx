import Image from '@/components/ui/image';
import CircularVoteBar from '@/components/trending/movie/circularVoteBar';
import { TMDB_BASE_IMAGE_URL } from '@/constants';
import { Movie as IMovie } from '@/interfaces';
import { formatDate } from '@/utils';

interface MovieProps {
  movie: IMovie;
}

export default function Movie({ movie }: MovieProps) {
  return (
    <div>
      <Image
        src={`${TMDB_BASE_IMAGE_URL}/w342/${movie.poster_path}`}
        alt={movie.original_title}
        width={342}
        height={342}
      >
        <CircularVoteBar
          vote={movie.vote_average}
          className='relative bottom-[1rem] right-[3rem]'
        />
      </Image>
      <p className='font-bold mb-2'>{movie.title}</p>
      <p>{formatDate(movie.release_date)}</p>
    </div>
  );
}
