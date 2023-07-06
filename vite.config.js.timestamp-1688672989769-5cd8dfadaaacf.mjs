// vite.config.js
import { defineConfig } from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/vite/dist/node/index.js";
import nesting from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/tailwindcss/nesting/index.js";
import preact from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import tailwindcss from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/tailwindcss/lib/index.js";
import inlineSvg from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/postcss-inline-svg/lib/index.js";
import { resolve } from "path";
import vitePluginRequire from "file:///Users/robitaille/Code/anchour/murphys-magic/node_modules/vite-plugin-require/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [preact(), vitePluginRequire.default()],
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat"
  },
  css: {
    postcss: {
      plugins: [
        inlineSvg({
          paths: [resolve(process.cwd(), "./src/images")]
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcm9iaXRhaWxsZS9Db2RlL2FuY2hvdXIvbXVycGh5cy1tYWdpY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3JvYml0YWlsbGUvQ29kZS9hbmNob3VyL211cnBoeXMtbWFnaWMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3JvYml0YWlsbGUvQ29kZS9hbmNob3VyL211cnBoeXMtbWFnaWMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgbmVzdGluZyBmcm9tIFwidGFpbHdpbmRjc3MvbmVzdGluZ1wiO1xyXG5pbXBvcnQgcHJlYWN0IGZyb20gXCJAcHJlYWN0L3ByZXNldC12aXRlXCI7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcclxuaW1wb3J0IGlubGluZVN2ZyBmcm9tIFwicG9zdGNzcy1pbmxpbmUtc3ZnXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgdml0ZVBsdWdpblJlcXVpcmUgZnJvbSBcInZpdGUtcGx1Z2luLXJlcXVpcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3ByZWFjdCgpLCB2aXRlUGx1Z2luUmVxdWlyZS5kZWZhdWx0KCldLFxyXG4gIGFsaWFzOiB7XHJcbiAgICByZWFjdDogXCJwcmVhY3QvY29tcGF0XCIsXHJcbiAgICBcInJlYWN0LWRvbVwiOiBcInByZWFjdC9jb21wYXRcIixcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgaW5saW5lU3ZnKHtcclxuICAgICAgICAgIHBhdGhzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIi4vc3JjL2ltYWdlc1wiKV0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsb0JBQW9CO0FBQ25WLE9BQU8sYUFBYTtBQUNwQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsZUFBZTtBQUN4QixPQUFPLHVCQUF1QjtBQUU5QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLGtCQUFrQixRQUFRLENBQUM7QUFBQSxFQUMvQyxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFVBQ1IsT0FBTyxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsY0FBYyxDQUFDO0FBQUEsUUFDaEQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
