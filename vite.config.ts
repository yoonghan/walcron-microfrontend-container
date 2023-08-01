import { UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const profilerProtocol = process.env.PROFILER_PROTOCOL || "http";
const profilerDomain = process.env.PROFILER_DOMAIN || "localhost:5001";

const chartProtocol = process.env.CHART_PROTOCOL || "http";
const chartDomain = process.env.CHART_DOMAIN || "localhost:5002";

// https://vitejs.dev/config/
export const baseConfig: UserConfigExport = {
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        profiler: `${profilerProtocol}://${profilerDomain}/assets/remoteEntry.js?v=${Date.now()}`,
        chart: {
          external: `${chartProtocol}://${chartDomain}/remoteEntry.js?v=${Date.now()}`,
          format: "var",
          from: "webpack",
        },
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
};

export default defineConfig(baseConfig);
