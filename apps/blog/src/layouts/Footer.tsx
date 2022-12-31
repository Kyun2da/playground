import { Container } from '@nextui-org/react';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Container> {}

export function Footer(props: Props) {
  return (
    <Container display="flex" justify="center" css={{ margin: '2rem 0' }} {...props}>
      All rights reserved © Kyun2da 2022
    </Container>
  );
}
