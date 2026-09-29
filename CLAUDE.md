# CLAUDE.md

**All project guidance lives in [AGENTS.md](AGENTS.md). Read it before making
changes.** It is the single source of truth — keep it updated rather than
duplicating content here.

Quick orientation:

- Single TanStack Start app (React 19, Tailwind v4, shadcn/ui), bun as package
  manager, Nitro Node server built to `.output/`.
- `bun run dev` serves on `:3000`. No environment variables are required.
- There is no test suite. Verify with `bun run typecheck`, `bun run lint` and
  `bun run build`, then load the page.
- Deploys to [Rock8Cloud](https://rock8.cloud) from the root `Dockerfile`;
  `.mcp.json` connects the Rock8Cloud MCP server for agent-driven deploys.
- `src/routeTree.gen.ts` is generated — never edit it.
