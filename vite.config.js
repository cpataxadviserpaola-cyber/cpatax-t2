import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Writes dist/.vite/manifest.json, the list of built files for each source file, which
  // scripts/seo-pages.js uses to have each page's HTML fetch that page's own code early.
  build: { manifest: true },
});
