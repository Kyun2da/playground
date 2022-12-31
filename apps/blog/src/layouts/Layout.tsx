import { Container } from '@nextui-org/react';
import { ComponentProps } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props extends ComponentProps<typeof Container> {}

export function Layout({ children, ...props }: Props) {
  return (
    <Container display="flex" justify="center" css={{ maxWidth: 1024, minHeight: '100vh' }}>
      <Header align="center" css={{ position: 'sticky', width: '100%', height: 'fit-content' }} />
      <Container display="flex" alignItems="center" {...props}>
        {children}
      </Container>
      <Footer css={{ height: 'fit-content', marginTop: 'auto', marginBottom: 24 }} />
    </Container>
  );
}
