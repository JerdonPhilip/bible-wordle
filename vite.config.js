import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/bible-wordle/',   // Must match your repo name
    server: {
        port: 3000,
        open: true
    }
})