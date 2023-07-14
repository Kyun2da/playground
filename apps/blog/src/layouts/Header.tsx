import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { SnowFlakeButton } from '@components/snow-flake-button/SnowFlakeButton';
import { Link, Navbar, NavbarBrand } from '@nextui-org/react';
import NextLink from 'next/link';
import { useLayout } from 'src/hooks/useMedia';
import { TITLE } from 'src/utils/constant';

import { Category } from './Category';
// import { HamburgerMenu } from './components/header/HambugerMenu';

export function Header() {
  const layout = useLayout();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <NextLink href="/">
          <Link href="/" style={{ marginRight: '12px' }}>
            {layout === 'mobile' ? <p>{TITLE}</p> : <p>{TITLE}</p>}
          </Link>
        </NextLink>
        {layout === 'mobile' ? null : <SnowFlakeButton />}
        <DarkModeButton />
      </NavbarBrand>
      {layout === 'mobile' ? null : <Category />}
    </Navbar>
  );
}
