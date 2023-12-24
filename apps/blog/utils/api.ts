import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

type Items = Record<string, string>;

export function getPostBySlug(slug: string, fields: string[] = [], directoryPath: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(directoryPath, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], type: 'draft' | 'published') {
  const filePostfix = type === 'draft' ? '_drafts' : '_posts';
  const directoryPath = join(process.cwd(), filePostfix);
  const slugs = fs.readdirSync(directoryPath);

  const posts = slugs
    .map(slug => getPostBySlug(slug, fields, directoryPath))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
