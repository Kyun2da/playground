import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const searchData = posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    excerpt: post.data.excerpt,
    categories: post.data.categories,
    date: post.data.date,
  }));

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
