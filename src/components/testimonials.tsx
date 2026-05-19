import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import { visitAriaLabel } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { TESTIMONIALS, type Testimonial } from '@/data/testimonials'
import { SectionHeader } from '@/components/section-header'
import { ArrowGlyph } from '@/components/arrow-glyph'

const COPY = {
  fr: {
    eyebrow: 'Témoignages',
    title: 'Clients qui nous recommandent',
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'clients showing us some love',
  },
} as const satisfies Record<Locale, { eyebrow: string; title: string }>

const CARD_BASE =
  'group relative flex w-[80vw] shrink-0 flex-col rounded-[var(--radius-card-lg)] bg-paper p-7 shadow-[0_1px_0_rgba(15,15,18,0.04),0_30px_60px_-30px_rgba(15,15,18,0.12)] sm:w-[22rem] md:w-[28rem] md:p-9'

const TRACK_BASE = 'flex shrink-0 gap-6 px-6 md:gap-8 md:px-10'

function Card({
  t,
  i,
  locale,
  className,
}: {
  t: Testimonial
  i: number
  locale: Locale
  className?: string
}) {
  const ariaLabel = visitAriaLabel(locale, t.name[locale])

  return (
    <article className={className ? `${CARD_BASE} ${className}` : CARD_BASE}>
      <div className="flex items-start justify-between">
        <span
          aria-hidden
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40"
        >
          ({String(i + 1).padStart(2, '0')})
        </span>

        <a
          href={t.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="grid size-9 -translate-y-0.5 place-items-center rounded-full bg-ink text-paper opacity-0 transition duration-300 ease-out hover:bg-ink-soft focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowGlyph size={20} />
        </a>
      </div>

      <blockquote className="mt-10 flex-1 font-display text-lg leading-[1.4] tracking-[-0.005em] text-ink md:text-[20px]">
        &ldquo;{t.quote[locale]}&rdquo;
      </blockquote>

      <a
        href={t.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="mt-10 flex items-center gap-4 border-t border-ink/8 pt-6 transition-opacity duration-300 ease-out hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <img
          src={t.portrait}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className="size-11 shrink-0 rounded-full bg-ink/5 object-cover"
        />
        <div className="min-w-0">
          <p className="truncate font-sans text-sm font-medium text-ink">
            {t.name[locale]}
          </p>
          <p className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
            {t.role[locale]}
          </p>
        </div>
      </a>
    </article>
  )
}

export function Testimonials({ locale }: { locale: Locale }) {
  const copy = COPY[locale]
  const pinWrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setScrollDistance((prev) => (prev === 0 ? prev : 0))
      return
    }
    const measure = () => {
      const track = trackRef.current
      const wrap = pinWrapRef.current
      if (!track || !wrap) return
      const distance = Math.max(0, track.scrollWidth - wrap.clientWidth)
      setScrollDistance((prev) => (prev === distance ? prev : distance))
    }
    measure()
    const ro = new ResizeObserver(measure)
    const track = trackRef.current
    const wrap = pinWrapRef.current
    if (track && wrap) {
      ro.observe(track)
      ro.observe(wrap)
    }
    return () => ro.disconnect()
  }, [reduced])

  const { scrollYProgress } = useScroll({
    target: pinWrapRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  const pinned = !reduced && scrollDistance > 0

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-y border-ink/8 bg-paper-warm py-24 md:py-40"
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={<span className="text-ink">{copy.title}</span>}
          headingId="testimonials-heading"
          constrained
        />
      </div>

      <div
        ref={pinWrapRef}
        className="relative mt-16 overflow-clip md:mt-20"
        style={
          pinned ? { height: `calc(100svh + ${scrollDistance}px)` } : undefined
        }
      >
        <div
          className={
            pinned
              ? 'sticky top-0 flex h-svh items-center'
              : 'flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 md:gap-8'
          }
          style={pinned ? undefined : { scrollbarWidth: 'thin' }}
        >
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className={
              pinned ? `${TRACK_BASE} will-change-transform` : TRACK_BASE
            }
          >
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={t.id}
                t={t}
                i={i}
                locale={locale}
                className={pinned ? undefined : 'snap-start'}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
