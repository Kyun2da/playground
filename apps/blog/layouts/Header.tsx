'use client';

import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import { DarkModeButton } from 'components/dark-mode-button/DarkModeButton';
import { useLayout } from 'hooks/useMedia';
import NextLink from 'next/link';
import { TITLE } from 'utils/constant';

import { Category } from './Category';

export function Header() {
  const layout = useLayout();

  return (
    <>
      <Button>asdsad</Button>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <NextLink href="/">
            <Link href="/" style={{ marginRight: '12px' }}>
              {layout === 'mobile' ? <p>{TITLE}</p> : <p>{TITLE}</p>}
            </Link>
          </NextLink>
          {/* {layout === 'mobile' ? null : <SnowFlakeButton />} */}
          <DarkModeButton />
        </NavbarBrand>
        {layout === 'mobile' ? null : <Category />}
      </Navbar>
    </>
  );
}
