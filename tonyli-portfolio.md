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
| type    | Client-side SPA (no SSR, no server functions, no env vars); single editorial home page; light / dark / system     |
| history | Migrated from SvelteKit 2 / Svelte 4 / Tailwind 3 → React 19 / TanStack Router / shadcn/ui / Tailwind 4 (2026-09) |
| design  | Redesigned 2026-09: editorial single page, flat, minimal motion, blue accent                                      |

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
| icons       | lucide-react (UI chrome); react-icons still installed but currently unused                                        |                                                    |
| fonts       | @fontsource-variable/funnel-display, /space-grotesk, /archivo (imported in `main.tsx`)                            | 5.x                                                |
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
public/                     static assets served at / (company_icon/, project_icon/, about_icon/, favicon.png; fonts/ is legacy)
src/
  main.tsx                  fontsource imports; createRouter({ routeTree, defaultPreload:'intent', scrollRestoration:true, defaultHashScrollIntoView:{behavior:'smooth'} }); Register type; <ThemeProvider> wraps <RouterProvider>
  index.css                 Tailwind v4 entry: @theme tokens, type-* utilities, colour tokens + shadcn mapping, base + component layers, reduced-motion rules
  routeTree.gen.ts          GENERATED by router plugin. Never edit. Committed (needed by `tsc -b` before vite runs).
  routes/                   file-based routes (see §5)
  components/               site components (kebab-case files, named exports)
  components/sections/      home page sections: hero, tech-marquee, work-section, project-row, experience-section, skills-section
  components/ui/            shadcn-generated primitives: badge, button, card, dropdown-menu, input, label, textarea
  data/                     typed static content (see §6)
  hooks/                    use-reveal.ts, use-media-query.ts, use-section-hash-sync.ts, use-theme.ts (Theme type, ThemeContext, useTheme, THEME_STORAGE_KEY)
  lib/utils.ts              export { cn } from 'cn'
