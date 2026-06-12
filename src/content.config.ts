import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { iconNames } from './lib/icons';

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

const contact = defineCollection({
    loader: file('./src/content/contact.json'),
    schema: z.object({
        link: z.string(),
        label: z.string(),
        icon: z.enum(iconNames),
    }),
});

export const collections = { blog, career, contact };
