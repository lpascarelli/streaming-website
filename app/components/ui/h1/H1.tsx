import { ComponentProps, ReactNode } from 'react';

interface H1Props extends ComponentProps<'h1'> {
  children: ReactNode;
}

export default function H1({ children, ...rest }: H1Props) {
  return (
    <h1 className='text-[2rem] font-bold mb-4' {...rest}>
      {children}
    </h1>
  );
}
