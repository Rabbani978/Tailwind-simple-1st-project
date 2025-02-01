import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {  // Corrected property name
      input: {
        main: resolve(__dirname, "index.html"),  // Corrected variable name
        news: resolve(__dirname, "news.html"),
      },
    },
  },
});
