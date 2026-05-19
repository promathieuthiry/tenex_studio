import type { Locale } from '@/lib/i18n'
import { SERVICES } from '@/data/services'

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

export function Services({ locale }: { locale: Locale }) {
  const copy = COPY[locale]

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[var(--color-ink)] px-6 py-24 md:px-10 md:py-40"
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

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.number}
                className="group relative flex flex-col rounded-[var(--radius-card-lg)] border border-paper/8 bg-paper/[0.035] p-8 transition-colors duration-500 hover:bg-paper/[0.06] md:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-paper/15 text-paper/70">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-paper md:text-3xl">
                      {service.name[locale]}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 font-sans text-sm leading-6 text-paper/55 md:text-[15px] md:leading-7">
                  {service.description[locale]}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
