'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  children?: ReactNode;
}

const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  children,
}: AnimatedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadingClasses =
    'transition-opacity duration-500 ease-in-out opacity-0';
  const loadedClasses =
    'transition-opacity duration-500 ease-in-out opacity-100';

  return (
    <div className={`w-40 ${isLoading ? loadingClasses : loadedClasses}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
      />
      {children}
    </div>
  );
};

export default AnimatedImage;
