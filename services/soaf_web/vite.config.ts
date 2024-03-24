import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/components" },
      { find: "@features", replacement: "/src/styles" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@libs", replacement: "/src/libs" },
    ],
  },
});
