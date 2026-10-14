import { defineConfig } from 'astro/config';

// SITE et BASE sont définis automatiquement par le workflow GitHub Pages.
// En local, les valeurs par défaut suffisent.
export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE ?? '/',
});
