import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework plugin you use

export default defineConfig({
  plugins: [react()],
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/Personalprofile',
});