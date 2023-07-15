import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/navigation-menu/NavigationMenu';
import { siteConfig } from 'config/site';
import Link from 'next/link';

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.navItems.map(menu => {
          return (
            <NavigationMenuItem key={menu.label}>
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
