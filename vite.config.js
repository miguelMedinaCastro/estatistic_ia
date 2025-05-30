import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // ou a porta definida no .env
        changeOrigin: true,
      },
    },
    allowedHosts: [
      "2836-177-22-169-3.ngrok-free.app",
      "a65b-177-22-169-3.ngrok-free.app",
      "0d5d-2804-389-f2a1-61b7-fc5-be92-9699-d1c2.ngrok-free.app"
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  
})
