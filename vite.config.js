// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    // aquí permites tus dominios en producción
    allowedHosts: ['tumueves.com', 'www.tumueves.com'],
  },
  server: {
    host: true, // expone el server hacia fuera (0.0.0.0)
  },
});
