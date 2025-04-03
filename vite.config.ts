import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      nodePolyfills({
        protocolImports: true, // Required for IC agent
        include: [
          'buffer', 
          'util',
          'stream',
          'crypto'
        ]
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@declarations": path.resolve(__dirname, "./src/declarations"),
        process: "process/browser",
        buffer: "buffer",
      },
    },
    define: {
      "process.env": {
        DFX_NETWORK: JSON.stringify(env.DFX_NETWORK || "local"),
        AUTH_CANISTER_ID: JSON.stringify("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      },
      global: "globalThis", // Fix global scope
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          {
            name: 'fix-node-globals-polyfill',
            setup(build) {
              build.onResolve({ filter: /_virtual-process-polyfill_\.js/ }, ({ path }) => ({ path }))
            },
          }
        ]
      }
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    }
  };
});