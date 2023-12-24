import { getAllPosts } from '@utils/api';
import { postCategory } from 'config/site';
import RSS from 'rss';

const site_url = 'https://kyun2da.dev';

export async function GET() {
  const allPosts = await getAllPosts(postCategory, 'published');

  const feedOptions = {
    title: 'Kyun2da Blog',
    description: '허균의 블로그',
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
      url: `${site_url}/posts/published/${post.slug}`,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
