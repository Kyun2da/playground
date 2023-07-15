'use client';

import { NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { useRouter } from 'next/navigation';

export function Category() {
  const router = useRouter();

  return (
    <NavbarContent>
      <NavbarItem isActive={router.asPath === '/'}>Home</NavbarItem>
      <NavbarItem isActive={router.asPath === '/tags'}>Tags</NavbarItem>
      <NavbarItem isActive={router.asPath === '/about'}>About</NavbarItem>
      <NavbarItem isActive={router.asPath === '/feedback'}>Feedback</NavbarItem>
    </NavbarContent>
  );
}
