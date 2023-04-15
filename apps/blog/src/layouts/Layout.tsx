import { Container } from '@nextui-org/react';
import { NextSeo } from 'next-seo';
import { ComponentProps } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props extends ComponentProps<typeof Container> {
  title?: string;
}

export function Layout({ title, children, ...props }: Props) {
  return (
    <Container gap={0} css={{ maxWidth: '100%' }}>
      <NextSeo
        title={title}
        titleTemplate="%s | Kyun2da.dev"
        defaultTitle="Kyun2da.dev"
        description="Kyun2da's Dev Blog"
      />
      <Header />
      <Container justify="center" {...props}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}
