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
});
