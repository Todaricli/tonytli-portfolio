# Tony T Li: Portfolio

My personal developer portfolio, covering my projects, work experience, a bit about me, and a way to get in touch.

**Live site:** https://tonytli.netlify.app

<img width="880" alt="Portfolio home page" src="https://github.com/Todaricli/tonytli-portfolio/assets/130806678/b1ecae68-fc03-4606-a8d3-c018b05b5b6e">

## Tech stack

| Area      | Tools                                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)                                                                   |
| Routing   | [TanStack Router](https://tanstack.com/router) (file-based, type-safe, code-split)                                                             |
| UI        | [shadcn/ui](https://ui.shadcn.com) (Radix primitives), [lucide](https://lucide.dev) + [react-icons](https://react-icons.github.io/react-icons) |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) with custom breakpoints, fonts and keyframe animations                                              |
| Build     | [Vite](https://vite.dev)                                                                                                                       |
| Quality   | ESLint (flat config) + Prettier (with Tailwind class sorting)                                                                                  |
| Hosting   | [Netlify](https://www.netlify.com); the contact form posts to [Getform](https://getform.io)                                                    |

> The site was originally built with SvelteKit and was migrated to React + TanStack Router + shadcn/ui in 2026 while keeping the same look and feel.

## Getting started

**Requirements:** Node.js **22.13 or newer** (24 LTS recommended; see `.nvmrc`) and npm.

```bash
git clone https://github.com/Todaricli/tonytli-portfolio.git
cd tonytli-portfolio
npm install
npm run dev
```

The app runs at http://localhost:5173.

### Scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload          |
| `npm run build`     | Type-check and build to `dist/`               |
| `npm run preview`   | Serve the production build locally            |
| `npm run typecheck` | Run the TypeScript compiler without emitting  |
| `npm run lint`      | Check formatting (Prettier) and lint (ESLint) |
| `npm run format`    | Auto-format the codebase                      |

## Project structure

```
public/                 Static files: fonts, company/project/profile images, favicon
src/
  main.tsx              App entry: creates the router
  index.css             Tailwind setup, theme, fonts and animations
  routes/               One file per page (TanStack Router file-based routing)
    __root.tsx          Shared layout: nav, page loader, footer, 404
    index.tsx           Home
    projects.tsx        Projects
    experiences/        Experience list and /experiences/$slug detail pages
    about.tsx
    contact.tsx
  components/           Site components (project flip card, nav, footer, contact form…)
  components/ui/        shadcn/ui components (generated with the shadcn CLI)
  data/                 All the content: projects, experiences, links
  hooks/                Small React hooks (page loader timing, media queries)
```

### How the pages work

- **Routing:** each file in `src/routes/` becomes a page. The router plugin generates `src/routeTree.gen.ts` automatically, so don't edit it by hand.
- **Page loader:** each top-level page shows a short animated loader with its name ("Home.", "Projects." …), set through the route's `staticData.loaderLabel`.
- **Experience pages:** `/experiences/$slug` looks the slug up in `src/data/experiences.ts` and shows a 404 page if it isn't found.
- **Responsive design:** custom breakpoints are `tablet` (740px), `laptop` (1124px) and `desktop` (1560px). Below tablet width the navigation becomes a dropdown menu.

## Updating content

All content lives in `src/data/`, so you rarely need to touch components.

- **Add a project:** append an object to `src/data/projects.ts` and put its screenshot in `public/project_icon/`. Set `github` / `website` to `'private'` to hide the links.
- **Add an experience:** append an object to `src/data/experiences.ts` with a unique lowercase, hyphenated `slug` (it becomes the URL). Put its logo in `public/company_icon/`.
- **Change contact links:** edit `src/data/site.ts`.

The `desc` fields accept simple HTML (`<p>`, `<br>`, `<ul><li>`, `<strong>`).

## Adding UI components

This project uses shadcn/ui. To add a component:

```bash
npx shadcn@latest add dialog
```

It is generated into `src/components/ui/` and can be styled with Tailwind classes.

## Deployment

Netlify builds the site on every push, using the settings in `netlify.toml`:

- build command `npm run build`, publish directory `dist`, Node 24
- a catch-all redirect to `index.html` so that deep links such as `/experiences/university-of-auckland` work on refresh

## Working with AI assistants

- `tonyli-portfolio.md` is a condensed, machine-oriented reference of the whole codebase.
- `CLAUDE.md` loads that reference automatically in Claude Code.
- `.claude/agents/` contains task-specific subagents: UI builder, content editor and QA verifier.
