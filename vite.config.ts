import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePluginForArco } from '@arco-plugins/vite-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), vitePluginForArco({
    style: 'css'
  })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
}));