import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework plugin you use

export default defineConfig({
  plugins: [react()],
  build: {
    // Add this line to force esbuild instead of lightningcss
    cssMinify: 'esbuild', 
  }
})