import { defineConfig } from "vite";
import nesting from "tailwindcss/nesting";
import preact from "@preact/preset-vite";
import tailwindcss from "tailwindcss";
import inlineSvg from "postcss-inline-svg";
import { resolve } from "path";

export default defineConfig({
  plugins: [preact()],
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  css: {
    postcss: {
      plugins: [
        nesting,
        tailwindcss,
        inlineSvg({
          paths: [resolve(process.cwd(), "./src/images")],
        }),
      ],
    },
  },
});
