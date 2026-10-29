# AIS-UCLA.ORG

Welcome to the Bruin AI Safety website repo.

## Contributing

Most content edits can be achieved by just editing files in `src/pages/` directory.
Use markdown, mdx, or `.astro` files.
New reactjs components go in `components` (use `.tsx` or `.ts`). Remember to set
`client:only` if you want the component to be rendered in browser.

When you push to github, your changes should be automatically deployed, no need to
push any build artifacts. Please remember to run `npm run lint` before committing.

## Writing a blog post

Add a Markdown file to `src/content/blog/`. Its file name becomes the URL, so
`my-post.md` is published at `/blog/my-post`. Start it with:

```md
---
title: "My post title"
author: Your Name
date: 2026-10-29
draft: true
---

Post text in Markdown...
```

While `draft: true`, the post shows up in `npm run dev` but not on the live
site. Remove that line (or set it to `false`) to publish. Put images in
`public/assets/blog/` and link them as `![alt text](/assets/blog/image.png)`.

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run lint`      | Run prettier to lint files, writing changes      |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
