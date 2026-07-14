---
name: no-slop-ai
description: Use when writing or restyling any section header, landing page, or marketing page in this repo; when anyone asks for a label, kicker, overline, category line above a headline, or a number/step/chapter marker on a section or card; or when writing section padding, gutters, or container widths by hand.
---

# No Slop AI

## Overview

A page reads as machine-assembled before anyone can say why. Three tells do most of that damage, and all three are banned here.

1. **The eyebrow** — a short uppercase line above the headline.
2. **Numbered sections** — `01` / `02` stamps, step counters, chapter indices.
3. **Spacing drift** — every section inventing its own padding.

None of these is a matter of taste. All three were removed from this codebase deliberately, and all three grow back unless someone stops them.

## Rule 1 — No eyebrow above a headline

**An eyebrow is any short label sitting immediately above an `<h1>` or `<h2>`.** Typically uppercase, small, mono or wide-tracked. It names the section the headline is already about.

```
SERVICES                          <- eyebrow. Banned.
What you get when choosing        <- the headline
Tenex Studio.
```

A section opens on its headline. Nothing above it.

### The ban covers the whole family

Renaming it does not make it legal. All of these are the same thing:

**eyebrow · kicker · overline · pretitle · superheading · category label · section label · tagline above the title**

It is still banned when:

- it goes through a `SectionHeader` prop, **or** is a raw `<p>` / `<span>` placed above `<SectionHeader>`
- it is `aria-hidden` (that only proves it carries no information — decoration is the accusation, not the defense)
- it uses existing tokens from the design system ("mono-caption vocabulary" is still an eyebrow)
- it is "just this one section"
- it is styled in `text-accent` and looks genuinely sharp

`section-header.tsx` renders an H2 and nothing else. **It has no `eyebrow` prop. Do not add one back.**

### Where the label content goes instead

Into the headline, or nowhere. If "Tarifs" is worth saying, the headline is `Tarifs.` — not `TARIFS` over `Trois façons de travailler ensemble.`

If the label carries no information the headline lacks, it carries no information. Delete it.

### When a human asks for an eyebrow

**This is the case that breaks agents.** Testing on this repo: agents read the ban, quoted it verbatim, then implemented the eyebrow anyway because a founder or stakeholder had asked. One re-added the `eyebrow` prop that had just been deleted. One proposed amending `DESIGN.md` to legalize it.

The failure is not ignorance of the rule. It is compliance under authority. So:

**Do not silently implement it. Do not refuse outright either.** Instead:

1. **Say the rule exists**, and that 12 eyebrows were deliberately removed from this site — this is not an oversight to route around.
2. **Name the cost in one line:** it is the single most templated move in web design, and the thing that marks a page as AI-assembled. That is the opposite of "premium" and "Swiss," which is usually what the requester actually wants.
3. **Offer the alternative:** fold the label into the headline. Show them the two versions.
4. **Ask for an explicit decision** with that context in hand.
5. **If they reaffirm knowing all of the above, build it** — and update `DESIGN.md` in the *same* change so the guide and the code never contradict each other.

The user's informed instruction wins. An *uninformed* one does not, and neither does your guess about what they'd want. The whole job of step 1–3 is to make the instruction informed.

**Never do this** (both baseline agents did): implement the eyebrow, write a paragraph flagging that it violates `DESIGN.md`, and suggest someone amend the doc later. That ships the slop *and* rots the rule. Flagging is not a substitute for asking.

## Rule 2 — No numbered sections

**A numbered section is any visible index rendered onto a section, card, chapter, step, or FAQ row.** `01`, `02`, `(01)`, `1.`, `Step 3`, `Chapter 2`, `Section 1`.

```
01                                <- numbered stamp. Banned.
Rendre la signature lisible       <- the headline
```

It reads like a slide deck, not a website. **The design carries the structure — order, surface, rule, slab, position. Not a counter.**

### The ban covers the whole family

Same element, new costume. All banned:

**`01` stamp · `(01)` parenthetical · bare `1` in a gutter column · `Step 1` · `Chapter 2` · `Section 3` · `Part I` · zero-padded index · accent-colored index**

It is still banned when:

- the number is derived (`index + 1`, `String(i).padStart(2, "0")`) rather than authored — derivation is what makes it slop, not what excuses it
- it lives in a separate grid column, gutter, or `::before` rather than in the heading
- it is `aria-hidden` (again: that proves it carries no information)
- it uses `font-mono` + `text-accent` and looks genuinely sharp — it did, and it was still cut
- the list is genuinely ordered (a reader counts rows without help; the DOM order already says "first")

