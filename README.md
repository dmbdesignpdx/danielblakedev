## Hello! 👋

I am a software engineer living in Portland, Oregon and this is the source code for my website, [danielblake.dev](https://danielblake.dev).

<br>

### Features

- Single-page static site: hero, about, related links and footer
- Built with [Astro](https://astro.build/) 7 and TypeScript 7
- Long-form copy is written in Markdown (`src/content/site/`) and loaded through an Astro content collection
- Names, URLs, links and meta tags are centralized in `src/constants/`
- Scoped component styles with CSS custom properties; stylesheets are inlined at build time
- SEO and social metadata (canonical link, Open Graph, Twitter cards), web manifest, sitemap and robots.txt
- Google Tag Manager, loaded in production builds only
- Deployed on [Vercel](https://vercel.com) (Portland region) with dependency review on pull requests

<br>

### For those interested

(I'm assuming you have [Bun](https://bun.sh) installed)

After cloning this project, `cd` into it.

Install dependencies:

```bash
bun i
```

Then launch:

```bash
bun run start
```

Available on [**localhost:4321**](http://localhost:4321)

Other commands:

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `bun run build`   | Build the static site to `./dist/`   |
| `bun run preview` | Preview the production build locally |
| `bun run test`    | Run tests in watch mode (Vitest)     |
| `bun run test:ci` | Run tests once and exit              |

<br>

#### Testing

Component tests use [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/) and [jsdom](https://github.com/jsdom/jsdom). Each component is rendered with Astro's container API, and the test checks what a user sees, such as headings, text and links.

Tests live in `src/__tests__/` and are named `<Component>.test.js`. Shared setup, including the `jest-dom` matchers, is in `src/__tests__/_setup.js`. Configuration is in `vitest.config.mjs`.

To run the suite:

```bash
bun run test:ci
```

Use `bun run test` while you work to re-run tests on each change.
