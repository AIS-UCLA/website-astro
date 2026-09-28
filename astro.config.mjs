import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  site: "https://ais-ucla.org",
  redirects: {
    "/forms/intro": "/",
    "/fellowships/technical": "/fellowships",
    "/fellowships/governance": "/fellowships",
    "/fellowships/cv": "/fellowships",
    "/fellowships/rl": "/fellowships",
    "/fellowships/diffusion": "/fellowships",
    "/fellowships/transformers": "/fellowships",
    "/past-work": "/projects",
    "/reading-groups/paper": "/reading-groups",
    "/reading-groups/iabied": "/reading-groups",
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()],
      },
    },
  },
});
