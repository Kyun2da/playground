import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkMath from 'remark-math';

export default defineConfig({
  adapter: vercel(),
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeKatex,
      [rehypePrismPlus, { ignoreMissing: true }]
    ],
    remarkPlugins: [remarkMath],
  },
  site: 'https://kyun2da.dev'
});
