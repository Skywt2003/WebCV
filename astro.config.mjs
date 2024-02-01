import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [yaml()],
  },
});
