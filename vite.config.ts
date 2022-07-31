import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [react(), vitePluginForArco({style: 'css'})],
  server: {
    proxy: {
      '/app': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
