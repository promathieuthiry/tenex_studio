import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    excerpt: z.string(),
    cover: z.string(),
    category: z.array(z.string()).min(1),
    author: z.string(),
    authorRole: z.string(),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .min(1),
  }),
});

export const collections = { blog };
