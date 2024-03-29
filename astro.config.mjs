import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://beautifulyou-website-git-add-meta-tags-lem0n4id.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});