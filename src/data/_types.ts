import type { Locale } from '@/lib/i18n'

export type Bilingual<T = string> = Readonly<Record<Locale, T>>

export type Slug = string & { readonly __brand: 'Slug' }
export type Url = string & { readonly __brand: 'Url' }
export type IsoYear2 = string & { readonly __brand: 'IsoYear2' }

export const slug = (s: string): Slug => s as Slug

export const url = (s: string): Url => s as Url

export const yearmark = (s: string): IsoYear2 => {
  if (!/^\d{2}$/.test(s)) {
    throw new Error(`yearmark must be 2 digits, got: ${s}`)
  }
  return s as IsoYear2
}
