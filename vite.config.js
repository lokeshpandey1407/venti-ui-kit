import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.js"),
      name: "venti_ui", // Global variable for UMD
      fileName: (format) => `venti_ui.${format}.js`,
      formats: ["umd", "es"],
    },
    rollupOptions: {
      // Don't bundle react, react-dom (they must be available in consumer)
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
