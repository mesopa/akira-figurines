import { defineConfig } from 'vite';

import inject from '@rollup/plugin-inject';

export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: '/akira-figurines',
  build: {
    outDir: 'docs',
  },
});

