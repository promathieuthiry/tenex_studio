import { useEffect, useState } from 'react'

import type { Locale } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { BOOK_URL, BOOK_LINK_ATTRS } from '@/lib/book'
import { BODY, TITLE_XL } from "@/lib/type";

const COPY = {
  fr: {
    title: 'Cette page n’existe pas.',
    body: 'Le lien est cassé ou la page a été déplacée. Revenez à l’accueil ou écrivez-nous, on vous oriente.',
    primary: 'Retour à l’accueil',
    primaryHref: '/',
    secondary: 'Parlons-en',
    secondaryHref: BOOK_URL,
  },
  en: {
    title: 'This page does not exist.',
    body: 'The link is broken or the page moved. Head back home or get in touch, we will point you the right way.',
    primary: 'Back to home',
    primaryHref: '/en/',
    secondary: 'Get in touch',
    secondaryHref: BOOK_URL,
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
      <h1 className={`${TITLE_XL} text-ink`}>
        {copy.title}
      </h1>
      <p className={`max-w-prose ${BODY} text-ink/70`}>
        {copy.body}
      </p>
      <div className="flex gap-3">
        <Button href={copy.primaryHref} variant="primary" surface="light" size="sm">
          {copy.primary}
        </Button>
        <Button href={copy.secondaryHref} {...BOOK_LINK_ATTRS} variant="secondary" surface="light" size="sm">
          {copy.secondary}
        </Button>
      </div>
    </section>
  )
}
