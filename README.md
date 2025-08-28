
# Monorepo (SvelteKit web + Sanity studio) with Tailwind

This was generated from your uploaded template and reorganized into a pnpm workspaces monorepo.

## Structure
- `apps/web` – SvelteKit site (Tailwind enabled)
- `apps/studio` – Sanity Studio

## Get started
```bash
pnpm i -w
pnpm dev
# or
pnpm dev:web
pnpm dev:studio
```

If Tailwind classes don't appear, confirm:
- `apps/web/src/app.css` contains the @tailwind directives.
- `apps/web/src/routes/+layout.svelte` imports `../app.css`.
- `apps/web/tailwind.config.cjs` `content` includes shared packages if you use them.
# svelte-sanity-tailwind-starter
