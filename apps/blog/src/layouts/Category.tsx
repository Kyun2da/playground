'use client';

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function Category() {
  const router = useRouter();

  return (
    // <NavbarContent>
    //   <NavbarItem isActive={router.asPath === '/'}>Home</NavbarItem>
    //   <NavbarItem isActive={router.asPath === '/tags'}>Tags</NavbarItem>
    //   <NavbarItem isActive={router.asPath === '/about'}>About</NavbarItem>
    //   <NavbarItem isActive={router.asPath === '/feedback'}>Feedback</NavbarItem>
    // </NavbarContent>
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem color="foreground" href="#">
          Features
        </NavbarItem>
        <NavbarItem isActive href="#">
          Customers
        </NavbarItem>
        <NavbarItem color="foreground" href="#">
          Integrations
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex" href="#">
          Login
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
