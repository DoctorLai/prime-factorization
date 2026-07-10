import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/prime-factorization/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  define: {
    "process.env": {},
  },
});
