/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
   test: {
      globals: true,
      environment: "jsdom",
      coverage: {
         include: ["src/components/**/*.vue"],
         provider: "v8",
         reporter: ["html", "text"],
      },
      reporters: ["default"],
   },
   plugins: [vue()],
});
