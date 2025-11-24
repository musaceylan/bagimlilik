import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bagimlilik/', // Assuming the repo name is 'bagimlilik' or similar. Adjust if needed.
})
