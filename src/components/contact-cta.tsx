
import type { Locale } from '@/lib/i18n'

const COPY = {
  fr: {
    eyebrow: 'Allons-y',
    title: 'Un projet en tête ?',
    body: 'Décrivez-le en quelques lignes. Mathieu répond sous 24 heures ouvrées.',
    primary: 'Parlons-en',
    primaryHref: '/contact',
    secondary: 'Réserver un appel',
  },
  en: {
    eyebrow: 'Let’s go',
    title: 'A project in mind?',
    body: 'Describe it in a few lines. Mathieu replies within one business day.',
    primary: 'Get in touch',
    primaryHref: '/en/contact',
    secondary: 'Book a call',
  },
} as const satisfies Record<
  Locale,
  {
    eyebrow: string
    title: string
    body: string
    primary: string
    primaryHref: string
    secondary: string
  }
>

export function ContactCta({ locale }: { locale: Locale }) {
  const copy = COPY[locale]
  const bookHref = import.meta.env.PUBLIC_BOOK_URL ?? copy.primaryHref

  return (
    <section className="px-6  md:px-10 " aria-labelledby="contact-cta-heading">
      <div
        className="mx-auto flex max-w-screen-xl flex-col gap-10 rounded-card-lg px-6 py-20 text-paper md:flex-row md:items-end md:justify-between md:p-24"
        style={{ background: 'var(--gradient-card-dark)' }}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
            {copy.eyebrow}
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-6 max-w-3xl font-display text-5xl leading-[1] tracking-[-0.03em] text-paper md:text-8xl"
          >
            {copy.title}
          </h2>
          <p className="mt-6 max-w-prose font-sans text-base leading-7 text-paper/80 md:text-lg">
            {copy.body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={copy.primaryHref}
            className="rounded-full bg-paper px-6 py-3 font-sans text-sm text-ink transition hover:opacity-80"
          >
            {copy.primary}
          </a>
          <a
            href={bookHref}
            className="rounded-full border border-paper/30 px-6 py-3 font-sans text-sm text-paper transition hover:border-paper"
          >
            {copy.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
