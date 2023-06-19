import { UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const protocol = process.env.PROFILER_PROTOCOL || "http";
const domain = process.env.PROFILER_DOMAIN || "localhost:5001";

// https://vitejs.dev/config/
export const baseConfig: UserConfigExport = {
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: `${protocol}://${domain}/assets/remoteEntry.js`,
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
