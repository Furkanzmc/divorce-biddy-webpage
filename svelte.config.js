// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProjectPage = process.env.BASE_PATH && process.env.BASE_PATH !== '';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html' // for SPA routing; or 'index.html'
    }),
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: { entries: ['*'] }
  }
};
