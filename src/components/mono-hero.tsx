import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import type { Locale } from '@/lib/i18n'
import { Hero } from '@/components/hero'

const MARQUEE_IMAGES = [
  '/work/atelier-brun-cover.jpg',
  '/work/maison-aubry-cover.jpg',
  '/work/studio-meridien-cover.jpg',
  '/work/verso-co-cover.jpg',
  '/work/lumen-haus-cover.jpg',
  '/work/cote-nord-cover.jpg',
  '/work/brasserie-rade-cover.jpg',
  '/work/atelier-fauve-cover.jpg',
  '/work/nove-labs-cover.jpg',
  '/work/rivage-co-cover.jpg',
  '/work/maison-orso-cover.jpg',
  '/work/signal-form-cover.jpg',
  '/work/caldera-co-cover.jpg',
  '/work/atelier-noor-cover.jpg',
  '/work/maison-vela-cover.jpg',
  '/work/studio-prim-cover.jpg',
  '/work/forge-co-cover.jpg',
  '/work/heline-haus-cover.jpg',
  '/work/atelier-sora-cover.jpg',
  '/work/vega-form-cover.jpg',
]

function MarqueeColumn({
  direction,
  duration,
  offset,
}: {
  direction: 'up' | 'down'
  duration: number
  offset: number
}) {
  const rotated = [
    ...MARQUEE_IMAGES.slice(offset),
    ...MARQUEE_IMAGES.slice(0, offset),
  ]
  const items = [...rotated, ...rotated]
  return (
    <div className="pointer-events-none overflow-hidden">
      <ul
        className="flex flex-col gap-6"
        style={{
          animation: `marquee-y ${duration}s linear infinite`,
          animationDirection: direction === 'up' ? 'normal' : 'reverse',
        }}
      >
        {items.map((src, i) => (
          <li
            key={`${src}-${i}`}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-card bg-ink-soft"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MonoHero({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.55])

  return (
    <div ref={ref} className="relative h-[180vh] bg-[var(--color-ink)]">
      <div className="sticky top-0 flex h-dvh items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-10">
          <MarqueeColumn direction="up" duration={40} offset={0} />
          <MarqueeColumn direction="down" duration={50} offset={5} />
          <div className="hidden md:block">
            <MarqueeColumn direction="up" duration={46} offset={10} />
          </div>
          <div className="hidden md:block">
            <MarqueeColumn direction="down" duration={54} offset={15} />
          </div>
        </div>

        <motion.div
          style={reduced ? undefined : { scale }}
          className="relative z-10 w-full origin-center bg-paper"
        >
          <Hero locale={locale} />
        </motion.div>
      </div>
    </div>
  )
}
