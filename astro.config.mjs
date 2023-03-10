import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import compress from "astro-compress";
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

import astroOGImage from "astro-og-image";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: false
  },
  site: 'https://tobeworks.de',
  integrations: [vue(), image({
    // supported levels: 'debug' | 'info' | 'warn' | 'error' | 'silent'
    // default: 'info'
    logLevel: 'debug',
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), compress(), mdx(), sitemap(), robotsTxt(), astroOGImage({
    config: {
      path: "/pages/artikel", // change this value to the folder where your posts are
      // NOTE: index.md file will not get proccesed, so please avoid it
    },
  }),],
  vite: {}
});