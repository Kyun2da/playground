/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kyun2da.dev',
  changefreq: 'daily',
  generateRobotsTxt: true,
  exclude: ['*draft'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
