import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: "https://aisafetyatucla.org",
  // Astro 7 defaults to JSX whitespace rules ("jsx"), which would drop the
  // spaces between inline elements; keep the HTML-aware behavior.
  compressHTML: true,
  // Keep the remark/rehype pipeline Astro used before v7: its SmartyPants
  // turns "--" into an em dash, while the new default (Sätteri) emits an en dash.
  markdown: {
    processor: unified(),
  },
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
    build: {
      // Vite 8 minifies CSS for newer browsers by default and rewrites
      // `min-width` breakpoints into range syntax that Safari < 16.4 ignores;
      // keep the older browser targets Vite 5 used.
      cssTarget: ["chrome87", "edge88", "firefox78", "safari14"],
    },
    css: {
      postcss: {
        plugins: [tailwindcssNesting(), tailwindcss(), autoprefixer()],
      },
    },
  },
});
