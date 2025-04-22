import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.js"),
      name: "venti-ui-kit",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      rollupOptions: {
        // 🚫 No externals at all — fully bundle React
        external: [],

        output: {
          // no globals needed when using ESM
        },
      },
      emptyOutDir: true,
      sourcemap: true,
      minify: true,
    },
  },
});
