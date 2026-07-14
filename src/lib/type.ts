// Type scale. Three tiers, nothing between them:
//   display — Arimo, 24px floor, always negative tracking
//   body    — Inter, 14–20px
//   meta    — Geist Mono, one size, uppercase
// Arimo ships 400 and 700 only; font-medium / font-black make the browser fake a weight.

export const TITLE_XL = 'font-display font-bold text-5xl leading-[1.02] tracking-[-0.035em] md:text-7xl'
export const TITLE_LG = 'font-display font-bold text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl'
export const TITLE_MD = 'font-display font-bold text-3xl leading-[1.08] tracking-[-0.025em] md:text-4xl'
export const TITLE_SM = 'font-display font-bold text-2xl leading-[1.12] tracking-[-0.02em]'

// Arimo 400 at 20–24px. The one sanctioned sub-heading display use: pull quotes, definitions.
export const QUOTE = 'font-display text-xl leading-[1.4] tracking-[-0.005em] md:text-2xl'

export const LEAD = 'font-sans text-lg leading-8 md:text-xl md:leading-9'
export const BODY = 'font-sans text-base leading-7'
export const BODY_SM = 'font-sans text-sm leading-6'

export const META = 'font-mono text-[11px] uppercase tracking-[0.16em]'
