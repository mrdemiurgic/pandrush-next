'use client';

import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

const initialValue = {
  width: 0,
  height: 0,
};

const useWindowDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>(initialValue);

  useEffect(() => {
    const handler = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handler);
    handler();

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return dimensions;
};

export default useWindowDimensions;
