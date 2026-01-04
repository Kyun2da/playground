import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const searchData = posts.map((post) => ({
    categories: post.data.categories,
    date: post.data.date,
    excerpt: post.data.excerpt,
    slug: post.slug,
    title: post.data.title,
  }));

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
