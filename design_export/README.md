# Cherry Design System

> *Let's talk money.*
> Cherry is a non-profit (e.V.) based in Hamburg that empowers young women to start investing — through free workshops, 1:1 money-mindset coaching, and a community membership. The brand voice is warm, direct, feminist, and confident; **visually the system is modern fintech (.io / N26-class) — clean white canvas, bold geometric sans, generous whitespace, cherry red as the signal accent.** A single italic serif word can appear inside a hero as a moment of warmth, but the system is *not* editorial / retro.

This repository is the **single source of truth** for Cherry's brand: colors, type, content tone, photography direction, components, and a working website UI kit.

---

## Index

| File / Folder | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual fundamentals, iconography. |
| `SKILL.md` | Agent-readable skill manifest. Drop the folder into Claude Code as a Skill. |
| `colors_and_type.css` | All color & typography tokens — both raw (`--cherry-500`) and semantic (`--accent`, `.display`, `.lead`). |
| `spacing.css` | Spacing scale, radii, shadows, motion easings, container widths. |
| `assets/` | Logos, photography, hero crops, reference screenshots. |
| `content/` | Source copy from the brand (`home-page-text.md`). |
| `preview/` | Design-system specimen cards (registered as assets — see Design System tab). |
| `ui_kits/website/` | High-fidelity recreation of the Cherry Collective marketing site. |

---

## Sources

