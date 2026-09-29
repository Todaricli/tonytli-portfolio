# tonyli-portfolio: machine reference

> Canonical, agent-oriented context for this repo. Loaded into every Claude Code session via `@tonyli-portfolio.md` in `CLAUDE.md`.
> **Keep this file in sync.** Any change to routes, data schemas, components, scripts, dependencies, styling tokens or deployment MUST update the matching section here in the same change.
> Human-oriented docs: `README.md`.

## 1. Identity

| key     | value                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| purpose | Personal portfolio of Tony Tuocheng Li (static, no backend)                                                       |
| live    | https://tonytli.netlify.app                                                                                       |
| repo    | https://github.com/Todaricli/tonytli-portfolio                                                                    |
| type    | Client-side SPA (no SSR, no server functions, no env vars); light / dark / system theme                           |
| history | Migrated from SvelteKit 2 / Svelte 4 / Tailwind 3 → React 19 / TanStack Router / shadcn/ui / Tailwind 4 (2026-09) |

## 2. Stack (pinned majors)

| layer       | package                                                                                                           | version                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| runtime     | Node                                                                                                              | >=22.13 (`.nvmrc` = 24; Netlify `NODE_VERSION=24`) |
| build       | vite / @vitejs/plugin-react                                                                                       | 8.x / 6.x                                          |
| lang        | typescript                                                                                                        | ~6.0 (7.x blocked: typescript-eslint peer `<6.1`)  |
| ui          | react / react-dom                                                                                                 | 19.x                                               |
| routing     | @tanstack/react-router + @tanstack/router-plugin                                                                  | 1.x (file-based, auto code-splitting)              |
| components  | shadcn/ui (style `radix-nova`, base `radix`) via `radix-ui`                                                       | CLI `shadcn@4` (devDep)                            |
| class util  | `cn` package (shadcn's clsx+tailwind-merge replacement), re-exported from `src/lib/utils.ts`                      | 0.4                                                |
| css         | tailwindcss + @tailwindcss/vite + tw-animate-css                                                                  | 4.x (CSS-first config, no tailwind.config.js)      |
| icons       | lucide-react (UI chrome), react-icons/fa6 (brand + footer icons)                                                  |                                                    |
| lint/format | eslint 10 flat config + typescript-eslint + react-hooks + react-refresh; prettier 3 + prettier-plugin-tailwindcss |                                                    |

## 3. Commands

| command                        | does                                                                  |
| ------------------------------ | --------------------------------------------------------------------- |
| `npm run dev`                  | Vite dev server (regenerates `src/routeTree.gen.ts` on route changes) |
| `npm run build`                | `tsc -b && vite build` → `dist/`                                      |
| `npm run preview`              | Serve `dist/` locally                                                 |
| `npm run typecheck`            | `tsc -b --noEmit`                                                     |
| `npm run lint`                 | `prettier --check . && eslint .`                                      |
| `npm run format`               | `prettier --write .` (also sorts Tailwind classes)                    |
| `npx shadcn@latest add <name>` | Add a shadcn component into `src/components/ui/`                      |

Definition of done for any change: `npm run typecheck && npm run lint && npm run build` all pass.
Local env note: system Node on the author's machine may be 18; a Node 24 build lives at `~/.local/node24/bin` (prepend to `PATH`).

## 4. Directory map

```
index.html                  SPA shell; inline pre-paint script adds light|dark to <html> from localStorage.theme; mounts /src/main.tsx
vite.config.ts              plugins: tanstackRouter → react → tailwindcss; alias @ → src
components.json             shadcn CLI config (aliases @/components, @/components/ui, @/lib/utils, @/hooks)
netlify.toml                build cmd, publish=dist, NODE_VERSION=24, SPA redirect /* → /index.html 200
eslint.config.js            flat config; ignores dist + routeTree.gen.ts
.vscode/                    settings.json: Tailwind IntelliSense (v4 entry src/index.css, classFunctions cn/cva, classRegex for `const *Class|*Heading|*Link = '…'`); extensions.json recommendations
public/                     static assets served at / (fonts/, company_icon/, project_icon/, about_icon/, favicon.png)
src/
  main.tsx                  createRouter({ routeTree, defaultPreload:'intent', scrollRestoration:true }); Register type; <ThemeProvider> wraps <RouterProvider>
  index.css                 Tailwind v4 entry: fonts, @theme tokens, keyframes, shadcn vars, base + component layers
  routeTree.gen.ts          GENERATED by router plugin. Never edit. Committed (needed by `tsc -b` before vite runs).
  routes/                   file-based routes (see §5)
  components/               site components (kebab-case files, named exports)
  components/ui/            shadcn-generated primitives: badge, button, card, dropdown-menu, input, label, textarea
  data/                     typed static content (see §6)
  hooks/                    use-page-ready.ts, use-media-query.ts, use-theme.ts (Theme type, ThemeContext, useTheme, THEME_STORAGE_KEY)
  lib/utils.ts              export { cn } from 'cn'
```

## 5. Routes

| path                 | file                           | staticData.loaderLabel | data source                                               | renders                                                                                                   |
| -------------------- | ------------------------------ | ---------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| (root layout)        | `routes/__root.tsx`            | n/a                    | n/a                                                       | SiteHeader, MobileNav, PageLoader gate, `<Outlet/>`, SiteFooter, devtools (DEV only), `notFoundComponent` |
| `/`                  | `routes/index.tsx`             | `Home.`                | inline                                                    | intro, PROJECTS button → /projects, 3× marquee                                                            |
| `/projects`          | `routes/projects.tsx`          | `Projects.`            | `loader` → `data/projects.ts`                             | intro, big title, ScrollHint, grid of ProjectCard                                                         |
| `/experiences`       | `routes/experiences/index.tsx` | `Experience.`          | `loader` → `data/experiences.ts`                          | intro, big title, ScrollHint, grid of ExperienceCard                                                      |
| `/experiences/$slug` | `routes/experiences/$slug.tsx` | none (no preloader)    | `loader` → `getExperience(slug)`, else `throw notFound()` | ExperienceDetail + ExperienceSidebar (tablet+) / ExperienceMenu (mobile)                                  |
| `/about`             | `routes/about.tsx`             | `About.`               | inline                                                    | AboutSection                                                                                              |
| `/contact`           | `routes/contact.tsx`           | `Contact.`             | `data/site.ts`                                            | ContactForm                                                                                               |
| anything else        | root `notFoundComponent`       | n/a                    | n/a                                                       | 404 + link home                                                                                           |

Valid slugs: `university-of-auckland`, `michael-hill`, `auckland-university-of-technology`, `china-construction-bank`, `yinling-asset-management`.
(The old Svelte site used company names with spaces as slugs; those URLs now 404.)

`staticData` is typed via module augmentation in `__root.tsx`: `interface StaticDataRouteOption { loaderLabel?: string }`.

## 6. Data schemas (`src/data/`)

- `types.ts`:
  - `Experience { slug, job_title, tenure:number(months), start:'MM/YYYY', end:'MM/YYYY'|'current', desc:HTML, image:'/company_icon/x.png', company, address }`
  - `Project { slug, name, duration, company, image:'/project_icon/x.png', github:url|'private', website:url|'private', technologies:string[], desc:HTML }`
- `experiences.ts`: `experiences: Experience[]` (display order = array order) and `getExperience(slug)`.
- `projects.ts`: `projects: Project[]`.
- `site.ts`: `site` (name, email, github, linkedin, `contactFormAction` getform URL) and `navLinks` (to/label, used by desktop + mobile nav).

Rules:

- `desc` is trusted HTML rendered through `components/rich-text.tsx` (`dangerouslySetInnerHTML`). It must never be user input. `<ul>` gets disc bullets via the `.rich-text ul` rule; `<br>` is used for paragraph gaps.
- `slug` must be lowercase-hyphenated and unique; it is the URL segment.
- Images go in `public/<folder>/` and are referenced by absolute path (`/company_icon/foo.png`).
- If either `github` or `website` is `'private'`, ProjectCard hides both buttons and shows the private notice.
- Add entry = append an object and it appears automatically on the list page, sidebar and menus. No route changes needed.

## 7. Components (`src/components/`)

| file                  | export(s)                                                  | notes                                                                                                                                              |
| --------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| page-loader.tsx       | `PageLoader({message})`                                    | fixed full-screen black overlay, z-9999, two rotating squares (`animate-loader`)                                                                   |
| site-header.tsx       | `SiteHeader`                                               | desktop nav, `hidden tablet:flex`; ModeToggle in the left slot (sr-only h1 kept)                                                                   |
| theme-provider.tsx    | `ThemeProvider({children,defaultTheme='system'})`          | shadcn Vite dark-mode pattern; persists `localStorage.theme`; sets `light`/`dark` on `<html>`; follows OS live while `system`                      |
| mode-toggle.tsx       | `ModeToggle({className})`                                  | shadcn DropdownMenu: Sun/Moon trigger (swapped via `dark:`), items Light / Dark / System with Check on active                                      |
| mobile-nav.tsx        | `MobileNav({open,onOpenChange})`                           | fixed top-left flex row: ModeToggle, then shadcn DropdownMenu trigger (List/ChevronUp); `tablet:hidden`                                            |
| site-footer.tsx       | `SiteFooter`                                               | GitHub/LinkedIn/email icons (react-icons fa6) and credit                                                                                           |
| scroll-hint.tsx       | `ScrollHint({className})`                                  | bouncing ChevronDown, laptop+ only                                                                                                                 |
| rich-text.tsx         | `RichText({html,className})`                               | the only `dangerouslySetInnerHTML` site                                                                                                            |
| project-card.tsx      | `ProjectCard({project})`                                   | shadcn Card as 3D flip card; `data-flipped` toggled by click/Enter/Space; links stopPropagation; tech links = shadcn Badge (ghost) → Google search |
| experience-card.tsx   | `ExperienceCard({experience})`                             | list tile; `<Link to="/experiences/$slug">`                                                                                                        |
| experience-detail.tsx | `ExperienceDetail({experience})`                           | detail body                                                                                                                                        |
| experience-nav.tsx    | `ExperienceSidebar`, `ExperienceMenu({open,onOpenChange})` | active item via `Link activeProps` (border-b white/20); menu is fixed top-right DropdownMenu                                                       |
| about-section.tsx     | `AboutSection`                                             | photo, contacts, 4-paragraph summary (hard-coded copy)                                                                                             |
| contact-form.tsx      | `ContactForm`                                              | shadcn Input/Textarea/Label/Button; **native** `<form method=POST action=getform>` + hidden `_gotcha` honeypot; no JS submit                       |

## 8. Behaviour: preloader / page-ready

- `hooks/use-page-ready.ts`: `LOADING_DURATION` = random int in [800, 2000] ms, computed once per page load (module scope). `usePageReady(key|null)` returns false for `LOADING_DURATION` after each new `key`. `null` means always ready.
- `__root.tsx`: `loaderLabel` = deepest match's `staticData.loaderLabel`. Key = `location.state.__TSR_key ?? href`, which is unique per navigation, so every visit replays the loader. While not ready it renders `PageLoader` and hides the Outlet (`hidden`), the footer and the mobile nav trigger.
- The loader is cosmetic (content is static). To disable it for a route, omit `loaderLabel`.
- Mobile menus: open state lives in the parent. Effective open = `open && !useMediaQuery('(min-width: 740px)')`, so crossing the tablet breakpoint auto-closes it. While a menu is open the related content gets `opacity-25`.
- `$slug` page: the detail is wrapped in `<div key={slug} className="animate-experience">` so the fade replays on sidebar navigation.

## 9. Styling system (`src/index.css`)

- **Breakpoints (replace defaults, `--breakpoint-*: initial`)**: `tablet` 740px, `laptop` 1124px, `desktop` 1560px. `sm/md/lg/xl/2xl` do NOT exist. shadcn primitives contain `md:` classes that are silently inert, which is expected.
- **Fonts** (`public/fonts`, `@font-face`) → utilities: `font-titillium`, `font-bebas`, `font-teko`. Body uses Tailwind default `font-sans`.
- **Animations** (utility → keyframes): `animate-page` (page-effect 1s), `animate-experience` (2s), `animate-experience-fast` (1s), `animate-dropdown-items`, `animate-image`, `animate-marquee` (25s linear infinite), `animate-button-effect`, `animate-loader`, `animate-loader-inner`. Keyframes are declared top-level, outside `@theme`, so they are always emitted.
- **Theme**: light (`:root`) + dark (`.dark`), choice = light | dark | system (default system), stored in `localStorage.theme`. `index.html` applies the class before paint; `ThemeProvider` manages it afterwards. `dark:` variant = `@custom-variant dark (&:is(.dark *))`.
  - Both themes: `--background: transparent` (the body gradient shows through).
  - Light: `--popover` = white/60%, `--border`/`--input` = black/15%.
  - Dark: `--card` = black, `--popover` = black/10%, `--border`/`--input` = white/20%.
- **Body background**: `var(--page-gradient)`. Light: `linear-gradient(112.1deg, #f5f5f5 11.4%, #d4d4d4 70.2%)`. Dark: `linear-gradient(112.1deg, #696969 11.4%, black 70.2%)`.
- **Colour convention**: site components use explicit Tailwind colours paired per theme, light first, original dark look as `dark:` (e.g. `text-neutral-900 dark:text-white`, `border-black/15 dark:border-white/20`, `bg-white dark:bg-black`). Any new colour needs both.
- **Radius**: `--radius-sm/md/lg` are shadcn-derived; `rounded-xl..4xl` intentionally use Tailwind defaults to preserve the original look.
- **`@layer components`**: `.flip-box*` (3D flip card: perspective, preserve-3d, backface-visibility, `[data-flipped='true']`) and `.rich-text ul`.
- Buttons get `cursor:pointer` in the base layer (Tailwind v4 removed it).
- Look-preservation convention: shadcn primitives are used for structure/a11y, then restyled with className overrides (e.g. `h-auto`, `ring-0`, `bg-transparent`, `rounded-none`) to match the original Svelte design. `cn()` merges, so the last class wins.

## 10. Conventions

- TSX only. Named exports. kebab-case filenames. Imports via `@/…`; import order: external, blank line, internal.
- Prettier: tabs, single quotes, no trailing commas, width 100, Tailwind class sorting. Run `npm run format`.
- shadcn components: add via CLI only; keep `src/components/ui/*` close to upstream (theming via CSS vars or call-site `className`).
- New route = new file in `src/routes/`, export `const Route = createFileRoute('<path>')({...})`. Add `staticData.loaderLabel` if it should show the preloader. Add it to `navLinks` in `data/site.ts` if it belongs in the nav.
- Never hand-edit `src/routeTree.gen.ts`.
- ESLint `react-refresh/only-export-components` is off for `src/routes/**` and `src/components/ui/**`.
- External links: `target="_blank" rel="noreferrer"`.

## 11. Deployment

- Netlify builds from the repo: `npm run build` → publish `dist`. `NODE_VERSION=24`.
- SPA fallback redirect in `netlify.toml` is required for deep links / refresh.
- Contact form → getform.io (`site.contactFormAction`); no server code in this repo.

## 12. Gotchas

- `overflow-hidden` on the flip card flattens `preserve-3d`, so ProjectCard's Card must keep `overflow-visible`.
- Tailwind v4 default border color is `currentColor` (v3 was gray-200); set border colors explicitly.
- `tsc -b` runs before `vite build`, so `routeTree.gen.ts` must exist (it's committed). After adding or removing routes, run `npm run dev` or `npx vite build` once to regenerate it.
- TypeScript 7 is not yet supported by typescript-eslint. Keep `typescript@~6.0` until it is.
- Unused legacy images remain in `public/` (e.g. `company_icon/{Facebook,amazon,apple,google,spaceX,tencent}.png`, `project_icon/project1..10.png`, `about_icon/john.png`); safe to delete.
