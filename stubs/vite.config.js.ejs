import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
<% if(ts) { -%>
import dts from "vite-plugin-dts";
<% } -%>

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/components/index.<%= language %>"),
      name: "<%= name %>",
      // the proper extensions will be added
      fileName: (format) => `<%= fileName %>.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    <% if(ts) { -%>
    dts({
      insertTypesEntry: true,
    }),
    <% } -%>
  ],
});
