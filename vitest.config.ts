/// <reference types="vitest" />
import { defineConfig } from "vite";
import { baseConfig } from "./vite.config";

export default defineConfig({
  ...baseConfig,
  resolve: {
    alias: {
      "http://localhost:5001/assets/remoteEntry.js":
        "./external_modules/profiler/assets/remoteEntry.js",
      "http://localhost:5173/node_modules/react-router-dom/dist/main.js":
        "./node_modules/react-router-dom/dist/main.js",
      "http://localhost:5173/node_modules/react/index.js":
        "./node_modules/react/index.js",
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./test-setup.js",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "cobertura"],
      exclude: ["**/external_modules/*"],
      threshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  },
});
