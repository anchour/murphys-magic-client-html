import { resolve } from "path";
import { defineConfig } from "vite";
import nesting from "postcss-nesting";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],

  css: {
    postcss: {
      plugins: [nesting],
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
