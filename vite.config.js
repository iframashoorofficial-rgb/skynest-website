
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite settings
export default defineConfig({
  plugins: [react()],
  base: '/skynest-website/',
  server: {
    port: 5173,
    open: true,
  },
});
