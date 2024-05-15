import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://api.unsplash.com/photos/', // TODO: take from env
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
