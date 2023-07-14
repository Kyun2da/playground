import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

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
      <Header />
      <div {...props}>{children}</div>
      <Footer />
    </div>
  );
}
