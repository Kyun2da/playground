'use client';

import { Header } from '@components/header/Header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-screen">
      <Header />
      {children}
    </section>
  );
}
