import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Required on every page so social previews and search results always
        // have a useful summary.
        description: z.string(),
      }),
    }),
  }),
  // Starlight reads the optional i18n collection even on English-only sites.
  // Defining it here keeps the content layer quiet and leaves room for future
  // translations in src/content/i18n/.
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
};
