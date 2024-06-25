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
    <div className='flex flex-col mb-4'>
      <H1>{title}</H1>
      <div className='flex gap-[4rem] py-4 overflow-x-scroll'>{content}</div>
    </div>
  );
}
