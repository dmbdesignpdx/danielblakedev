# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Daniel Blake's personal website: a single-page static site built with Astro 7 and TypeScript 7, deployed on Vercel. The package manager is **bun** (the README still says pnpm; it is outdated).

## Commands

```bash
bun install        # install deps (Vercel uses `bun install --production`)
bun run start      # astro dev server at http://localhost:4321
bun run build      # static build to dist/
bun run preview    # serve the built dist/
npx tsc --noEmit   # typecheck (.astro files are not covered)
```

There is no test suite or linter. `bun run build` is the check that matters; Vercel runs it with `bunVersion` pinned in `vercel.json`.

## Architecture

- `src/pages/index.astro` is the only page. It composes `Head`, `Hero`, `About`, `Info` and `Footer`, imports `styles/global.css`, and injects GTM scripts only when `import.meta.env.PROD`.
- **Copy lives in two places.**
  - `src/content/site/*.md` (`about.md`, `footer.md`) holds long-form text and frontmatter. It is loaded through the `site` collection defined in `src/content.config.ts` (glob loader, zod schema) and read with `getEntry("site", "<id>")` in `About.astro` and `Footer.astro`.
  - `src/constants/` holds everything else (names, URLs, link lists, icons, labels, meta, GTM). It is re-exported as namespaces from `src/constants/index.ts` (`Meta`, `Link`, `Links`, `Section`, ...). Add new constants there instead of hardcoding them in components.
- **Gotcha:** `About` and `Footer` do `if (!entry) return null`. If the collection config is missing or a frontmatter field is renamed, the section silently disappears and the build still succeeds. After content or collection changes, check that `dist/index.html` still contains the About and Footer `<h2>`s. Adding a markdown file or frontmatter field also requires updating the schema in `src/content.config.ts`.
- Styling is scoped `<style>` blocks per component plus design tokens (CSS custom properties) in `src/styles/global.css`. `astro.config.mjs` sets `inlineStylesheets: 'always'`, so CSS is inlined into `index.html`.
- `data-layout`, `data-layout-wide` and `data-sr` are attribute hooks styled in `global.css`. Reuse them instead of adding new wrappers.
- `.astro/` (generated types) is committed. Expect diffs there after dependency upgrades or content changes.

## TypeScript config

`tsconfig.json` extends `astro/tsconfigs/strict`. TypeScript 7 has removed `baseUrl`, `downlevelIteration` and `moduleResolution: node10`. Do not add them back, because they cause TS5102/TS5108 errors.
