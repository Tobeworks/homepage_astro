import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import compress from "astro-compress";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: false
  },
  integrations: [vue(), image({
    // supported levels: 'debug' | 'info' | 'warn' | 'error' | 'silent'
    // default: 'info'
    logLevel: 'debug',
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), compress()],
  vite: {}
});