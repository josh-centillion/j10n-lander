import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import build from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client/main.ts',
          output: {
            entryFileNames: 'static/client.js',
            assetFileNames: 'static/[name][extname]'
          }
        },
        outDir: './dist',
        emptyOutDir: false,
        cssCodeSplit: false
      }
    }
  }
  return {
    plugins: [
      devServer({ entry: 'src/index.tsx', adapter }),
      build()
    ]
  }
})
