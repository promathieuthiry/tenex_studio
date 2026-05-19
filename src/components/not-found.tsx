import { useEffect, useState } from 'react'

import type { Locale } from '@/lib/i18n'

const COPY = {
  fr: {
    eyebrow: '(404) PAGE INTROUVABLE',
    title: 'Cette page n’existe pas.',
    body: 'Le lien est cassé ou la page a été déplacée. Revenez à l’accueil ou écrivez-nous — on vous oriente.',
    primary: 'Retour à l’accueil',
    primaryHref: '/',
    secondary: 'Parlons-en',
    secondaryHref: '/contact',
  },
  en: {
    eyebrow: '(404) NOT FOUND',
    title: 'This page does not exist.',
    body: 'The link is broken or the page moved. Head back home or get in touch — we’ll point you the right way.',
    primary: 'Back to home',
    primaryHref: '/en',
    secondary: 'Get in touch',
    secondaryHref: '/en/contact',
  },
} satisfies Record<Locale, Record<string, string>>

export default function NotFound() {
  const [locale, setLocale] = useState<Locale>('fr')
  useEffect(() => {
    setLocale(window.location.pathname.startsWith('/en') ? 'en' : 'fr')
  }, [])
  const copy = COPY[locale]

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
        {copy.eyebrow}
      </p>
      <h1 className="font-display text-5xl leading-[1.1] tracking-[-0.045em] text-ink md:text-7xl">
        {copy.title}
      </h1>
      <p className="max-w-prose font-sans text-base text-ink/70">
        {copy.body}
      </p>
      <div className="flex gap-3">
        <a
          href={copy.primaryHref}
          className="rounded-full bg-ink px-5 py-2 font-sans text-sm text-paper transition hover:opacity-80"
        >
          {copy.primary}
        </a>
        <a
          href={copy.secondaryHref}
          className="rounded-full border border-ink/20 px-5 py-2 font-sans text-sm text-ink transition hover:border-ink"
        >
          {copy.secondary}
        </a>
      </div>
    </section>
  )
}
