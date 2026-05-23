
import type { Locale } from '@/lib/i18n'
import { PRICING } from '@/data/pricing'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/section-header'
import { BOOK_URL, BOOK_LINK_ATTRS } from '@/lib/book'

const COPY = {
  fr: {
    eyebrow: 'Tarifs',
    titleLead: 'Trois façons',
    titleAccent: 'de travailler ensemble.',
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

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-paper px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.titleLead}
          titleTail={copy.titleAccent}
          headingId="pricing-heading"
          size="xl"
        />

        <div className="mt-16 overflow-hidden rounded-[var(--radius-card-lg)] bg-paper shadow-[0_0_0_1px_rgba(15,15,18,0.06),0_2px_6px_rgba(15,15,18,0.04),0_24px_64px_-24px_rgba(15,15,18,0.16)] md:mt-24">
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
                  <header className="flex items-baseline justify-between gap-6 md:min-h-18">
                    <h3 className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
                      {tier.name[locale]}
                    </h3>
                    <span
                      className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] ${
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
                    {previousTier ? (
                      <p
                        className={`flex min-h-9 items-start font-mono text-[10px] uppercase leading-4 tracking-[0.18em] ${
                          isDark ? 'text-paper/45' : 'text-ink/40'
                        }`}
                      >
                        ↳ {copy.inheritsFromBefore}
                        {previousTier.name[locale]}
                        {copy.inheritsFromAfter}
                      </p>
                    ) : (
                      <p
                        className={`flex min-h-9 items-start font-sans text-sm font-medium ${
                          isDark ? 'text-paper' : 'text-ink'
                        }`}
                      >
                        {copy.featuresLabel}
                      </p>
                    )}
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
                      <Button
                        href={BOOK_URL}
                        {...BOOK_LINK_ATTRS}
                        variant={isDark ? 'primary' : 'secondary'}
                        surface={isDark ? 'dark' : 'light'}
                        size="md"
                        withArrow
                      >
                        {tier.ctaLabel[locale]}
                      </Button>
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
