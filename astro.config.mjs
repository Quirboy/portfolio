// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: 'https://quirboy.github.io',
  base: '/portfolio',
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
alias: {
  "@": fileURLToPath(new URL("./src", import.meta.url)),
  "@components": fileURLToPath(
    new URL("./src/components", import.meta.url)
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
