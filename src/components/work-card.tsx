import { visitAriaLabel } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import type { WorkProject } from '@/data/work'
import { ArrowGlyph } from '@/components/arrow-glyph'

type WorkCardProps = {
  project: WorkProject
  locale: Locale
  priority?: boolean
}

export function WorkCard({ project, locale, priority = false }: WorkCardProps) {
  const tags = project.tags.map((tag) => tag[locale])
  const headline = project.headline[locale]
  const liveUrl = project.liveUrl
  const ariaLabel = visitAriaLabel(locale, project.name[locale])

  const figure = (
    <figure className="relative mt-1 aspect-[5/4] overflow-hidden bg-paper-deep">
      <img
        src={project.cover}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
        aria-hidden
      />

      <span
        className="absolute left-4 top-4 grid size-8 place-items-center bg-paper/0 font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-paper ring-1 ring-paper/35 backdrop-blur-[2px]"
        aria-hidden
      >
        {project.mark}
      </span>

      <span
        className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/80"
        aria-hidden
      >
        (©{project.yearmark})
      </span>

      <figcaption className="absolute inset-x-5 bottom-5 whitespace-pre-line font-display text-[1.6rem] font-medium uppercase leading-[1.02] tracking-[-0.01em] text-paper md:inset-x-6 md:bottom-6 md:text-[2rem]">
        {headline}
      </figcaption>
    </figure>
  )

  return (
    <article
      className="group relative flex flex-col gap-7 border border-ink/10 bg-paper p-5 transition-colors duration-500 hover:border-ink/25 md:p-6"
      aria-label={`${project.name[locale]} — ${project.category[locale]}`}
    >
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="grid size-7 shrink-0 place-items-center bg-ink font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-paper"
            aria-hidden
          >
            {project.mark}
          </span>
          <h3 className="font-display text-lg leading-none tracking-[-0.01em] text-ink">
            {project.name[locale]}
          </h3>
        </div>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={ariaLabel}
            className="grid size-9 -translate-y-0.5 place-items-center rounded-full bg-ink text-paper opacity-0 transition duration-300 ease-out hover:bg-ink-soft focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ArrowGlyph />
          </a>
        ) : null}
      </header>

      <p
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55"
        aria-label={tags.join(', ')}
      >
        {tags.map((tag, i) => (
          <span key={tag}>
            {tag}
            {i < tags.length - 1 ? (
              <span className="mx-2 text-ink/25" aria-hidden>
                /
              </span>
            ) : null}
          </span>
        ))}
      </p>

      <p className="max-w-prose font-sans text-[15px] leading-7 text-ink/75">
        {project.description[locale]}
      </p>

      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={ariaLabel}
          className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          {figure}
        </a>
      ) : (
        figure
      )}
    </article>
  )
}
