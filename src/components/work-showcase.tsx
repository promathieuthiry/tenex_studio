import type { Locale } from '@/lib/i18n'
import { WORK, WORK_HEADER } from '@/data/work'
import { SectionHeader } from '@/components/section-header'
import { WorkCard } from '@/components/work-card'

export function WorkShowcase({ locale }: { locale: Locale }) {
  return (
    <section
      id="work"
      className="px-6 py-24 md:px-10 md:py-40"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow={WORK_HEADER.eyebrow[locale]}
          title={WORK_HEADER.title[locale]}
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
