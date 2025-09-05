// Vite configuration for the GET Protocol WordPress plugin
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'src/index.js',
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});