import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file in src/content/blog/ = one post at /blog/<file-name>.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    // Drafts render in `npm run dev` but are left out of the live site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
