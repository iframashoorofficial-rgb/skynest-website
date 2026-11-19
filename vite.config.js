import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite settings. "open: true" opens the website in your browser automatically.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
