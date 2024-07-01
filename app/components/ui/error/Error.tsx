import { ComponentProps } from 'react';

interface ErrorProps extends ComponentProps<'div'> {
  text: string;
  className?: string;
}

export default function Error({ text, className, ...rest }: ErrorProps) {
  return (
    <div
      className={`w-[75%] text-rose-500 p-4 rounded-2xl bg-[#FFE6E6] text-center my-0 mx-auto ${className}`}
      {...rest}
    >
      <p>{text}</p>
    </div>
  );
}
