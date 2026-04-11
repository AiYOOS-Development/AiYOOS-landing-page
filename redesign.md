# AiYOOS Landing Page — Design Taste Audit Diff

Audit baseline: DESIGN_VARIANCE 8 · MOTION_INTENSITY 6 · VISUAL_DENSITY 4

---

## 1. Typography

**Files changed:** `index.html`, `about/index.html`, `privacy/index.html`, `terms-of-use/index.html`, `security-compliance/index.html`

| Before | After |
|---|---|
| `Inter` (body) + `Source Serif 4` (display) | `Outfit` for both — single typeface, weight-differentiated |
| `--font-serif` + `--font-sans` CSS vars | Single `--font-sans: 'Outfit', sans-serif` var |
| `.font-serif-display { font-family: serif }` | `.font-serif-display { font-family: Outfit; font-weight: 800 }` |
| Serif `font-family` on content `h2` rules (all subpages) | Removed — inherits Outfit from body |
| Google Fonts: two families, two requests | Google Fonts: one family (`Outfit:wght@300;400;500;600;700;800;900`) |

**Why:** Inter is an explicit audit ban. Serif fonts on a tech product UI are banned. Outfit at weight 800 replaces the visual differentiation previously achieved by typeface contrast.

---

## 2. Hero Layout

**File changed:** `index.html`

| Before | After |
|---|---|
| `max-w-4xl mx-auto text-center` — fully centered | `max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20` — split-screen |
| Text, form, demo all center-stacked | Left column: headline + form + badges; Right column: demo UI |
| `h-screen` (mobile unsafe) | `min-h-[100dvh]` (iOS Safari safe) |
| Unsplash background image at 80–95% opacity overlay | Removed; plain `#F8FAFC` background |
| Gradient text on H1 (`linear-gradient` fill) | `text-blue-700` plain color on "Start Finding." |
| `.gradient-text` CSS rule | Deleted |
| Demo UI below hero content, full 4-col width | Demo UI in right column, trimmed to preview size |
| Answer content: 3 full bullets + 2 paragraphs | Answer content: 2 full bullets + 1 faded third + bottom fade overlay |
| `shadow-2xl shadow-slate-200/40` on demo card | `shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]` diffusion shadow |
| Join Waitlist button: no tactile feedback | `active:scale-[0.98]` on all CTA buttons |

---

## 3. Features Section Grid

**File changed:** `index.html`

| Before | After |
|---|---|
| `grid grid-cols-1 md:grid-cols-3 gap-8` — 3 equal cards | `grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16` — asymmetric 2-col |
| Centered section title (`text-center mb-16`) | Left-pinned sticky label column (`lg:sticky lg:top-24`) |
| 3× `p-8 rounded-2xl border` card containers | `divide-y divide-slate-100` rows — no card boxes |
| Card hover: border color + background fill | Row hover: `translateX(6px)` spring easing (`cubic-bezier(0.16,1,0.3,1)`) |
| "Capabilities" as plain uppercase `<span>` | Pill (`bg-slate-100 border-slate-200 text-slate-600`) with `ph:stack-bold` icon |
| Icon size: `w-14 h-14` | Icon size: `w-11 h-11` |
| Body text: `text-slate-600` | Body text: `text-slate-500` |
| Right column aligned to top of section (pill level) | Right column `lg:pt-11` — aligns with H2, not pill |
| Feature 1 `first:pt-0` (pseudo-variant, unreliable) | Explicit `pt-0 pb-10` on Feature 1 |

---

## 4. Palette

**Files changed:** `index.html`, `about/index.html`, `privacy/index.html`, `terms-of-use/index.html`, `security-compliance/index.html`

### Mesh background (all 5 files)
| Before | After |
|---|---|
| Two radials: blue-500 at 8% + **indigo-500 at 6%** | Single radial: blue-600 at 5%, repositioned to top-right |

### Toggle switch (index.html)
| Before | After |
|---|---|
| `#1E40AF` (blue-800, off-palette) | `#2563EB` (blue-600, consistent with accent) |

