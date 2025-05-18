import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173, // or leave it out; Render sets it via $PORT
    host: true,
    allowedHosts: ['shop-mash.onrender.com'],
  },
  build: {
    outDir: 'dist',
  }
})
