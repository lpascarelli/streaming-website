'use client';

import Popular from '@/components/home/popular';
import Trending from '@/components/home/trending';
import useMovies from '@/hooks/useMovies';
import Error from '@/components/ui/error';
import Loading from '@/components/ui/loading/Loading';

export default function Home() {
  const { error, isLoading } = useMovies();

  if (error) {
    return (
      <Error text='Something went wrong while loading your content. Please try again later' />
    );
  }

  return isLoading ? (
    <div className='flex justify-center p-5'>
      <Loading />
    </div>
  ) : (
    <div className='container mx-auto p-5'>
      <Trending />
      <Popular />
    </div>
  );
}