```

## 5. Routes

| path                 | file                           | data source                                               | renders                                                                                                                                                                                                   |
| -------------------- | ------------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root layout)        | `routes/__root.tsx`            | n/a                                                       | SiteHeader, `<main><Outlet/></main>`, SiteFooter, devtools (DEV only), `notFoundComponent`                                                                                                                |
| `/`                  | `routes/index.tsx`             | `data/*` imported by sections                             | `useSectionHashSync(navLinks hashes)`; Hero (`#top`), TechMarquee, WorkSection (`#work`), ExperienceSection (`#experience`), AboutSection (`#about`), SkillsSection (`#skills`), ContactForm (`#contact`) |
| `/experiences/$slug` | `routes/experiences/$slug.tsx` | `loader` → `getExperience(slug)`, else `throw notFound()` | back link → `/#experience`, ExperienceDetail, OtherRoles (sticky on laptop+)                                                                                                                              |
| `/projects`          | `routes/projects.tsx`          | n/a                                                       | `beforeLoad` → `redirect({ to:'/', hash:'work', replace:true })`                                                                                                                                          |
| `/experiences`       | `routes/experiences/index.tsx` | n/a                                                       | redirect → `/#experience`                                                                                                                                                                                 |
| `/about`             | `routes/about.tsx`             | n/a                                                       | redirect → `/#about`                                                                                                                                                                                      |
| `/skills`            | `routes/skills.tsx`            | n/a                                                       | redirect → `/#skills`                                                                                                                                                                                     |
| `/contact`           | `routes/contact.tsx`           | n/a                                                       | redirect → `/#contact`                                                                                                                                                                                    |
| anything else        | root `notFoundComponent`       | n/a                                                       | 404 + link home                                                                                                                                                                                           |

Valid slugs: `university-of-auckland`, `michael-hill`, `auckland-university-of-technology`, `china-construction-bank`, `yinling-asset-management`.
(The old Svelte site used company names with spaces as slugs; those URLs now 404.)

Section links use `<Link to="/" hash="work">`; sections carry `scroll-mt-16` so the sticky 64px header doesn't cover them.

## 6. Data schemas (`src/data/`)

- `types.ts`:
  - `Experience { slug, job_title, tenure:number(months), start:'MM/YYYY', end:'MM/YYYY'|'current', desc:HTML, image:'/company_icon/x.png', company, address }`
  - `Project { slug, name, duration, company, image:'/project_icon/x.png', github:url|'private', website:url|'private', technologies:string[], desc:HTML }`
- `experiences.ts`: `experiences: Experience[]` (display order = array order) and `getExperience(slug)`.
- `projects.ts`: `projects: Project[]`.
- `site.ts`: `site` (name, wordmark, role, location, tagline, email, github, linkedin, `contactFormAction` getform URL), `navLinks` (`{hash,label}`, hash = section id; used by header + mobile menu), `SectionHash` type, `skills` (numbered skillset in SkillsSection).

Rules:

- `desc` is trusted HTML rendered through `components/rich-text.tsx` (`dangerouslySetInnerHTML`). It must never be user input. `<ul>` gets disc bullets via the `.rich-text ul` rule; `<br>` is used for paragraph gaps.
- `slug` must be lowercase-hyphenated and unique; it is the URL segment.
- Images go in `public/<folder>/` and are referenced by absolute path (`/company_icon/foo.png`).
- If either `github` or `website` is `'private'`, ProjectRow hides both links and shows the private notice.
- Add entry = append an object and it appears automatically in the home sections, the tech marquee (technologies are deduped) and the OtherRoles list. No route changes needed.

## 7. Components (`src/components/`)

| file                            | export(s)                                         | notes                                                                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site-header.tsx                 | `SiteHeader`                                      | sticky, `bg-canvas/85` + blur, hairline. Left: ModeToggle (top-left corner) + wordmark (→ `#top`). Right (tablet+): nav (+ email at laptop+). Mobile: DropdownMenu hamburger on the right; open state auto-closes at tablet via `useMediaQuery` |
| mode-toggle.tsx                 | `ModeToggle({className})`                         | shadcn DropdownMenu: bordered Sun/Moon trigger (swapped via `dark:`), items Light / Dark / System with brand Check on active                                                                                                                    |
| theme-provider.tsx              | `ThemeProvider({children,defaultTheme='system'})` | shadcn Vite dark-mode pattern; persists `localStorage.theme`; sets `light`/`dark` on `<html>`; follows OS live while `system`                                                                                                                   |
| section-heading.tsx             | `SectionHeading({index,label,children})`          | "01 — Work" label (index in brand) above a `type-section` h2                                                                                                                                                                                    |
| sections/hero.tsx               | `Hero`                                            | `#top`; status labels, `type-display` name (last word brand), intro, text CTAs to `#work` / `#contact`                                                                                                                                          |
| sections/tech-marquee.tsx       | `TechMarquee`                                     | deduped `projects[].technologies`, two `aria-hidden` copies, `animate-marquee` (40s), ✦ separators                                                                                                                                              |
| sections/work-section.tsx       | `WorkSection`                                     | `#work`; holds `activeIndex`; laptop+: list + sticky preview image of the active project                                                                                                                                                        |
| sections/project-row.tsx        | `ProjectRow({project,index,active,onActivate})`   | hover/focus activates; inactive rows `laptop:opacity-45`, active title brand; image inline below laptop; meta, tech chips, links or private notice; native `<details>` for `desc`                                                               |
| sections/experience-section.tsx | `ExperienceSection`                               | `#experience`; hairline rows, whole row = `<Link to="/experiences/$slug">`                                                                                                                                                                      |
| about-section.tsx               | `AboutSection`                                    | `#about`; `.surface-night` inverted block: photo, 4-paragraph summary (hard-coded copy)                                                                                                                                                         |
| sections/skills-section.tsx     | `SkillsSection`                                   | `#skills`; numbered `skills` grid (1 / 2 / 4 cols) between hairlines                                                                                                                                                                            |
| contact-form.tsx                | `ContactForm`                                     | `#contact`; shadcn Input/Textarea/Label/Button, underline fields; **native** `<form method=POST action=getform>`; off-screen text `_gotcha` honeypot + 3s time trap in `onSubmit` (preventDefault only for bots)                                |
| experience-detail.tsx           | `ExperienceDetail({experience})`                  | `type-section` title, facts `<dl>`, logo on white square, RichText desc                                                                                                                                                                         |
| experience-nav.tsx              | `OtherRoles({className})`                         | hairline list of all roles; active via `Link activeProps` (brand + `aria-current`)                                                                                                                                                              |
| site-footer.tsx                 | `SiteFooter`                                      | faded wordmark, tagline, social text links, © and PNGWING credit                                                                                                                                                                                |
| rich-text.tsx                   | `RichText({html,className})`                      | the only `dangerouslySetInnerHTML` site                                                                                                                                                                                                         |

## 8. Behaviour: navigation / motion

- No preloader (removed in the redesign). `hooks/use-reveal.ts`: `useReveal<T>()` returns a ref; put `data-reveal` on the element and an IntersectionObserver sets `data-revealed` once (fade-up 700ms, CSS in `index.css`). Used by the home sections.
- Hash navigation: the router's `defaultHashScrollIntoView: { behavior: 'smooth' }` scrolls to `#work` etc., including from `/experiences/$slug` back to `/`.
- Scroll-spy: `hooks/use-section-hash-sync.ts` (called in `HomePage`) replaces the URL hash with the section in view on scroll (`replace`, `resetScroll:false`, `hashScrollIntoView:false`; cleared above `#work`; last section wins at page bottom). Without it the hash goes stale and re-clicking the same nav link is a same-location no-op.
- `prefers-reduced-motion: reduce` disables smooth scroll, reveal transitions and the marquee (rules at the bottom of `index.css`).
- `$slug` page: the detail is wrapped in `<div key={slug} className="animate-in fade-in">` (tw-animate-css) so the fade replays when switching roles.

## 9. Styling system (`src/index.css`)

Design language: editorial and typographic, flat (no shadows, `--radius: 0`), 1px `border-line` hairlines between blocks, generous whitespace, numbered labels (`01 —`), text-first links (uppercase `type-label`, `↗` / `→`, hover → `text-brand`), a single blue accent. Content width `max-w-[1600px]`, gutters `px-4 tablet:px-8 laptop:px-12`, section padding `py-20 laptop:py-32`.

- **Breakpoints (replace defaults, `--breakpoint-*: initial`)**: `tablet` 740px, `laptop` 1124px, `desktop` 1560px. `sm/md/lg/xl/2xl` do NOT exist. shadcn primitives contain `md:` classes that are silently inert, which is expected.
- **Fonts**: `font-sans` = Archivo (body), `font-display` = Funnel Display (headings), `font-grotesk` = Space Grotesk (labels, nav, numbers).
- **Type scale** (`@utility`, fluid clamps): `type-display`, `type-section`, `type-project` (all Funnel Display, tight tracking), `type-body-lg`, `type-body`, `type-label` (Space Grotesk, uppercase, +0.06em). They are named `type-*` on purpose: tailwind-merge (`cn`) would treat an unknown `text-foo` as a colour and drop it next to `text-brand`.
- **Colour tokens** (`bg-*/text-*/border-*`):

  | token                                      | light     | dark      |
  | ------------------------------------------ | --------- | --------- |
  | `canvas` (page bg)                         | `#efeeeb` | `#0a0a0a` |
  | `ink` (text)                               | `#0a0a0a` | `#efeeeb` |
  | `muted-foreground` (2nd text)              | `#6b6862` | `#8e8b85` |
  | `line` (hairlines)                         | ink / 15% | ink / 15% |
  | `brand` (blue accent)                      | `#2447f5` | `#6b8cff` |
  | `muted` / `accent` (shadcn hover surfaces) | ink / 6%  | ink / 8%  |

  shadcn vars map onto these (`--background`=canvas, `--foreground`=ink, `--primary`=brand, `--border`/`--input`=line, `--ring`=brand, `--popover`/`--card`=canvas). **Don't use `accent` for the blue**: in shadcn it is the hover surface; the blue is `brand`.

