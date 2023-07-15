import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { siteConfig } from 'config/site';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="flex sticky items-center justify-between px-24 gap-6 h-16">
      <div className="flex gap-6">
        <h1 className="text-4xl">Kyun2da.dev</h1>
        <DarkModeButton />
      </div>
      <NavigationMenu className="flex items-center">
        <NavigationMenuList className="gap-6">
          {siteConfig.navItems.map(menu => {
            return (
              <NavigationMenuItem key={menu.label}>
                <Link href={menu.href} legacyBehavior passHref>
                  <NavigationMenuLink className="text-2xl">
                    <Button>{menu.label}</Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
