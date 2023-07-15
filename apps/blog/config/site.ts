export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Kyun2da.dev',
  description: '허균의 블로그',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'tags',
      href: '/tags',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'feedback',
      href: '/feedback',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui-docs-v2.vercel.app',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
