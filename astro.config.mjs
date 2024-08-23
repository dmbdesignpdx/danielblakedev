import { defineConfig } from 'astro/config';


export default defineConfig({
  site: 'https://danielblake.dev',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
});
