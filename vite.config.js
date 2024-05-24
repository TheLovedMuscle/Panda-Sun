import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Panda-Sun/', // Set the base path for your project
  build: {
    outDir: 'dist' // Ensure the build directory is set to dist
  }
})
