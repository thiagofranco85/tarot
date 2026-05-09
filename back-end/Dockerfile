# Stage 1: build
FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Stage 2: runtime (sem devDependencies)
FROM node:20-alpine AS runner
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/build ./build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["pnpm", "start"]
