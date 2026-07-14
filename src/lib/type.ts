// Type scale. Three tiers, nothing between them:
//   display — Arimo, 24px floor, always negative tracking
//   body    — Inter, 14–20px
//   meta    — Geist Mono, one size, uppercase
// Arimo ships 400 and 700 only; font-medium / font-black make the browser fake a weight.
//
// Weight follows scale, not importance (DESIGN §3): display type at 36px and up runs 400 —
// it opens a section by being large, not heavy. 700 is reserved for the marks that must
// punch at small or mid size: card titles, prices, the wordmark.

export const TITLE_PAGE = 'font-display text-5xl leading-[1] tracking-[-0.03em] md:text-8xl'
export const TITLE_XL = 'font-display text-5xl leading-[1.02] tracking-[-0.035em] md:text-7xl'
export const TITLE_LG = 'font-display text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl'
export const TITLE_MD = 'font-display text-3xl leading-[1.08] tracking-[-0.025em] md:text-4xl'

// 24px, bold. Card titles and sub-headings — small enough to need the weight.
export const TITLE_SM = 'font-display font-bold text-2xl leading-[1.12] tracking-[-0.02em]'

// 24px, regular. FAQ questions: asked, not announced.
export const TITLE_SM_REGULAR = 'font-display text-2xl leading-[1.12] tracking-[-0.02em]'

// Display number — prices, stats. Bold so the figure reads as a mark.
export const NUMBER = 'font-display font-bold text-3xl leading-tight tracking-[-0.025em] md:text-4xl'

// Arimo 400 at 18–20px — the one sanctioned display use below the 24px floor (DESIGN §3).
// Pull quotes and editorial statements only. Never a heading.
export const QUOTE = 'font-display text-lg leading-[1.4] tracking-[-0.005em] md:text-xl'

export const LEAD = 'font-sans text-lg leading-8 md:text-xl md:leading-9'
export const BODY = 'font-sans text-base leading-7'
export const BODY_SM = 'font-sans text-sm leading-6'

export const META = 'font-mono text-[11px] uppercase tracking-[0.16em]'