- **Live site (current state):** [cherrycollective.org](https://www.cherrycollective.org) — desktop + mobile screenshots in `assets/reference-*.png`.
- **GitHub:** `connilefleur/cherrycollective@main` — repo is currently a stub (`README.md` only, no source). Brand was reverse-engineered from screenshots and the home-page copy doc.
- **Home-page copy:** `content/home-page-text.md` (German). All sample copy in this system is taken verbatim from there.
- **Photography reference:** `Website_Images_1.jpeg`, `Website_Images_2.jpeg` — sliced into individual portraits in `assets/photo-set*-*.jpg`.
- **Inspiration archive:** `Inspiration.tar.gz` was uploaded but unreadable in this environment. The user described the inspiration as *"modern, platform-y, clean."* Re-attach if needed.

---

## Brand at a glance

| | |
|---|---|
| **Name** | Cherry e.V. (sometimes "Cherry Collective") |
| **Tagline** | *Let's talk money.* |
| **Mission** | Close the investment gap between men and women — *eine Cherry nach der anderen* (one Cherry at a time). |
| **Audience** | Young women in Germany, age ~20–35, early in their career, no prior investing experience. |
| **Tone** | Warm, direct, confident, *du* (informal you), feminist, never preachy or finance-bro. |
| **Language** | German (primary). English tagline ("Let's talk money") used as wordmark. |
| **Format** | Free 4-hour workshop over 3 evenings + 1:1 money-mindset coaching session. 14 seats per cohort. |
| **Legal** | Cherry e.V., eingetragener gemeinnütziger Verein, Hamburg. |

---

## Content fundamentals

Cherry's voice is the brand's most distinctive asset. It is **conversational German with editorial precision** — short, declarative sentences that read like a knowing friend, not a bank.

### Voice pillars
1. **Direct & confident.** "Es gibt eine Investitionslücke. Du kannst sie schließen." Two short sentences. No hedging.
2. **Inclusive *du* (informal you), never *Sie*.** Cherry talks *with* women, never down to them.
3. **Plain-language finance.** ETFs and Sparpläne are explained without jargon, never patronizingly. *"Keine dummen Fragen. Nur der Entschluss, anzufangen."*
4. **Feminist solidarity, not anger.** The injustice is named clearly ("Mein Bruder bekam Aktien. Ich bekam eine Perlenkette.") and answered with action, not outrage.
5. **First-person founder voice in long-form.** The "Über uns" section is signed personal essays from Katja, Alice and Charlotte — vulnerable, specific, anecdotal.

### Casing & punctuation
- **Sentence case** for all UI and headlines, except the wordmark `CHERRY` (all-caps) and the eyebrow band `CHERRY — LET'S TALK MONEY` (all-caps, em-dash separator).
- **Em-dash (—)** is a brand signature — used in copy, eyebrows, and lists. Always with surrounding spaces.
- **Italics for emotional emphasis** in display type: *money*, *Eine fängt an. Viele folgen.*, *je früher, desto besser.*
- **Bold** for nouns and numbers in body copy: **14 Plätze**, **kostenlos**, **gemeinnützige Organisation**.
- **No emoji.** Cherry uses text only — the cherry mark itself is the only "emoji-like" graphic.
- **Arrow glyph `→`** for list bullets in long-form pages ("Ist Cherry für dich?").

### Vocabulary signatures
- *Investitionslücke* (investment gap) — the named villain
- *Eine fängt an. Viele folgen.* — recurring rallying cry
- *Cherry nach der anderen* — pacing metaphor
- *Money Mindset Coaching* — capitalized, retains English
- *Let's talk money* — English tagline, kept English even in German contexts
- Members are **Cherries** (capital C, plural). New members are **Young Cherry** (under 25) or **Cherry** (25+).

### Examples (verbatim from `content/home-page-text.md`)
> Es gibt eine Investitionslücke. Du kannst sie schließen.

> Cherry ist eine **gemeinnützige Organisation** — gegründet von Frauen, für Frauen. Alles, was wir anbieten, ist kostenlos. Keine versteckten Kosten, kein Kleingedrucktes, keine Bank im Hintergrund.

> Kein Druck. Keine Verpflichtung. Nur ein erster Schritt.

> *Eine fängt an. Viele folgen.*

---

## Visual foundations

### Color
Cherry's palette is built around **one bold cherry red as the signal accent** on a **clean white canvas**, with **near-black** for primary text and a small set of **subtly-warm neutrals** for surfaces and dividers. Modern fintech, not retro.

- **Primary:** `--cherry-500` `#f31a09` — buttons, links, the wordmark, the cherry icon.
- **Page background:** `--neutral-0` `#ffffff` — clean white. Default body bg.
- **Soft surfaces:** `--neutral-25` `#fbfaf9` and `--neutral-50` `#f5f3f1` for alt sections and cards.
- **Deep:** `--neutral-900` `#0e0d0c` — near-black, very subtly warm. Used for primary text and the optional dark hero panel.

Neutrals are *very slightly* warm (a hair off pure cool grey) so they sit comfortably with cherry red — but they read as modern grey, not cream.

### Type
One typeface does almost all the work:

- **Sans (display + body):** **Inter** — clean, modern, geometric grotesque used for everything: hero, headlines, UI, body, forms. Big sizes are set **bold (700) with very tight letterspacing (-0.04em)** for that confident fintech-display feel.
- **Serif italic accent:** **Instrument Serif** italic — used **for a single emphasized word** inside an otherwise sans display, e.g. *"Investing made for women."* This is the only place a serif appears in the whole system. Optional — many headlines have no italic accent at all.
- **Mono:** ui-monospace stack — for numerics in tables (returns, contributions, etc).

*Brand reference:* the live site appears to use a custom display serif; we have intentionally moved away from that toward a modern fintech wordmark. **FLAG → confirm this direction with brand owner.**

### Spacing & layout
- **4-pt grid.** All tokens in `spacing.css`.
- **Generous vertical rhythm.** Cherry sections breathe — typical section is `--space-9` (96px) of vertical padding.
- **Container widths:** narrow (720) for forms, text (880) for long-form, wide (1200) for marketing pages.
- **Gutters:** clamp(20px, 4vw, 48px) — comfortable on mobile, expansive on desktop.

### Backgrounds & imagery
- **The canvas is white.** Sections alternate between `--bg` (white) and `--bg-soft` / `--bg-muted` (near-white) — never cream or paper texture.
- **Photography is used selectively, in *contained* surfaces** — a hero card, a feature panel, a portrait inside a quote — rather than full-bleed editorial. Hero is a **white page with a single bold cherry-red panel or large product visual**, not a photo washed in oxblood.
- **No gradients, no glassmorphism, no patterns, no textures.** Trust comes from clarity.
- **Photography mood:** natural light, candid, real women going about real life. Same source material as before, but treated cleanly (no warm overlay tints, no grain effects). When used as decoration, photos sit inside rounded rectangles.

### Borders, shadows, transparency
- **Borders are subtle neutral hairlines** (`--neutral-100`). Cards lean on a hairline border *or* a soft shadow, rarely both.
- **Shadows are neutral and minimal.** `--shadow-sm` for default cards, `--shadow-md` for floating elements, `--shadow-lg` for modals. No coloured shadows.
- **No transparency, no frosted blur** in standard surfaces. Trust = solid, opaque, predictable.
- **Inner shadows / insets** are not used.

### Corner radii
- **Pill (`--radius-pill` / 999px)** — buttons, tags, badges. The signature button shape.
- `--radius-2xl` (24px) — hero cards, big feature panels.
- `--radius-xl` (16px) — content cards, modals.
- `--radius-lg` (12px) — inputs, form fields, small cards.
- `--radius-md` (8px) — chips, small UI surfaces.
A fintech rule of thumb: **radii get larger as the surface gets bigger.**

### Buttons
- **Primary:** filled cherry red, white text, **fully pill**, no border, no shadow. Generous horizontal padding (~28px). Hover: slightly darker red (`--accent-hover`). Press: deeper red. **No scale, no shadow elevation.**
- **Secondary (filled dark):** filled near-black `--neutral-900`, white text, pill — used as a quieter primary on white sections.
- **Tertiary (outline):** transparent, 1px `--neutral-200` border, `--fg` text, pill — used as a third-rank action.
- **Ghost (on deep):** transparent, 1px white-translucent border, white text — used on dark/cherry hero panels.
- All buttons are **pill-shape** by default.

### Hover & press states
- **Links:** color shift only — `--link` → `--link-hover`. No underline animation.
- **Buttons:** color shift only — *no scale, no shadow elevation*. Cherry is restrained, not playful.
- **Cards:** subtle elevation (`--shadow-soft` → `--shadow-lift`) on hover, 240ms ease-out.
- **No press-shrink animation.** No bouncy springs. Cherry's motion is *gentle and intentional*.

### Motion
- **Easings:** `--ease-out` for entrances, `--ease-soft` for everyday transitions.
- **Durations:** 150ms (fast / hover), 240ms (default), 420ms (slow / page transitions).
- **No autoplaying carousels, no scroll-jacking, no hero text flashes.** The hero photo *is* the motion.

### Layout rules
- **Sticky white header** with a hairline bottom border. No drape, no overlay tint.
- **Logo always top-left.** Primary CTA ("Jetzt mitmachen") pinned top-right as a small pill.
- **Footer is near-black (`--bg-deep`)** with white type and a small cherry-red mark — inverts the white page.
- **Forms are vertical, generous, label-on-top.** Inputs use `--radius-lg` (12px), not pill — pill is reserved for buttons in this system.

---

## Iconography

Cherry's iconographic language is **almost absent on purpose.** The brand makes its case in *type and photography*; icons would compete with the editorial restraint.

- **The cherry mark** (two filled circles + linked stems) is the only proprietary icon. It appears next to the `CHERRY` wordmark in the header and as the standalone footer mark. SVG: `assets/logo-cherry.svg`, `assets/logo-cherry-mark.svg`.
- **No emoji.** Anywhere.
- **No icon font** in the system. No Lucide / Heroicons / Material Icons sprinkled into UI.
- **Unicode glyphs are used as ornaments**, not icons:
  - `→` arrows for list bullets ("Ist Cherry für dich?" page)
  - `—` em-dashes throughout copy
  - `*` italic asterisk-style emphasis is rare; Cherry prefers italic display type instead.
- **If an icon is genuinely needed** (e.g. a future app: settings cog, search, close), use **Lucide** (1.5px stroke, rounded line caps) at currentColor. This matches the brand's hairline-warm aesthetic.
  - **FLAG:** This is a system-wide convention I'm proposing — no live source confirms it. Confirm with the brand owner before shipping.
- **Form indicators** (waitlist counter, cohort progress) are rendered as **typography**, not icons — *"5 von 14 Plätzen noch frei."*

### Logo files
- `assets/logo-cherry.svg` — full mark (cherries + stems + leaf), `currentColor`.
- `assets/logo-cherry-mark.svg` — compact mark for inline use.

The wordmark `CHERRY` is **set in the body grotesque (Inter)**, all-caps, semibold, letterspaced. It is *not* a custom-drawn wordmark — it is type. **FLAG → confirm whether the production wordmark is custom-drawn.**

---

## Caveats & open questions

1. **Production fonts are unconfirmed.** Display ≈ Fraunces (substitute for what is likely GT Sectra / Italiana). Body ≈ Inter (substitute for a Söhne/Neue Haas-class grotesque). Real font files needed.
2. **The GitHub repo is empty** — no source code was available to reverse-engineer. UI kit is built from the screenshot reference + copy doc.
3. **The Inspiration archive (`Inspiration.tar.gz`) was unreadable** in this environment. Brand owner described it as "modern, platform-y, clean."
4. **Logo is reconstructed from the screenshot** — the official vector mark may differ. Replace `assets/logo-cherry.svg` when the source is provided.
5. **Logo & illustration assets are minimal.** Cherry's brand is in the *photography* and the *type*; if a richer illustration system is desired, it does not exist yet.
