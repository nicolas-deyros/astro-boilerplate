// @ts-check
import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/", // Use to generate your sitemap and canonical URLs in your final build.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  trailingSlash: "always",
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  output: "hybrid",
  integrations: [db(), mdx(), partytown(), sitemap()],
});
