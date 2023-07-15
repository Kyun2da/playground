'use client';

import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';

export function Category() {
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
        <NavbarItem>Features</NavbarItem>
        <NavbarItem isActive>Customers</NavbarItem>
        <NavbarItem>Integrations</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">Login</NavbarItem>
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
