'use client';

import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

import { Navbar } from './Navbar';

interface Props {
  title?: string;
  children: ReactNode;
}

export function Layout({ title, children, ...props }: Props) {
  return (
    <div>
      <NextSeo
        title={title}
        titleTemplate="%s | Kyun2da.dev"
        defaultTitle="Kyun2da.dev"
        description="Kyun2da's Dev Blog"
      />
      <Navbar />
      {/* <div {...props}>{children}</div>
      <Footer /> */}
    </div>
  );
}
