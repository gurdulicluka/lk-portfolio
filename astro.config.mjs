import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), 'STORYBLOK')
 
// https://astro.build/config
export default defineConfig({
  redirects: {
    '/home': '/'
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [tailwind(), react(), storyblok({
    accessToken: env.STORYBLOK_TOKEN ,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
    },
  }),]
});