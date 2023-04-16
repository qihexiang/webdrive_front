import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/file": {
        target: "http://localhost:8080"
      },
      "/dir": {
        target: "http://localhost:8080"
      }
    }
  },
  build: {
    outDir: "../webdrive_srv/static"
  }
})
