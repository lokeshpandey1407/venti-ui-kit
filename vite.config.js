import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.js"),
      name: "ventiUi", // Global variable for UMD
      fileName: (format) => `index.${format}.js`,
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
