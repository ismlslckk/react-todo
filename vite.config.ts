import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

// todo: reduce alias types
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  base: '/react-todo/',
  plugins: [react(), eslint(), stylelint({
    fix: false,
  })],

});
