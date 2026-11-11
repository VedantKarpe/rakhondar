import { defineConfig } from 'vite';

// base './' so the built game runs from any folder (GitHub Pages, a phone app wrapper, a plain file server)
export default defineConfig({
  base: './',
  build: { target: 'es2020', chunkSizeWarningLimit: 1500 },
});
