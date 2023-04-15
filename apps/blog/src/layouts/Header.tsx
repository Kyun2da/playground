import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { SnowFlakeButton } from '@components/snow-flake-button/SnowFlakeButton';
import { Link, Navbar, Text } from '@nextui-org/react';
import NextLink from 'next/link';
import { useLayout } from 'src/hooks/useMedia';
import { TITLE } from 'src/utils/constant';

import { Category } from './Category';
import { HamburgerMenu } from './components/header/HambugerMenu';

export function Header() {
  const layout = useLayout();

  return (
    <Navbar variant="sticky" isBordered shouldHideOnScroll>
      <Navbar.Brand>
        <NextLink href="/">
          <Link href="/" color="text" style={{ marginRight: '12px' }}>
            {layout === 'mobile' ? <Text h3>{TITLE}</Text> : <Text h2>{TITLE}</Text>}
          </Link>
        </NextLink>
        {layout === 'mobile' ? null : <SnowFlakeButton />}
        <DarkModeButton css={{ marginTop: '4px' }} />
      </Navbar.Brand>
      {layout === 'mobile' ? <HamburgerMenu /> : <Category />}
    </Navbar>
  );
}