### CTA section (index.html)
| Before | After |
|---|---|
| `bg-blue-600` flat saturated block | `bg-blue-800` with white radial at 6% for depth |
| `max-w-3xl mx-auto text-center` | `max-w-7xl grid grid-cols-1 lg:grid-cols-2` split |
| Centered heading + centered form | Headline left-pinned, form right-aligned on desktop |
| `text-blue-100/200` body text | `text-blue-200` |
| `bg-white text-blue-600` submit button | `bg-white text-blue-900` |
| "Your data stays private." subtext | "No advertising model. AES-256 at rest, TLS 1.3 in transit." |
| Plain `<span>` eyebrow | Pill with `solar:hourglass-bold` icon |

---

## 5. Motion

**Files changed:** `index.html`, `typewriter.js` (new file)

### Typewriter (`typewriter.js`)
- New external JS file, loaded via `<script src="./typewriter.js" defer>`
- Cycles 4 research-grade queries (biomedical, economics, philosophy, geopolitics)
- Typing speed: 42ms/char; delete speed: 22ms/char; pause at end: 2400ms; gap between queries: 480ms
- Starts at 1100ms delay (after hero fade-in finishes)
- Target: `#demo-query-input` (id added to demo search input; static `value` removed)

### Trust badge stagger
| Before | After |
|---|---|
| Single `fade-in-up delay-400` wrapper for all 3 | Each `<span>` gets individual `fade-in-up` with `animation-delay` 0.32s → 0.44s → 0.56s |

### Feature row hover
- `.feature-row` class added to all 3 feature rows
- CSS: `transform: translateX(6px)` on `:hover`, `transition: 0.3s cubic-bezier(0.16,1,0.3,1)`

---

## 6. "No Yahoo" Section

**File changed:** `index.html`

| Before | After |
|---|---|
| `max-w-4xl mx-auto text-center` | `max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16` |
| `grid grid-cols-2 md:grid-cols-4 gap-6` — 4 equal `p-6 rounded-xl border` cards | `divide-y divide-slate-100` rows with icon + label left, pill tag right |
| 4 items (AI Search, Email, Social, E-commerce) | 5 items (+ Advertising) |
| Active item: same card style as inactive | Active "AI Search": bold text, blue icon, green `Always` pill |
| Inactive items: same card style as active | Inactive items: muted slate icon + `slate-400` text + neutral `Never` pill |
| `py-5 first:pt-0` (pseudo-variant) | Explicit `pt-0 pb-6`, `py-6`, `pt-6 pb-0` per row |

---

## 7. Enterprise Section + Footer

**File changed:** `index.html`

### Enterprise section
| Before | After |
|---|---|
| `bg-gradient-to-b from-slate-900 to-slate-800` | `bg-slate-950` flat — no gradient, consistent depth |
| `items-center` vertical alignment | `items-start` — lets tile heights vary naturally |
| "enterprise-grade security" copy | "AES-256 encryption at rest, and TLS 1.3 in transit" |
| Checklist: `divide-y` single column (6 stacked rows) | `grid grid-cols-2 gap-x-6 gap-y-3` — 3×2, matches tile height |
| `bg-white/8 border-white/12` badge (non-standard opacity) | `bg-white/10 border-white/20` |
| Feature list: "SSO integration", "API access", "Audit logging" | "SSO & SAML integration", "REST & GraphQL API access", "Immutable audit logging" |
| Tiles: `bg-white/5 border-white/10 backdrop-blur` | + `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]` refraction edge |
| Tile icons: `width="32"` | `width="20"` |
| Tile descriptions: equal-length filler | Varying lengths with specific technical details |
| CTA button: `text-slate-950` | `text-slate-900` |

### Footer
| Before | After |
|---|---|
| "All is Yes, Open Or Search.`<br/>`Searching just became easier" | "All is Yes, Open Or Search." — second line removed |

---

## 8. Post-audit Fixes

**File changed:** `index.html`

### Hero form
- Added `min-w-0` to email input (prevents flex overflow)
- Added `flex-shrink-0` + `whitespace-nowrap` to button (never wraps)
- Added `mb-5` to form wrapper (separates form from trust badges)

### Demo UI content
- Padding: `p-5` → `p-6`
- Source card widths: `w-[160px]` → `w-36`
- Heading + sources row bottom margin: `mb-4` → `mb-5`

### Waitlist form layout consistency
Both Hero and CTA forms now use identical structure:
- `flex flex-col sm:flex-row gap-3`
- Input: `flex-1 min-w-0`
- Button: `flex-shrink-0 whitespace-nowrap`

---

## New Files

| File | Purpose |
|---|---|
| `typewriter.js` | Cycling typewriter animation for demo search input |
