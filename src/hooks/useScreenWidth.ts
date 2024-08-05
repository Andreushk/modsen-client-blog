'use client';

import { useEffect, useState } from 'react';

function useScreenWidth(minWidth: number): boolean {
  const queryString: string = `(min-width: ${minWidth}px)`;
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(queryString);
      const listener = (event: MediaQueryListEvent) => setIsMatch(event.matches);

      setIsMatch(mediaQuery.matches);
      mediaQuery.addEventListener('change', listener);

      return () => {
        mediaQuery.removeEventListener('change', listener);
      };
    }
  }, [queryString]);

  return isMatch;
}

export default useScreenWidth;
