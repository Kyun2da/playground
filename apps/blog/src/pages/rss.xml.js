import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const siteUrl = context.site || 'https://kyun2da.dev';

  return rss({
    customData: `<language>ko-KR</language>`,
    description: '허균의 블로그',
    items: sortedPosts.map((post) => ({
      customData: post.data.coverImage
        ? `<media:content url="${siteUrl}${post.data.coverImage}" medium="image" />`
        : '',
      description: post.data.excerpt,
      enclosure: post.data.coverImage ? {
        length: 0,
        type: 'image/jpeg',
        url: `${siteUrl}${post.data.coverImage}`,
      } : undefined,
      link: `/posts/${post.slug}/`,
      pubDate: new Date(post.data.date),
      title: post.data.title,
    })),
    site: siteUrl,
    title: 'Kyun2da Blog',
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
  });
}
