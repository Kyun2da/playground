import RSS from 'rss';
import fs from 'fs';
import { getAllPosts } from './api';
import { postCategory } from 'config/site';

export default async function generateRssFeeds() {
  const site_url = 'https://kyun2da.dev';

  const allPosts = await getAllPosts(postCategory, 'published');

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Kyun2da`,
  };

  const feed = new RSS(feedOptions);

  allPosts.map(post => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
