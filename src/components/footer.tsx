
import type { Locale } from '@/lib/i18n'
import { FOOTER } from '@/data/footer'
import { NameMark } from './name-mark'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-32 border-t border-ink/10 bg-paper px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-screen-xl gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display max-w-md text-2xl leading-[1.15] tracking-[-0.02em] text-ink md:text-3xl">
            {FOOTER.tagline[locale]}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
            {FOOTER.yearmark}
          </p>
        </div>

        {FOOTER.columns.map((col) => (
          <nav
            key={col.id}
            aria-label={col.heading[locale]}
            className="flex flex-col gap-3"
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
              {col.heading[locale]}
            </p>
            {col.links.map((link) => {
              const href = link.href?.[locale]
              return href ? (
                <a
                  key={link.id}
                  href={href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="font-sans text-sm text-ink transition hover:opacity-70"
                >
                  {link.label[locale]}
                </a>
              ) : (
                <span
                  key={link.id}
                  aria-disabled="true"
                  className="font-sans text-sm text-ink/40"
                >
                  {link.label[locale]}
                </span>
              )
            })}
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-screen-xl flex-col items-start justify-between gap-3 border-t border-ink/10 pt-8 font-sans text-xs text-ink/50 md:flex-row md:items-center">
        <p>{FOOTER.legalLine[locale]}</p>
      </div>

      <NameMark />
    </footer>
  )
}
