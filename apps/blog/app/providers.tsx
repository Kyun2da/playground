// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  console.log('hihi2');

  return <NextUIProvider>{children}</NextUIProvider>;
}
