import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const siteUrl = context.site || 'https://kyun2da.dev';

  return rss({
    title: 'Kyun2da Blog',
    description: '허균의 블로그',
    site: siteUrl,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/posts/${post.slug}/`,
      enclosure: post.data.coverImage ? {
        url: `${siteUrl}${post.data.coverImage}`,
        length: 0,
        type: 'image/jpeg',
      } : undefined,
      customData: post.data.coverImage
        ? `<media:content url="${siteUrl}${post.data.coverImage}" medium="image" />`
        : '',
    })),
    customData: `<language>ko-KR</language>`,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
  });
}
