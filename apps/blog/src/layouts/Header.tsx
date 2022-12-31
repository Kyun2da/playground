import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { Container, Link, Row, RowProps, Spacer } from '@nextui-org/react';
import NextLink from 'next/link';
import { TITLE } from 'src/utils/constant';

import { Category } from './Category';

interface Props extends RowProps {}

export function Header(props: Props) {
  return (
    <Row as="header" justify="space-between" {...props}>
      <NextLink href="/">
        <Link href="/" color="text">
          <h1>{TITLE}</h1>
        </Link>
      </NextLink>
      <Container display="flex" justify="flex-end">
        <DarkModeButton css={{ marginTop: '4px' }} />
        <Spacer />
        <Category />
      </Container>
    </Row>
  );
}