- **Theme**: light (`:root`) + dark (`.dark`), choice = light | dark | system (default system), stored in `localStorage.theme`. `index.html` applies the class before paint; `ThemeProvider` manages it afterwards. `dark:` variant = `@custom-variant dark (&:is(.dark *))`. Components use the tokens above, so most need no `dark:` classes.
- **`.surface-night`** (components layer): re-points `--canvas/--ink/--line/--brand/--muted-foreground` to an inverted palette so children keep using the same utilities (AboutSection). Its bg is `#141414` in dark mode, plus `dark:border-y`.
- **Motion**: `animate-marquee` (40s linear), `[data-reveal]` fade-up, ~300ms colour/opacity transitions, tw-animate-css `animate-in fade-in` for image/detail swaps. No other keyframes. All disabled under reduced motion.
- **`@layer components`**: `.surface-night`, `[data-reveal]`, `.rich-text ul` (disc bullets), `.rich-text br` (paragraph gap).
- Buttons, `[role=button]` and `summary` get `cursor:pointer` in the base layer. shadcn DropdownMenuItems need `cursor-pointer` at the call site (upstream sets `cursor-default`).

## 10. Conventions

- TSX only. Named exports. kebab-case filenames. Imports via `@/…`; import order: external, blank line, internal.
- Prettier: tabs, single quotes, no trailing commas, width 100, Tailwind class sorting. Run `npm run format`.
- shadcn components: add via CLI only; keep `src/components/ui/*` close to upstream (theming via CSS vars or call-site `className`).
- New route = new file in `src/routes/`, export `const Route = createFileRoute('<path>')({...})`. New home section = component in `components/sections/` with an `id`, `scroll-mt-16` and `useReveal`, plus a `navLinks` entry in `data/site.ts` if it belongs in the nav.
- Never hand-edit `src/routeTree.gen.ts`.
- ESLint `react-refresh/only-export-components` is off for `src/routes/**` and `src/components/ui/**`.
- External links: `target="_blank" rel="noreferrer"`.

## 11. Deployment

- Netlify builds from the repo: `npm run build` → publish `dist`. `NODE_VERSION=24`.
- SPA fallback redirect in `netlify.toml` is required for deep links / refresh.
- Contact form → getform.io (`site.contactFormAction`); no server code in this repo.

## 12. Gotchas

- Tailwind v4 default border color is `currentColor` (v3 was gray-200); set border colors explicitly.
- `tsc -b` runs before `vite build`, so `routeTree.gen.ts` must exist (it's committed). After adding or removing routes, run `npm run dev` or `npx vite build` once to regenerate it.
- TypeScript 7 is not yet supported by typescript-eslint. Keep `typescript@~6.0` until it is.
- Unused legacy files remain in `public/` (e.g. `fonts/*` Titillium/Bebas/Teko, `company_icon/{Facebook,amazon,apple,google,spaceX,tencent}.png`, `project_icon/project1..10.png`, `about_icon/john.png`); safe to delete.
- `react-icons` is no longer imported anywhere (the footer uses text links); it can be uninstalled.
