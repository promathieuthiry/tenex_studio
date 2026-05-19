export type Locale = 'fr' | 'en'

export const LOCALES: ReadonlyArray<Locale> = ['fr', 'en'] as const

export const DEFAULT_LOCALE: Locale = 'fr'

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' &&
    (LOCALES as ReadonlyArray<string>).includes(value)
  )
}

export const SITE_ORIGIN = 'https://tenex.studio'

export const OG_LOCALE: Readonly<Record<Locale, string>> = {
  fr: 'fr_CA',
  en: 'en_US',
} as const

export function pathFor(locale: Locale, path: '' | '/contact'): string {
  if (locale === 'fr') return path === '' ? '/' : path
  return path === '' ? '/en' : `/en${path}`
}

export const VISIT_LABEL: Readonly<Record<Locale, string>> = {
  fr: 'Ouvrir le site',
  en: 'Open website',
} as const

export const NEW_TAB_HINT: Readonly<Record<Locale, string>> = {
  fr: 'nouvel onglet',
  en: 'new tab',
} as const

export function visitAriaLabel(locale: Locale, name: string): string {
  return `${VISIT_LABEL[locale]} — ${name} (${NEW_TAB_HINT[locale]})`
}
