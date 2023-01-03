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
    <Container display="flex" justify="center" css={{ maxWidth: 1024, minHeight: '100vh' }}>
      <NextSeo
        title={title}
        titleTemplate="%s | Kyun2da.dev"
        defaultTitle="Kyun2da.dev"
        description="Kyun2da's Dev Blog"
      />
      <Header align="center" css={{ position: 'sticky', width: '100%', height: 'fit-content' }} />
      <Container display="flex" alignItems="center" {...props}>
        {children}
      </Container>
      <Footer css={{ height: 'fit-content', marginTop: 120, marginBottom: 24 }} />
    </Container>
  );
}
