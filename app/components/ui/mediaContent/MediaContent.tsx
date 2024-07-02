import Image from '@/components/ui/image';
import CircularVoteBar from '@/components/ui/mediaContent/circularVoteBar';
import { TMDB_BASE_IMAGE_URL, POSTER_SIZES } from '@/constants';
import { MediaResults } from '@/types';
import { formatDate } from '@/utils';

interface MediaContentProps {
  content: MediaResults;
}

export default function MediaContent({ content }: MediaContentProps) {
  const properties: { [key: string]: any } = {};

  if ('first_air_date' in content) {
    properties['first_air_date'] = content.first_air_date;
    properties['name'] = content.name;
  } else {
    properties['release_date'] = content.release_date;
    properties['title'] = content.title;
  }

  return (
    <div>
      <Image
        src={`${TMDB_BASE_IMAGE_URL}/${POSTER_SIZES.w342}/${content.poster_path}`}
        alt={properties['name'] ?? properties['title']}
        width={342}
        height={342}
      >
        <CircularVoteBar
          vote={content.vote_average}
          className='relative bottom-[1rem] right-[3rem]'
        />
      </Image>
      <p className='font-bold mb-2'>
        {properties['name'] ?? properties['title']}
      </p>
      <p className='text-gray-500'>
        {formatDate(properties['first_air_date'] ?? properties['release_date'])}
      </p>
    </div>
  );
}
