# CLAUDE.md

@tonyli-portfolio.md

## Session start

- The project reference above (`tonyli-portfolio.md`) is imported into every session. Treat it as the source of truth for stack, structure, routes, data schemas, styling tokens and conventions. Consult it before exploring the codebase.
- If the reference and the code disagree, trust the code, then fix the reference.

## Working rules

- After any change to routes, data schemas, components, scripts, dependencies, styling tokens or deployment, update the matching section of `tonyli-portfolio.md` in the same change. Update `README.md` too if the human-facing setup or structure changed.
- Before declaring work done, run: `npm run typecheck && npm run lint && npm run build` (use Node >= 22.13; on this machine prepend `~/.local/node24/bin` to `PATH` if `node -v` is older).
- Follow the design system in `tonyli-portfolio.md` §9 (editorial, blue `brand` accent, flat, minimal motion): shadcn primitives for structure/accessibility, restyled with `className` and the site tokens. Use the custom breakpoints `tablet:` / `laptop:` / `desktop:` only.
- Add shadcn components with `npx shadcn@latest add <name>`; never hand-write them.
- Never edit `src/routeTree.gen.ts`.
- Don't commit or push unless asked.

## Subagents (`.claude/agents/`)

- `ui-builder`: create or modify components and pages with shadcn and Tailwind v4 conventions.
- `content-editor`: add or edit projects, experiences and site copy in `src/data/`.
- `qa-verifier`: read-only verification (typecheck, lint, build, route checklist); reports and does not edit.
