/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        gpt: "rgb(210, 244, 211)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
