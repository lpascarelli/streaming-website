'use client';

import PopularMovies from '@/components/home/popular/movies';
import Trending from '@/components/home/trendings';
import useMovies from '@/hooks/useMovies';
import useTrendings from '@/hooks/useTrendings';
import Error from '@/components/ui/error';
import Loading from '@/components/ui/loading/Loading';

export default function Home() {
  const { error: errorMovies, isLoading: isLoadingMovies } = useMovies();
  const { error: errorTrendings, isLoading: isLoadingTrendings } = useTrendings(
    'all',
    'day'
  );

  if (errorMovies || errorTrendings) {
    return (
      <Error text='Something went wrong while loading your content. Please try again later' />
    );
  }

  return isLoadingMovies || isLoadingTrendings ? (
    <div className='flex justify-center p-5'>
      <Loading />
    </div>
  ) : (
    <div className='container mx-auto p-5'>
      <Trending />
      <PopularMovies />
    </div>
  );
}
