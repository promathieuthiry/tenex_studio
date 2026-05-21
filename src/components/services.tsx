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

const COPY = {
  fr: {
    eyebrow: 'Services',
    titleStart: 'Pensé pour',
    titleEnd: 'l’entrepreneur moderne.',
    scopeLabel: 'Périmètre',
  },
  en: {
    eyebrow: 'Services',
    titleStart: 'Designed for',
    titleEnd: 'forward-thinking founders.',
    scopeLabel: 'Scope',
  },
} as const satisfies Record<
  Locale,
  { eyebrow: string; titleStart: string; titleEnd: string; scopeLabel: string }
>

const STICKY_TOP_PX = 96
const SCALE_FLOOR = 0.92

function StackedCard({
  service,
  index,
  total,
  locale,
  scopeLabel,
  reduced,
  stackProgress,
}: {
  service: Service
  index: number
  total: number
  locale: Locale
  scopeLabel: string
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

  const Icon = service.icon

  return (
    <motion.article
      style={{
        scale: reduced ? 1 : scale,
        top: `${STICKY_TOP_PX}px`,
        transformOrigin: 'center top',
      }}
      className="sticky flex min-h-[560px] flex-col overflow-hidden rounded-[var(--radius-card-lg)] border border-paper/10 bg-[#141417] p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] md:min-h-[640px] md:p-14"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper/45">
              {service.number}
            </span>
            <span className="h-px flex-1 bg-paper/10" />
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-paper/15 text-paper/75">
              <Icon className="size-5" aria-hidden />
            </span>
          </div>

          <h3 className="mt-10 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-paper md:text-5xl lg:text-6xl">
            {service.name[locale]}
          </h3>

          <p className="mt-6 max-w-xl font-sans text-base leading-7 text-paper/60 md:text-lg md:leading-8">
            {service.description[locale]}
          </p>
        </div>

        <div className="flex flex-col">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40">
            {scopeLabel}
          </p>
          <ul className="mt-6 grid gap-3">
            {service.scope[locale].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-paper/8 pb-3 font-sans text-sm leading-6 text-paper/70 md:text-[15px]"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
      className="relative bg-[var(--color-ink)] px-6 pb-32 pt-24 md:px-10 md:pb-48 md:pt-40"
    >
      <div className="relative mx-auto max-w-screen-xl">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper/55">
          {copy.eyebrow}
        </p>
        <h2
          id="services-heading"
          className="mt-8 max-w-5xl font-display text-4xl leading-[1.05] tracking-[-0.03em] md:text-7xl"
        >
          <span className="text-paper">{copy.titleStart}</span>{' '}
          <span className="text-paper/35">{copy.titleEnd}</span>
        </h2>

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
              scopeLabel={copy.scopeLabel}
              reduced={reduced}
              stackProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
