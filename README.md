# Heritage Electric

Astro 7 + Tailwind 4. Static output, no runtime dependencies.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## How the theme template works

The design is a corporate-editorial system: full-bleed dark hero, restrained
type at large sizes, hairline rules between blocks, spacious vertical rhythm,
and quiet scroll reveals. It is built to be reused across landing pages.

There are three layers, and they are deliberately separate.

### 1. Tokens — `src/styles/theme.css`

Every colour, font, type step, spacing value and easing curve is a token in the
`@theme` block at the top of the file. To rebrand a landing page, change tokens
only. Nothing downstream hardcodes a value.

| Token group | What it controls |
| --- | --- |
| `--color-ink*` | Text and dark section backgrounds |
| `--color-paper*` | Page and alternate section backgrounds |
| `--color-accent*` | The single accent. Currently brass, chosen for a lighting business |
| `--color-line*` | Hairline rules, light and dark variants |
| `--text-display`, `--text-h2`, `--text-h3`, `--text-lead` | Fluid type scale, all `clamp()` |
| `--spacing-section`, `--spacing-gutter` | Vertical rhythm and page gutter |
| `--ease-out-soft`, `--ease-out-back` | Motion curves |

### 2. Primitives — also `theme.css`, `@layer components`

Composable classes the components build from: `.shell`, `.shell-narrow`,
`.eyebrow`, `.display`, `.heading`, `.lead`, `.btn` with `.btn-primary` and
`.btn-ghost`, `.rule`, and `.on-dark`.

`.on-dark` is the important one. Put it on any section wrapper and that section
inverts to the dark palette, including its rules, leads and eyebrows. That is
how the page alternates light and dark without duplicating styles.

### 3. Content — `src/data/site.ts`

All copy lives in one typed file. Components read from it and never hardcode
text. **To spin up another landing page with this theme, copy `site.ts`, change
the values, and reuse the components as they are.**

## Components

| Component | Purpose |
| --- | --- |
| `Reveal.astro` | Scroll-reveal wrapper. `delay` prop staggers siblings |
| `SectionHead.astro` | Eyebrow + heading + lead, the standard section opener |
| `SiteHeader.astro` | Transparent over the hero, solid once scrolled past 80px |
| `Hero.astro` | Full-bleed dark hero, `92svh` |
| `StatBand.astro` | Three-up figure band |
| `ServiceGrid.astro` | Numbered 4-column grid, 2-up on tablet, 1-up on mobile |
| `LightingControl.astro` | Dark split feature, text left, visual right |
| `WhyUs.astro` | Two-column with a ruled list |
| `About.astro` | Two-column narrative plus partner list |
| `ServiceArea.astro` | Five-column ruled place list |
| `ContactBand.astro` | Dark CTA with a definition list |
| `SiteFooter.astro` | Legal name, nav, copyright, licence slot |

## Accessibility and motion

- Skip-to-content link, visible on focus
- `:focus-visible` outlines everywhere, never removed
- `prefers-reduced-motion` fully honoured: reveals render instantly, smooth
  scroll is disabled
- Reveals fall back to visible when IntersectionObserver is unavailable, so the
  page is never blank without JS
- Touch targets are 48px minimum via `.btn`
- Verified at 390px and 1440px

## Two things to know before launch

1. **Photography.** Two slots are marked with comments in `Hero.astro` and
   `LightingControl.astro`. Both currently render CSS placeholders that are
   designed to look intentional, but real photographs of finished work will
   carry this design far better than the placeholders do.

2. **CSLB licence.** `site.licenseNumber` in `src/data/site.ts` is `null`
   because the licence is currently inactive. The footer renders nothing while
   it is null. Set it to the number once the licence is reactivated and the
   footer picks it up automatically.

## Design provenance

The layout system was derived from the corporate-editorial pattern recommended
by the `ui-ux-pro-max` skill (Swiss Modernism 2.0, spacious density, standard
motion tier), not from a scan of a reference site. See the session notes: the
intended reference at aramco.com was unreachable from the build environment.
The accent colour was overridden from the skill's suggested pink to brass,
which suits a lighting contractor.
