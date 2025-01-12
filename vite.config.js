import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure it points to the directory containing `index.html`
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "@vitejs/plugin-react"],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['src/tests/**/*.test.jsx'],
    exclude: [...configDefaults.exclude, 'node_modules'],
  },
});