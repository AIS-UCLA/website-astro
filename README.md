# AIS-UCLA.ORG

Welcome to the AI Safety at UCLA website repo.

## Contributing

Most content edits can be achieved by just editing files in `src/pages/` directory.
Use markdown, mdx, or `.astro` files.
New reactjs components go in `components` (use `.tsx` or `.ts`). Remember to set
`client:only` if you want the component to be rendered in browser.

When you push to github, your changes should be automatically deployed, no need to
push any build artifacts. Please remember to run `npm run lint` before committing.

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run lint`      | Run prettier to lint files, writing changes      |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