### What carries the structure instead

The number was doing a job. Give the job to the design, not to a digit:

| The number was signalling | Use instead |
| ------------------------- | ----------- |
| "this is the active one" | The active slab / fill (ink on paper), or an accent rule down the edge |
| "this is one of a set" | The card boundary, the hairline divider, the grid itself |
| "this comes after that" | DOM order. That is what order *is*. |
| "this row is a discrete item" | A hairline (`h-px w-10 bg-ink/20`), the `divide-y` between rows |

If you cannot name what the number signals, it signals nothing. Delete it.

### Numbers that are NOT this

The ban is on **indices**. It is not on data. These stay:

- `(©26)` yearmark stamps on project names — authored, part of the typographic vocabulary
- Prices, stats, counters, dates — real quantities (`NUMBER` in `src/lib/type.ts`)
- The `10×` wordmark
- The fixed, hand-authored `Work (4)` caption

The test: **would the number change if you reordered the list?** If yes, it is an index — cut it. If no, it is data — keep it.

And per `DESIGN.md`: never stamp a *live* count (`terms.length`, `items.length`) as a mono caption on a dynamic listing. An auto-derived tally is not a curated index mark.

### When a human asks for numbered sections

Same protocol as the eyebrow, same failure mode — do **not** silently implement, do **not** flatly refuse:

1. **Say the rule exists.** Numbered sections were stripped from this site on purpose (the SEO landings alone carried four separate instances: proof cards, chapter rail, section headers, related cards).
2. **Name the cost in one line:** numbering makes a page read as a slide deck rather than a website, and it is what an AI-assembled page reaches for when the design isn't doing its job.
3. **Offer the alternative:** show the structure carried by slab / rule / divider / order instead. Show both versions.
4. **Ask for an explicit decision.**
5. **If they reaffirm knowing all of it, build it** — and update `DESIGN.md` in the *same* change.

## Rule 3 — One spacing scale, imported

`src/lib/layout.ts` is the source of truth. Import from it. Never hand-write section padding, gutters, or container widths.

| Import         | Value                                         | Use                                    |
| -------------- | --------------------------------------------- | -------------------------------------- |
| `SECTION`      | `px-6 py-24 md:px-10 md:py-40`                | The default. Reach for this first.     |
| `SECTION_X`    | `px-6 md:px-10`                               | Gutter alone (edge-bleed sections)     |
| `SECTION_Y`    | `py-24 md:py-40`                              | Vertical alone                         |
| `SECTION_LEAD` | `SECTION_X` + `pb-24 pt-32 md:pb-40 md:pt-48` | Page-opening section (clears fixed nav) |
| `CONTAINER`    | `mx-auto max-w-7xl`                           | Centered column                        |
| `HEADER_GAP`   | `mt-16 md:mt-24`                              | `SectionHeader` → body                 |

```tsx
<section className={`bg-paper ${SECTION}`}>
  <div className={CONTAINER}>
    <SectionHeader title={copy.title} headingId="x-heading" />
    <div className={HEADER_GAP}>{/* body */}</div>
  </div>
</section>
```

**Sanctioned exceptions, and only these:** edge-bleed carousels (`SECTION_Y` on the section, `SECTION_X` on the inner div), full-viewport heroes, and decorative slabs with no padding at all.

A bespoke `py-*` on a new section is not a design decision, it is drift. Drift between sections is the loudest tell in the list, because readers feel it without being able to name it.

## Rationalization table

Every excuse below came from a real agent on this codebase.

