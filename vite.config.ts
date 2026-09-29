import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

// The Nitro preset is pinned on purpose. Nitro otherwise sniffs the *build*
// runtime and emits a Bun-targeted server when the build runs under Bun (as it
// does in the `oven/bun` Docker build stage) — an artifact that crashes with
// `ReferenceError: Bun is not defined` under Node. Pinned, every machine produces
// the same `.output/server/index.mjs` Node server that reads PORT.
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({
      preset: 'node-server',
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
