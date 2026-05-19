import type { Locale } from '@/lib/i18n'
import { WORK } from '@/data/work'
import { SectionHeader } from '@/components/section-header'
import { WorkCard } from '@/components/work-card'

const COPY = {
  fr: { eyebrow: 'Projets sélectionnés', title: 'Quelques projets récents.' },
  en: { eyebrow: 'Selected projects', title: 'A few recent projects.' },
} as const satisfies Record<Locale, { eyebrow: string; title: string }>

export function WorkShowcase({ locale }: { locale: Locale }) {
  const copy = COPY[locale]

  return (
    <section
      id="work"
      className="px-6 py-24 md:px-10 md:py-40"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          headingId="work-heading"
          constrained
        />
        <ul className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {WORK.map((project, i) => (
            <li key={project.slug}>
              <WorkCard project={project} locale={locale} priority={i < 2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
