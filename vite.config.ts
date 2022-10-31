import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [
    svelte({
      /* plugin options */
    }),
  ],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
