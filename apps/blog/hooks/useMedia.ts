import { useEffect, useState } from 'react';

import { useWindowSize } from './useWindowSize';

export function useLayout() {
  const [layout, setLayout] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize) {
      if (windowSize.width < 768) {
        setLayout('mobile');
      } else if (windowSize.width < 1024) {
        setLayout('tablet');
      } else {
        setLayout('desktop');
      }
    }
  }, [windowSize]);

  return layout;
}
