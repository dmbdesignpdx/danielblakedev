import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    heading: z.string(),
    figure: z.string().optional(),
    caption: z.string().optional(),
    copyright: z.string().optional(),
  }),
});

export const collections = { site };
