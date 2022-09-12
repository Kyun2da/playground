import { Container } from '@nextui-org/react';
import { ComponentProps } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props extends ComponentProps<typeof Container> {}

export function Layout({ children, ...props }: Props) {
  return (
    <Container display="flex" justify="center" css={{ maxWidth: 1024 }}>
      <Header align="center" justify="space-between" css={{ position: 'sticky', width: '100%' }} />
      <Container display="flex" alignItems="center" {...props}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}
