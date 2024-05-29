declare module 'react-scroll-parallax' {
  import { FC, ReactNode } from 'react';

  interface ParallaxProps {
    className?: string;
    y?: [number, number];
    tagOuter?: string;
    scale?: (string | number)[];
    children?: ReactNode; // Add children prop
    layers?: { image: string; speed: number }[];
  }

  export const ParallaxProvider: FC<{ children?: ReactNode }>;
  export const Parallax: FC<ParallaxProps>;
  export const ParallaxBanner: FC<ParallaxProps>;
}
