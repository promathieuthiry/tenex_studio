---
name: no-slop-ai
description: Use when writing or restyling any section header, landing page, or marketing page in this repo; when anyone asks for a label, kicker, overline, or category line above a headline; or when writing section padding, gutters, or container widths by hand.
---

# No Slop AI

## Overview

A page reads as machine-assembled before anyone can say why. Two tells do most of that damage, and both are banned here.

1. **The eyebrow** — a short uppercase line above the headline.
2. **Spacing drift** — every section inventing its own padding.

Neither is a matter of taste. Both were removed from this codebase deliberately, and both grow back unless someone stops them.

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

## Rule 2 — One spacing scale, imported

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
| "This section is unusual, it needs its own padding." | Import `SECTION`. If it truly can't, that's a conversation, not a silent `py-28`. |

## Red flags — stop

You are rationalizing if you catch yourself:

- Typing `eyebrow`, `kicker`, or `overline` as a prop, variable, or data key
- Putting any `<p>` or `<span>` between a section's opening tag and its `<SectionHeader>`
- Adding `aria-hidden` to a line of text to justify keeping it
- Writing `py-`, `px-`, or `max-w-` directly on a `<section>` or its container
- Writing "I'll implement this but flag that it conflicts with DESIGN.md"
- Proposing a DESIGN.md amendment in the same breath as the code that needs it

**All of these mean: stop and ask, or import from `layout.ts`.**

## Verify

```bash
# No mono-uppercase element directly above any heading, any route:
# (run against a dev server, per route)
Array.from(document.querySelectorAll("h1,h2")).filter(h => {
  const p = h.previousElementSibling; if (!p) return false;
  const s = getComputedStyle(p);
  return s.fontFamily.toLowerCase().includes("mono")
      && s.textTransform === "uppercase"
      && parseFloat(s.fontSize) <= 14;
})
// must be []
```

`DESIGN.md` is the design source of truth and states both rules. Read it before visual work.
