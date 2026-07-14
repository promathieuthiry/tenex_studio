import type { Locale } from '@/lib/i18n'
import { WORK, WORK_HEADER } from '@/data/work'
import { SectionHeader } from '@/components/section-header'
import { SECTION, CONTAINER, HEADER_GAP } from '@/lib/layout'
import { WorkCard } from '@/components/work-card'

export function WorkShowcase({ locale }: { locale: Locale }) {
  return (
    <section id="work" className={SECTION} aria-labelledby="work-heading">
      <div className={CONTAINER}>
        <SectionHeader
          title={WORK_HEADER.title[locale]}
          headingId="work-heading"
          constrained
        />
        <ul className={`${HEADER_GAP} grid gap-6 md:grid-cols-2 md:gap-8`}>
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
