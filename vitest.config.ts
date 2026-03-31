import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true, // ativa suporte nativo aos paths do tsconfig
    alias: {
      '@': path.resolve(__dirname, './src') // opcional, se quiser manter
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
})
