import { Container } from '@nextui-org/react';
import { NextSeo } from 'next-seo';
import { ComponentProps } from 'react';

import { Header } from './Header';

interface Props extends ComponentProps<typeof Container> {
  title?: string;
}

export function Layout({ title, children, ...props }: Props) {
  return (
    <Container gap={0} fluid>
      <NextSeo
        title={title}
        titleTemplate="%s | Kyun2da.dev"
        defaultTitle="Kyun2da.dev"
        description="Kyun2da's Dev Blog"
      />
      <Header />
      <Container display="flex" css={{ flex: 1 }} {...props}>
        {children}
      </Container>
      {/* <Footer css={{ minHeight: 50, marginTop: 24 }} /> */}
    </Container>
  );
}
