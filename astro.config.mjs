import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

const domain = 'https://naturaniks.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: domain,
  integrations: [tailwind(), sitemap({
      filter: (page) => page !== `${domain}/checkout`,
    })]
});
