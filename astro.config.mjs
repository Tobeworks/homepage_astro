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

//import astroOGImage from "astro-og-image";
const compressConfig = {
  jpg: false,
  exclude: ["coder.jpg"]
};


// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: false,
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dark-plus',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['php','javascript','css'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
  site: 'https://tobeworks.de',
  integrations: [vue({ appEntrypoint: '/src/_vue-app.ts' }), image({
    // supported levels: 'debug' | 'info' | 'warn' | 'error' | 'silent'
    // default: 'info'
    logLevel: 'info',
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), mdx(), sitemap(), robotsTxt(), compress(compressConfig)],
  vite: {}
});