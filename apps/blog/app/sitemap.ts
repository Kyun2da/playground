import { getAllPosts } from '@utils/api';
import { postCategory } from 'config/site';

export default async function sitemap() {
  const posts = await getAllPosts(postCategory, 'published');
  const blogs = posts.map(post => ({
    url: `https://kyun2da.dev/posts/published/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const routes = ['', '/about', '/tags'].map(route => ({
    url: `https://kyun2da.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
