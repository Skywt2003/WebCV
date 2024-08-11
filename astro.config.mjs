import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [yaml()]
  }
});