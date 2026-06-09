// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Replace with https://YOUR-USERNAME.github.io when you set up GitHub Pages
export default defineConfig({
  site: 'https://nejbiz.github.io',
  integrations: [mdx()],
});