import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Define a base relativa para os caminhos
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
    },
  },
});
