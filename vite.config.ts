import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the heavy engines into their own long-cacheable chunks so
        // the app shell loads and parses without waiting on all of them.
        manualChunks: {
          three: ["three", "@react-three/fiber"],
          gsap: ["gsap"],
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
