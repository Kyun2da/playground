import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    categories: z.array(z.string()),
    time: z.number(),
    draft: z.boolean().default(false),
    excerpt: z.string(),
    coverImage: z.string(),
    ogImage: z.object({
      url: z.string()
    }).optional(),
  }),
});

export const collections = { posts };
