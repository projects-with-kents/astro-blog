// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: замени перед деплоем на GitHub Pages:
  // site: 'https://your-username.github.io',
  // base: '/your-repo-name',
  output: 'server',
  adapter: vercel(),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  }
});