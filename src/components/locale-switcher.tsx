import { useEffect, useState } from 'react'

import type { Locale } from '@/lib/i18n'
import { SWITCHER_LABEL } from '@/data/nav'

function useCurrentPathname(fallback: string): string {
  const [pathname, setPathname] = useState(fallback)
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])
  return pathname
}

function canonicalPath(pathname: string): string {
  if (pathname === '/fr' || pathname === '/en') return '/'
  if (pathname.startsWith('/fr/') || pathname.startsWith('/en/')) {
    return pathname.slice(3)
  }
  return pathname
}

function equivalentPath(pathname: string, target: Locale): string {
  const canonical = canonicalPath(pathname)
  if (target === 'fr') return canonical
  return canonical === '/' ? '/en' : `/en${canonical}`
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = useCurrentPathname(locale === 'fr' ? '/' : '/en')
  const otherLocale: Locale = locale === 'fr' ? 'en' : 'fr'
  const otherHref = equivalentPath(pathname, otherLocale)
  const ariaLabel =
    otherLocale === 'fr' ? SWITCHER_LABEL.toFr : SWITCHER_LABEL.toEn

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em]"
    >
      <span aria-current="true" className="text-ink">
        {locale.toUpperCase()}
      </span>
      <span aria-hidden className="text-ink/30">
        /
      </span>
      <a
        href={otherHref}
        className="text-ink/50 transition hover:text-ink"
        aria-label={ariaLabel}
      >
        {otherLocale.toUpperCase()}
      </a>
    </div>
  )
}
