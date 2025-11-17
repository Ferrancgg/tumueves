// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['tumueves.com', 'www.tumueves.com'],
  },
  server: {
    host: true,
    allowedHosts: ['tumueves.com', 'www.tumueves.com'],
  },
});