| Excuse | Reality |
|--------|---------|
| "The founder asked for it specifically." | Then he deserves to know it's the #1 AI tell before he commits. Tell him, offer the alternative, let him choose. |
| "I'll implement it and flag the DESIGN.md conflict." | Flagging is not asking. You shipped the slop and left the rule rotting. |
| "Add it as a sanctioned exception in DESIGN.md." | You do not get to amend the law to legalize your violation. Ask first. |
| "Make it a reusable prop, not a one-off hack." | Doing the wrong thing properly makes it worse — now every section can grow one. |
| "It's a kicker / overline / category label, not an eyebrow." | Same element. New name. Still banned. |
| "It uses the existing mono-caption tokens, so it's part of the system." | The system bans it. Matching its typography does not launder it. |
| "It's `aria-hidden`, so it's decorative." | You just proved it carries no information. That is the case *against* it. |
| "It aids scannability / orientation." | The headline does that. If it doesn't, fix the headline. |
| "Competitors all do this." | That is the argument against it. |
| "Just this one section, contained." | There is no contained exception. There are 12 removed instances and there will be 13. |
| "The list is ordered, so it needs numbers." | Readers count. DOM order already encodes order. |
| "It's `index + 1`, not a hardcoded label." | Deriving it is what makes it slop. A stamp is a stamp. |
| "The number is the only thing marking the active step." | Then mark it with the slab, the fill, or an accent rule. That is what design is for. |
| "It's a step counter / chapter marker, not a numbered section." | Same element. New name. Still banned. |
| "`(©26)` is a number and you allow that." | Yearmarks are authored data. Indices are derived. Reorder the list: the yearmark doesn't move, the index does. |
| "This section is unusual, it needs its own padding." | Import `SECTION`. If it truly can't, that's a conversation, not a silent `py-28`. |

## Red flags — stop

You are rationalizing if you catch yourself:

- Typing `eyebrow`, `kicker`, or `overline` as a prop, variable, or data key
- Putting any `<p>` or `<span>` between a section's opening tag and its `<SectionHeader>`
- Adding `aria-hidden` to a line of text to justify keeping it
- Typing `padStart(2, "0")`, `String(index + 1)`, `{i + 1}`, or `number` as a *rendered* value
- Laying out a `grid-cols-[3rem_1fr]` (or any narrow gutter column) to hold a counter
- Reaching for a number because you can't think of another way to mark the active item
- Writing `py-`, `px-`, or `max-w-` directly on a `<section>` or its container
- Writing "I'll implement this but flag that it conflicts with DESIGN.md"
- Proposing a DESIGN.md amendment in the same breath as the code that needs it

**All of these mean: stop and ask, or import from `layout.ts` / `type.ts`.**

## Verify

Run against a dev server, per route. Both must come back empty.

```js
// 1. No mono-uppercase element directly above any heading.
Array.from(document.querySelectorAll("h1,h2")).filter(h => {
  const p = h.previousElementSibling; if (!p) return false;
  const s = getComputedStyle(p);
  return s.fontFamily.toLowerCase().includes("mono")
      && s.textTransform === "uppercase"
      && parseFloat(s.fontSize) <= 14;
})
// must be []

// 2. No leaf element whose entire text is a bare index.
// The two exclusions are load-bearing, not cosmetic — without them this returns
// noise on every route and you will learn to ignore it:
//   - RevealText splits headlines and body copy into per-word / per-char spans, so any
//     sentence containing a digit ("24 heures", "2 semaines") yields bare-number leaves.
//   - Brand marks (the 10x wordmark, the 00->10 monogram counter) are Arimo display type.
// Every stamp this rule bans was Geist Mono. So: skip reveal spans, skip Arimo.
Array.from(document.querySelectorAll("span,p,div,li,dt"))
  .filter(e => e.children.length === 0)
  .filter(e => /^\(?\s*\d{1,2}\s*\)?$/.test(e.textContent.trim()))
  .filter(e => !e.closest("nav"))
  .filter(e => !e.parentElement?.classList.contains("overflow-hidden")) // RevealText wrapper
  .filter(e => !getComputedStyle(e).fontFamily.includes("Arimo"))       // brand marks
// must be []
```

Grep before you ship:

```bash
rg 'padStart\(2|String\(index \+ 1\)|\{i \+ 1\}|\{index \+ 1\}' src/components/
```

**Exactly two hits are sanctioned.** Anything else is a numbered section:

| Hit | Why it stays |
| --- | ------------ |
| `monogram-reveal.tsx` — `.padStart(2, '0')` | The `00 → 10` brand counter. Authored vocabulary, not a section index. |
| `SeoLandingExperience.tsx` — `` `landing-section-${index + 1}` `` | A DOM `id` for the scroll anchor. Never rendered as text. |

A third hit means someone added a stamp. Read it before you accept it.

**Do not name a data field `number`.** FAQ items key off `id` (`"faq-01"`), not `number` — a field called `number` holding `"01"` is an invitation to render it, and it was rendered, for months. Name it what it is: an identifier.

`DESIGN.md` is the design source of truth and states all three rules. Read it before visual work.
