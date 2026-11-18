import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://danielblake.dev",
  base: "/",
  trailingSlash: "ignore",
  prefetch: true,
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      serialize(item) {
        if (/\//.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
          item.priority = 1;
        }
        if (/projects/.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
          item.priority = 0.9;
        }
        if (/how-i-build/.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
