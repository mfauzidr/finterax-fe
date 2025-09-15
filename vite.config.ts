import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const root = mode === "landing" ? "apps/landing" : "apps/backoffice";

  return {
    plugins: [react()],
    root,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, root, "src"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: false,
      },
    },
  };
});
