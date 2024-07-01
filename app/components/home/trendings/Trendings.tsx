import { useRecoilValue } from 'recoil';

import H1 from '@/components/ui/h1';
import MediaContent from '@/components/ui/mediaContent';
import ScrollablePanel from '@/components/ui/scrollablePanel';
import { MediaContent as IMediaContent } from '@/interfaces';
import { trendingsState } from '@/state/atoms';

interface TrendingsContentProps {
  trendings: IMediaContent;
}

export default function Trendings() {
  const trendings = useRecoilValue(trendingsState);

  return (
    <ScrollablePanel
      title='Trending'
      content={<TrendingsContent trendings={trendings} />}
    />
  );
}

const TrendingsContent = ({ trendings }: TrendingsContentProps) =>
  trendings.results.map((trending, idx) => (
    <MediaContent
      key={`${trending.original_title}-${idx}`}
      content={trending}
    />
  ));
