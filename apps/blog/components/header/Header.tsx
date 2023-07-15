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
    <header className="w-screen flex sticky items-center justify-around px-80 gap-6 h-24">
      <div className="flex gap-6">
        <h2 className="contents my-auto">Kyun2da.dev</h2>
        <DarkModeButton />
      </div>
      <NavigationMenu className="flex items-center">
        <NavigationMenuList className="gap-6">
          {siteConfig.navItems.map(menu => {
            return (
              <NavigationMenuItem key={menu.label} className="list-none">
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
