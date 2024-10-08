import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.js",
    css: true,
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
