# AGENTS.md

Instructions for coding agents working in this repository. Read
[README.md](README.md) for what the blueprint _is_; this file is the short list
of things that will break if you ignore them.

## What this is

A single-app **TanStack Start** blueprint (React 19, TanStack Router + Query,
Tailwind v4, shadcn/ui) that builds to a self-contained Nitro Node server and
deploys to [Rock8Cloud](https://rock8.cloud) from the checked-in `Dockerfile`.
The page at `/` is a landing page for **Driftwave**, a fictional product —
placeholder content, safe to replace.

Package manager is **bun** (commit `bun.lock`; never add `package-lock.json`,
`pnpm-lock.yaml` or `yarn.lock`).

## Layout

| Path                              | What lives there                                          |
| --------------------------------- | --------------------------------------------------------- |
| `src/routes/`                     | File-based routes; one file per URL                       |
| `src/routes/__root.tsx`           | HTML shell, `<head>` meta, stylesheet link, devtools      |
| `src/routes/index.tsx`            | `/` — composes the landing sections, nothing else         |
| `src/content/landing.ts`          | All landing-page copy and data (edit text here)           |
| `src/components/landing/`         | One file per landing section, plus shared buttons/heading |
| `src/components/layout/`          | Site header, footer, powered-by bar, logo                 |
| `src/routeTree.gen.ts`            | Generated route tree — **do not edit**                    |
| `src/router.tsx`                  | Router factory + TanStack Query SSR integration           |
| `src/integrations/tanstack-query` | Query client provider and devtools panel                  |
| `src/lib/utils.ts`                | `cn()` — `clsx` + `tailwind-merge`                        |
| `src/styles.css`                  | Tailwind entry, theme tokens, custom utilities            |
| `src/components/ui/`              | shadcn output (created on first `shadcn add`)             |

## Rules

- **`src/routeTree.gen.ts` is generated and committed.** The router plugin
  rewrites it on `dev` and `build`; commit the regenerated file with any route
  change so `typecheck` passes on a fresh clone. Never edit it by hand.
- **Import from `src` with the `#/` alias** (`#/lib/utils`), as declared in
  `package.json` `imports` and `tsconfig.json`. shadcn is configured for it.
- **Server-only code stays on the server.** Secrets, database clients and
  privileged fetches go inside `createServerFn` handlers or route `server.handlers`
  — never in component bodies or module top level of a route file, which ship to
  the browser.
- **Read environment variables lazily**, inside the handler that needs them. The
  Docker image is built without secrets; a top-level `process.env.X!` breaks the
  build or bakes in `undefined`. Add every new variable to a `.env.example` and
  the README.
- **Don't hardcode the port.** `PORT` is injected by Rock8Cloud and read by
  Nitro. The `dev` script pins `3000` locally only.
- **Keep the Dockerfile in step with the build.** If you change the build
  script, output directory or add files the build needs, update `Dockerfile`
  and `.dockerignore` in the same change. The `EXPOSE`d port (3000) must match
  the Rock8Cloud service port.
- **Keep route files thin.** A route file wires up the loader and composes
  components; sections live in `src/components/<area>/` (one component per
  kebab-case file, named exports) and copy/data in `src/content/`.
- **Add shadcn components with the CLI**: `bunx --bun shadcn@latest add <name>`.

## Styling

Tailwind **v4**, CSS-first — there is no `tailwind.config.js`. Everything lives
in `src/styles.css`:

- Design tokens on `:root` / `.dark`: `--sea-ink`, `--sea-ink-soft`,
  `--lagoon`, `--lagoon-deep`, `--palm`, `--line`, `--chip-bg`, … plus the
  shadcn tokens (`--background`, `--primary`, …). Use them as
  `text-(--sea-ink)`, `bg-(--lagoon)`, not raw hex.
- Custom utilities: `page-wrap` (max-width container), `display-title`
  (Fraunces serif headings), `island-shell` / `feature-card` (glass cards),
  `island-kicker` (uppercase eyebrow), `nav-link`, `rise-in` (entry animation),
  `site-footer`.
- Fonts: Fraunces (display) + Manrope (body), loaded from Google Fonts.
- Global link colors are in `@layer base` so utilities can override them —
  keep new global element styles layered for the same reason.
- Prefer canonical v4 class names (`bg-linear-to-br`, `text-(--token)`); the
  editor's Tailwind linter flags the old forms.

## Commands

| Command             | Notes                                              |
| ------------------- | -------------------------------------------------- |
| `bun install`       | Commit `bun.lock`                                  |
| `bun run dev`       | Dev server on `:3000`                              |
| `bun run build`     | Production build → `.output/`                      |
| `bun run start`     | `node .output/server/index.mjs`                    |
| `bun run typecheck` | `tsc --noEmit` — run before you call a change done |
| `bun run lint`      | ESLint (`@tanstack/eslint-config`)                 |
| `bun run format`    | Prettier write + ESLint fix                        |

There is no test suite. Verify changes with `typecheck`, `lint`, `build`, and by
loading the page.

## Deployment

Rock8Cloud builds the root `Dockerfile`: `oven/bun` installs with
`--frozen-lockfile` and runs `bun run build`, then `node:22-slim` runs
`.output/server/index.mjs` on port 3000. Push to `main` redeploys.
`.mcp.json` wires up the Rock8Cloud MCP server (OAuth), so "Deploy this project
to Rock8Cloud" works from an MCP-capable agent. Verify the image locally with
`docker build -t tanstack-start-blueprint .`.
