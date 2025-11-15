// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    preview: {
      allowedHosts: ['tumueves.com', 'www.tumueves.com'],
    },
  },
});
