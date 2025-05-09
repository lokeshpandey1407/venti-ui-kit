import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // react({
    //   jsxRuntime: "automatic",
    //   fastRefresh: false,
    // }),
    cssInjectedByJsPlugin(),
  ],
  // css: {
  //   modules: {
  //     localsConvention: "camelCase",
  //     scopeBehaviour: "local",
  //     generateScopedName: "[name]__[local]___[hash:base64:5]",
  //   },
  //   preprocessorOptions: {
  //     css: {
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  build: {
    // target: "es2018",
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "venti_ui", // Global variable for UMD
      fileName: (format) => `venti_ui.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Don't bundle react, react-dom (they must be available in consumer)
      external: ["react", "react-dom", "clsx"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
