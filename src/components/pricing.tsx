
import type { Locale } from '@/lib/i18n'
import { PRICING } from '@/data/pricing'

const COPY = {
  fr: {
    eyebrow: 'Tarifs',
    titleLead: 'Trois façons',
    titleAccent: 'de travailler ensemble.',
    body: 'Du site éclair pour valider une idée à l’application web sur mesure pensée pour durer. Forfaits clairs, livrables précis, calendriers tenus.',
    featuresLabel: 'Inclus :',
    inheritsFromBefore: 'Tout inclus dans ',
    inheritsFromAfter: ', et en plus :',
    priceFromPrefix: 'À partir de',
    priceFixedSuffix: '/ projet',
  },
  en: {
    eyebrow: 'Pricing',
    titleLead: 'Three ways',
    titleAccent: 'to work together.',
    body: 'From a rapid landing page that validates a position to a bespoke web app built to last. Clear scopes, precise deliverables, timelines we hold.',
    featuresLabel: 'Plan Features:',
    inheritsFromBefore: 'Everything in ',
    inheritsFromAfter: ', plus:',
    priceFromPrefix: 'Starting at',
    priceFixedSuffix: '/ project',
  },
} as const satisfies Record<
  Locale,
  {
    eyebrow: string
    titleLead: string
    titleAccent: string
    body: string
    featuresLabel: string
    inheritsFromBefore: string
    inheritsFromAfter: string
    priceFromPrefix: string
    priceFixedSuffix: string
  }
>

const PLUS_ICON = (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden
    className="mt-[7px] size-3 shrink-0"
  >
    <path d="M6 2v8" />
    <path d="M2 6h8" />
  </svg>
)

export function Pricing({ locale }: { locale: Locale }) {
  const copy = COPY[locale]
  const bookHref = import.meta.env.PUBLIC_BOOK_URL ?? '/contact'

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-paper-warm px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-screen-xl">
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/55">
            {copy.eyebrow}
          </p>
          <div className="mt-8 grid gap-x-12 gap-y-8 md:mt-12 md:grid-cols-12 md:gap-x-16">
            <h2
              id="pricing-heading"
              className="font-display text-5xl leading-[0.98] tracking-[-0.03em] text-ink md:col-span-8 md:text-7xl xl:text-8xl"
            >
              <span>{copy.titleLead}</span>{' '}
              <span className="text-ink/25">{copy.titleAccent}</span>
            </h2>
            <p className="max-w-md font-sans text-base leading-7 text-ink/65 md:col-span-4 md:self-end md:text-[17px] md:leading-8">
              {copy.body}
            </p>
          </div>
        </header>

        <div className="mt-16 overflow-hidden rounded-[var(--radius-card-lg)] bg-paper shadow-[0_1px_0_rgba(15,15,18,0.04),0_40px_80px_-40px_rgba(15,15,18,0.18)] md:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {PRICING.map((tier, idx) => {
              const isDark = idx === 1
              const isFixedPrice = tier.priceQualifier === 'fixed'
              const previousTier = idx > 0 ? PRICING[idx - 1] : null
              return (
                <article
                  key={tier.id}
                  className={`flex flex-col gap-8 p-10 md:p-12 ${
                    isDark ? 'text-paper' : 'text-ink'
                  }`}
                  style={
                    isDark
                      ? { background: 'var(--gradient-card-dark)' }
                      : undefined
                  }
                >
                  <header className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
                      {tier.name[locale]}
                    </h3>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                        isDark ? 'text-paper/55' : 'text-ink/55'
                      }`}
                    >
                      {tier.timeline[locale]}
                    </span>
                  </header>

                  <p
                    className={`max-w-md font-sans text-sm leading-6 md:min-h-38 md:text-[15px] md:leading-7 ${
                      isDark ? 'text-paper/65' : 'text-ink/65'
                    }`}
                  >
                    {tier.description[locale]}
                  </p>

                  <div
                    className={
                      isDark
                        ? 'h-px w-full bg-paper/12'
                        : 'h-px w-full bg-ink/8'
                    }
                  />

                  <div>
                    {previousTier && (
                      <p
                        className={`mb-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
                          isDark ? 'text-paper/45' : 'text-ink/40'
                        }`}
                      >
                        ↳ {copy.inheritsFromBefore}
                        {previousTier.name[locale]}
                        {copy.inheritsFromAfter}
                      </p>
                    )}
                    <p
                      className={`font-sans text-sm font-medium ${
                        isDark ? 'text-paper' : 'text-ink'
                      }`}
                    >
                      {copy.featuresLabel}
                    </p>
                    <ul className="mt-5 space-y-3 font-sans text-[15px] leading-6">
                      {tier.scope[locale].map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 ${
                            isDark ? 'text-paper/80' : 'text-ink/80'
                          }`}
                        >
                          <span
                            className={isDark ? 'text-paper/55' : 'text-ink/45'}
                          >
                            {PLUS_ICON}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <p
                      className={`font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl ${
                        isDark ? 'text-paper' : 'text-ink'
                      }`}
                    >
                      {!isFixedPrice && (
                        <span
                          className={`mr-2 align-middle font-sans text-sm font-normal ${
                            isDark ? 'text-paper/55' : 'text-ink/55'
                          }`}
                        >
                          {copy.priceFromPrefix}
                        </span>
                      )}
                      <span>{tier.price[locale]}</span>
                      {isFixedPrice && (
                        <span
                          className={`ml-2 align-middle font-sans text-sm font-normal ${
                            isDark ? 'text-paper/55' : 'text-ink/55'
                          }`}
                        >
                          {copy.priceFixedSuffix}
                        </span>
                      )}
                    </p>

                    <div className="mt-8">
                      <a
                        href={bookHref}
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm transition ${
                          isDark
                            ? 'bg-paper text-ink hover:opacity-80'
                            : 'border border-ink/15 text-ink hover:border-ink'
                        }`}
                      >
                        {tier.ctaLabel[locale]}
                        <span aria-hidden className="text-base leading-none">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
