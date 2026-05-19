import type { Locale } from '@/lib/i18n'
import { HERO } from '@/data/hero'
import { HeroPortrait } from '@/components/hero-portrait'

const PORTRAIT_ALT: Readonly<Record<Locale, string>> = {
  fr: 'Portrait de Mathieu Thiry, fondateur de Tenex Studio',
  en: 'Portrait of Mathieu Thiry, founder of Tenex Studio',
}

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative flex min-h-dvh flex-col justify-between gap-10 border-y border-ink/15 bg-paper px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-start gap-10 pt-20 md:grid-cols-12 md:gap-12">
        <h1 className="font-display text-base font-bold uppercase leading-[1.15] tracking-tight text-ink md:col-span-7 md:text-xl lg:text-3xl">
          {HERO.headline[locale]}
        </h1>

        <HeroPortrait alt={PORTRAIT_ALT[locale]} />
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <p className="max-w-md font-sans text-base md:text-lg lg:text-xl leading-relaxed text-ink/65">
          {HERO.subheadline[locale]}
        </p>

        <h2
          className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 14rem)' }}
        >
          tenEX studio
        </h2>
      </div>
    </section>
  )
}
