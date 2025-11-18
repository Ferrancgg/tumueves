// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: true,
      // Puedes ser estricto con tus dominios…
      allowedHosts: ['tumueves.com', 'www.tumueves.com'],
      // …o simplemente desactivar el filtro:
      // allowedHosts: true,
    },
    preview: {
      host: true,
      allowedHosts: ['tumueves.com', 'www.tumueves.com'],
      // o:
      // allowedHosts: true,
    },
  },
});
