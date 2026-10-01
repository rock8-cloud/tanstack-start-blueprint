# Build from the repository root:
#   docker build -t tanstack-start-blueprint .
#
# No build arguments: runtime configuration is read from the environment by the
# server, so one image works in every environment.
FROM oven/bun:1.4.2 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# Vite + Nitro emit a self-contained Node server in .output.
RUN bun run build

FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
# Overridden by the platform; the Nitro server reads PORT.
ENV PORT=3000

COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
