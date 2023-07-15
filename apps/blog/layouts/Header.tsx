'use client';

import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';

export function Header() {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <Navbar position="static">
          <NavbarBrand>
            <p className="font-bold text-inherit">Kyun2da.dev</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem as={Link} color="foreground" href="#">
              Features
            </NavbarItem>
            <NavbarItem isActive as={Link} href="#">
              Customers
            </NavbarItem>
            <NavbarItem as={Link} color="foreground" href="#">
              Integrations
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem as={Link} className="hidden lg:flex" href="#">
              Login
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        {/* {layout === 'mobile' ? null : <SnowFlakeButton />} */}
        {/* <DarkModeButton /> */}
        {/* {layout === 'mobile' ? null : <Category />} */}
      </Navbar>
    </>
  );
}
