import { percentageFormatter } from '@/utils';
import { ComponentProps } from 'react';

interface CircularVoteBarProps extends ComponentProps<'div'> {
  vote: number;
}

const CircularVoteBar = ({
  vote,
  className,
  ...rest
}: CircularVoteBarProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (vote / 10) * circumference;
  const percentageVote = percentageFormatter(vote);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className='w-16 h-16 transform rotate-90'
        viewBox='0 0 120 120'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='text-gray-300'
          strokeWidth='10'
          stroke='currentColor'
          fill='transparent'
          r={radius}
          cx='60'
          cy='60'
        />
        <circle
          className={
            percentageVote >= '70%' ? 'text-green-500' : 'text-yellow-500'
          }
          strokeWidth='10'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r={radius}
          cx='60'
          cy='60'
        />
      </svg>
      <div className='absolute flex items-center justify-center w-32 h-32 text-xl font-bold'>
        {percentageVote}
      </div>
    </div>
  );
};

export default CircularVoteBar;
