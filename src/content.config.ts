import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug:     z.string(),
    title:    z.string(),
    date:     z.coerce.date(),
    category: z.string(),
    image:    z.string().optional(),
    imageAlt: z.string().optional(),
    excerpt:  z.string(),
  }),
});

export const collections = { blog };
