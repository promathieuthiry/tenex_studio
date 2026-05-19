import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import type { Locale } from '@/lib/i18n'
import { Hero } from '@/components/hero'

const MARQUEE_IMAGES = [
  '/work/atelier-brun-cover.jpg',
  '/work/maison-aubry-cover.jpg',
  '/work/studio-meridien-cover.jpg',
  '/work/verso-co-cover.jpg',
]

function MarqueeColumn({
  direction,
  duration,
}: {
  direction: 'up' | 'down'
  duration: number
}) {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES]
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
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-6 px-6 md:px-10">
          <MarqueeColumn direction="up" duration={40} />
          <MarqueeColumn direction="down" duration={50} />
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
