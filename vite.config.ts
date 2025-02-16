// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import commonjs from 'vite-plugin-commonjs'; // Add this

export default defineConfig({
  plugins: [
    react(),
    commonjs(), // Add this
    visualizer({
      open: true,
      filename: 'bundle-analysis.html',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lodash: ['lodash'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});