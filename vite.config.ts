import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Убираем tailwindcss() — он не нужен здесь
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Добавьте base, если публикуете на GitHub Pages (например, репозиторий называется Englishcoursefigma)
  // base: '/Englishcoursefigma/',
});
