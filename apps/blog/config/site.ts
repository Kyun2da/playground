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
  ],
  links: {
    github: 'https://github.com/kyun2da',
    twitter: 'https://twitter.com/kyun2da',
  },
};

export const postCategory = [
  'title',
  'date',
  'slug',
  'draft',
  'categories',
  'time',
  'author',
  'coverImage',
  'excerpt',
];
