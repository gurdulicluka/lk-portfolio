import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
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
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_ENV === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  integrations: [tailwind(), react(), storyblok({
    bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
    accessToken: env.STORYBLOK_TOKEN ,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      image: 'storyblok/Image',
    },
  }),]
});