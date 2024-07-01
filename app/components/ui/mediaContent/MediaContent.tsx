import Image from '@/components/ui/image';
import CircularVoteBar from '@/components/ui/mediaContent/circularVoteBar';
import { TMDB_BASE_IMAGE_URL, POSTER_SIZES } from '@/constants';
import { Media } from '@/interfaces';
import { formatDate } from '@/utils';

interface MediaContentProps {
  content: Media;
}

export default function MediaContent({ content }: MediaContentProps) {
  return (
    <div>
      <Image
        src={`${TMDB_BASE_IMAGE_URL}/${POSTER_SIZES.w342}/${content.poster_path}`}
        alt={content.original_title}
        width={342}
        height={342}
      >
        <CircularVoteBar
          vote={content.vote_average}
          className='relative bottom-[1rem] right-[3rem]'
        />
      </Image>
      <p className='font-bold mb-2'>{content.title}</p>
      <p className='text-gray-500'>{formatDate(content.release_date)}</p>
    </div>
  );
}
