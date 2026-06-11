import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
    }),
});


const career = defineCollection({
    loader: file('./src/content/career.json'),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        summary: z.string().optional(),
        achievments: z.array(z.string()).optional(),
        skills: z.array(z.string()),
    }),
});

export const collections = { blog, career };
