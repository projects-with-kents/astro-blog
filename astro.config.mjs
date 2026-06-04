// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: замени перед деплоем на GitHub Pages:
  // site: 'https://your-username.github.io',
  // base: '/your-repo-name',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});