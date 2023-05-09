import { resolve } from "path";
import { defineConfig } from "vite";
import nesting from "postcss-nesting";
import preact from "@preact/preset-vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [preact()],

  css: {
    postcss: {
      plugins: [nesting, tailwindcss],
    },
  },

  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.php"),
      },
    },
  },
});
