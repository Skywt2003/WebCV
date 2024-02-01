import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [yaml()],
  },
});
