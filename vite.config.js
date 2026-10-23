import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes every asset URL relative, so the build works from any
// GitHub Pages sub-path (e.g. /osforhlearninghub-2026/) without extra config.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
