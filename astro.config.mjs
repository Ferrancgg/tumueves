// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});


// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    preview: {
      // Dominios que pueden acceder a la app en modo preview/producción
      allowedHosts: ['tumueves.com', 'www.tumueves.com'],
    },
  },
});
