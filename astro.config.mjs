import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  output: env.STORYBLOK_ENVIRONMENT === 'preview' ? 'server' : 'static',
  adapter: env.STORYBLOK_ENVIRONMENT === 'preview' ? netlify() : undefined,
  ...(env.STORYBLOK_ENVIRONMENT === 'preview' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  integrations: [react(), storyblok({
    bridge: env.STORYBLOK_ENVIRONMENT === 'preview',
    accessToken: env.STORYBLOK_ENVIRONMENT === 'preview' ? 'tFVO5jVUoSh4127CEb10TQtt' : 'I4y4GYUpCCoBJrf9Bb4Fsgtt',
    components: {
      page: 'storyblok/Page',
      carousel: 'storyblok/Carousel',
      card: 'storyblok/Card',
      header: 'storyblok/Header'
    }
  }, tailwind())],
});