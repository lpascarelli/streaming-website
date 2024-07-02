import { ReactNode } from 'react';

import H1 from '@/components/ui/h1';

interface ScrollablePanelProps {
  title: string;
  content: ReactNode;
}

export default function ScrollablePanel({
  content,
  title,
}: ScrollablePanelProps) {
  return (
    <div className='flex flex-col mb-16'>
      <H1>{title}</H1>
      <div className='flex gap-[4rem] pt-5 pb-8 scrollable-panel'>
        {content}
      </div>
    </div>
  );
}
