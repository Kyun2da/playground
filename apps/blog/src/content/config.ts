import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    categories: z.array(z.string()),
    coverImage: z.string(),
    date: z.string(),
    draft: z.boolean().default(false),
    excerpt: z.string(),
    ogImage: z.object({
      url: z.string()
    }).optional(),
    series: z.object({
      name: z.string(),
      order: z.number(),
    }).optional(),
    time: z.number(),
    title: z.string(),
  }),
  type: 'content',
});

export const collections = { posts };
