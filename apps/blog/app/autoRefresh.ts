// @see https://github.com/gaearon/overreacted.io/pull/797

'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function AutoRefresh({ children }: { children: ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    const ws = new WebSocket('ws://localhost:3001');
    ws.onmessage = event => {
      if (event.data === 'refresh') {
        router.refresh();
      }
    };
    return () => {
      ws.close();
    };
  }, [router]);

  return children;
}

export default AutoRefresh;
