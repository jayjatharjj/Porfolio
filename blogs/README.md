# Blog posts

Every `.md` file in this folder is published as a post — no code changes needed.

- **Add a post:** drop `my-post.md` here. It appears on `/blogs`, gets its own page at
  `/blogs/my-post/`, and joins the previous/next links and the homepage "Writing" teaser.
- **Order:** a numeric prefix (`09-spring-boot.md`) sets the series order and is dropped from
  the URL. Unnumbered posts come after, newest `date` first.
- **Title & summary:** taken from the first `# Heading` and the first blockquote/paragraph,
  unless set in optional frontmatter:

  ```yaml
  ---
  title: Spring Boot in Production
  description: One-line summary shown on the card.
  date: 2026-10-25
  tags: [spring, aws]
  ---
  ```

- **Locally:** with `npm run dev` running, refresh the browser to see new or edited posts. A
  brand-new post can 404 on the very first load while Next refreshes its list of pages in the
  background — refresh again a second later.
- **Live:** commit and push to `main`; the GitHub Pages workflow rebuilds the site.

This README is not published.
