// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Production runs on Node through `vite preview` (Dockerfile). A Workers build emits
  // dist/server/index.js, but the preview server loads dist/server/server.js.
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // The port is private to the Docker network: Caddy is its only client and already
    // restricts requests to the domains in the Caddyfile.
    preview: { allowedHosts: true },
  },
});
