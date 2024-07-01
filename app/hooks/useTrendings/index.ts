import useSWR from 'swr';
import { useSetRecoilState } from 'recoil';

import { MediaContent } from '@/interfaces';
import { trendingsState } from '@/state/atoms';
import { ContentType, TimeWindow } from '@/types';

export default function useTrendings(type: ContentType, window: TimeWindow) {
  const setTrendings = useSetRecoilState(trendingsState);
  const { error, isLoading } = useSWR(`/api/trendings/${type}/${window}`, getTrendings, {
    onSuccess: (data) => setTrendings(data)
  });

  return {
    error,
    isLoading,
  }
}

async function getTrendings(url: string) {
  const response = await fetch(url);
  const trendings: MediaContent = await response.json();

  return trendings;
}
