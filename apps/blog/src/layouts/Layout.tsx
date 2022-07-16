import { Container } from '@nextui-org/react';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Container display="flex" justify="center" css={{ maxWidth: 1024 }}>
      <Header align="center" justify="space-between" css={{ position: 'sticky', width: '100%' }} />
      <Container display="flex" justify="center">
        {children}
      </Container>
      <Footer />
    </Container>
  );
}
