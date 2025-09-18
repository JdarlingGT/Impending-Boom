// Vite configuration for the GET Protocol WordPress plugin
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@wordpress/element',
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'src/index.js',
      external: ['@wordpress/element', '@wordpress/i18n', '@wordpress/components', '@wordpress/api-fetch'],
      output: {
        globals: {
          '@wordpress/element': 'wp.element',
          '@wordpress/i18n': 'wp.i18n',
          '@wordpress/components': 'wp.components',
          '@wordpress/api-fetch': 'wp.apiFetch',
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
  },
});