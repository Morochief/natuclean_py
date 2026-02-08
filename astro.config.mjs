// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://natuclean-py.pages.dev',
  output: 'server',
  integrations: [solidJs()],
  adapter: cloudflare()
});