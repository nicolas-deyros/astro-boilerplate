// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },

  integrations: [db(), mdx(), partytown()],
});
