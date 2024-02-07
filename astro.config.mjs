import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import storyblok from '@storyblok/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), storyblok({
    accessToken: 'I4y4GYUpCCoBJrf9Bb4Fsgtt',
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
    },
  }),]
});