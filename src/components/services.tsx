import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import type { Locale } from '@/lib/i18n'
import { SERVICES, type Service } from '@/data/services'
import { SectionHeader } from '@/components/section-header'

const COPY = {
  fr: {
    eyebrow: 'Services',
    titleStart: 'Pensé pour',
    titleEnd: 'l’entrepreneur moderne.',
  },
  en: {
    eyebrow: 'Services',
    titleStart: 'Designed for',
    titleEnd: 'forward-thinking founders.',
  },
} as const satisfies Record<
  Locale,
  { eyebrow: string; titleStart: string; titleEnd: string }
>

const STICKY_TOP_PX = 96
const SCALE_FLOOR = 0.92

function StackedCard({
  service,
  index,
  total,
  locale,
  reduced,
  stackProgress,
}: {
  service: Service
  index: number
  total: number
  locale: Locale
  reduced: boolean
  stackProgress: MotionValue<number>
}) {
  const isLast = index === total - 1
  const start = index / total
  const end = (index + 1) / total

  const scale = useTransform(
    stackProgress,
    [start, end],
    [1, isLast || reduced ? 1 : SCALE_FLOOR],
  )

  const imageOnLeft = index % 2 === 1

  return (
    <motion.article
      style={{
        scale: reduced ? 1 : scale,
        top: `${STICKY_TOP_PX}px`,
        transformOrigin: 'center top',
      }}
      className="sticky overflow-hidden rounded-card-lg border border-paper/10 bg-[#141417] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
    >
      <div
        className={`grid min-h-140 md:min-h-160 md:grid-cols-[0.85fr_1.15fr] ${
          imageOnLeft ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="flex flex-col p-8 md:p-12 lg:p-14">
          <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-paper md:text-5xl lg:text-6xl">
            {service.name[locale]}
          </h3>

          <span aria-hidden className="mt-8 block h-px w-full bg-paper/10" />

          <p className="mt-8 max-w-md font-sans text-base leading-7 text-paper/60 md:text-lg md:leading-8">
            {service.description[locale]}
          </p>

          <ul className="mt-auto flex flex-wrap gap-2 pt-10">
            {service.pills[locale].map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-paper/12 bg-paper/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/70"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-4/3 overflow-hidden md:aspect-auto md:h-full">
          <img
            src={service.image.src}
            alt={service.image.alt[locale]}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className={`absolute inset-0 ${
              service.image.tone === 'light'
                ? `bg-linear-to-b from-[#141417]/15 via-transparent to-[#141417]/25 md:bg-linear-to-r ${
                    imageOnLeft
                      ? 'md:from-transparent md:via-transparent md:to-[#141417]/30'
                      : 'md:from-[#141417]/30 md:via-transparent md:to-transparent'
                  }`
                : `bg-linear-to-b from-[#141417]/40 via-transparent to-[#141417]/60 md:bg-linear-to-r ${
                    imageOnLeft
                      ? 'md:from-transparent md:via-transparent md:to-[#141417]/80'
                      : 'md:from-[#141417]/80 md:via-transparent md:to-transparent'
                  }`
            }`}
          />
        </div>
      </div>
    </motion.article>
  )
}

export function Services({ locale }: { locale: Locale }) {
  const copy = COPY[locale]
  const reduced = useReducedMotion() ?? false
  const stackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-ink px-6 pb-32 pt-24 md:px-10 md:pb-48 md:pt-40"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.titleStart}
          titleTail={copy.titleEnd}
          headingId="services-heading"
          tone="dark"
          animate
        />

        <div
          ref={stackRef}
          className="mt-20 flex flex-col gap-6 md:mt-32 md:gap-8"
        >
          {SERVICES.map((service, i) => (
            <StackedCard
              key={service.number}
              service={service}
              index={i}
              total={SERVICES.length}
              locale={locale}
              reduced={reduced}
              stackProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
