// Content collections: the schema every project Markdown file must follow.
// Docs: https://docs.astro.build/en/guides/content-collections/
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { getYouTubeId } from './lib/youtube';

// A file in /public, referenced as "/projects/<slug>/file.webp".
// The build fails with a clear message if the file does not exist (catches typos early).
const publicFile = z
  .string()
  .refine((path) => path.startsWith('/'), {
    message: 'Local file paths must start with "/" (e.g. /projects/my-project/cover.webp)',
  })
  .refine((path) => existsSync(join(process.cwd(), 'public', path)), {
    message: 'File not found in the public/ folder',
  });

// A gallery item: an image, or a video (.mp4/.webm) that plays as a silent loop.
const galleryItem = z.union([
  publicFile,
  z.object({
    src: publicFile,
    alt: z.string().optional(),
    caption: z.string().optional(), // 1–2 sentences, shown under the item
    keywords: z.array(z.string()).default([]), // shown on hover
    credit: z.string().optional(), // source of third-party material, shown under the caption
    poster: publicFile.optional(), // still image shown before a video plays
  }),
]);

const projects = defineCollection({
  // Every .md file in src/content/projects is a project.
  // Files starting with "_" (like _template.md) are ignored.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()).min(1),
    // When the project happened: "2024" or "2024-11"; add dateEnd for a range.
    date: z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, 'Use YYYY or YYYY-MM').optional(),
    dateEnd: z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, 'Use YYYY or YYYY-MM').optional(),
    tags: z.array(z.string()).default([]),
    // People you made the project with, shown as "In collaboration with …".
    collaborators: z.array(z.string()).default([]),

    cover: publicFile.optional(),
    coverAlt: z.string().optional(),
    gallery: z.array(galleryItem).default([]),

    youtube: z
      .string()
      .refine((url) => getYouTubeId(url) !== null, { message: 'Not a recognised YouTube URL' })
      .optional(),
    github: z.url().optional(),
    website: z.url().optional(),
    pdf: publicFile.optional(),
    // Any other links, each shown as a button, e.g. { label: Instagram, url: https://... }
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),

    publication: z
      .object({
        title: z.string(),
        authors: z.array(z.string()).default([]),
        venue: z.string().optional(),
        year: z.number().int().optional(),
        doi: z.string().optional(),
        url: z.url().optional(),
        pdf: publicFile.optional(),
      })
      .optional(),

    // Set to true to hide a project from the built site while working on it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
