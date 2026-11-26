import { defineConfig } from 'astro/config';

// Static site. CSS is inlined so the page needs one request for HTML and none for styles.
export default defineConfig({
  site: 'https://drabid.com.np',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
});
