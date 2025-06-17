// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 必要に応じて相対パス
  plugins: [react()],
  preview: {
    host: true,
    port: 3000, // 任意（Heroku では上書きされる）
    allowedHosts: ['moss2-6c7bdb259890.herokuapp.com'],
  },
})
