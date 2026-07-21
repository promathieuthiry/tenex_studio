import { visitAriaLabel } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { WorkProject } from "@/data/work";
import { workPath, CASE_STUDY_LABELS } from "@/data/work";
import { ArrowGlyph } from "@/components/arrow-glyph";
import { BODY, META, TITLE_SM } from "@/lib/type";

type WorkCardProps = {
  project: WorkProject;
  locale: Locale;
  priority?: boolean;
};

export function WorkCard({ project, locale, priority = false }: WorkCardProps) {
  const tags = project.tags.map((tag) => tag[locale]);
  const sector = project.sector[locale];
  const liveUrl = project.liveUrl;
  const caseUrl = workPath(project, locale);
  const visitLabel = visitAriaLabel(locale, project.name[locale]);
  const caseLabel = `${CASE_STUDY_LABELS[locale].viewCaseStudy}: ${project.name[locale]}`;

  return (
    <article className="group relative flex h-full flex-col gap-7 border border-ink/10 bg-paper p-5 transition-colors duration-500 hover:border-ink/25 md:p-6">
      <a
        href={caseUrl}
        aria-label={caseLabel}
        className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <span className="sr-only">{caseLabel}</span>
      </a>

      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={project.icon}
            alt=""
            className="size-7 shrink-0 rounded-xs"
            aria-hidden
          />
          <h3 className={`${TITLE_SM} text-ink`}>{project.name[locale]}</h3>
        </div>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={visitLabel}
            className="relative z-20 grid size-9 -translate-y-0.5 place-items-center rounded-full bg-ink text-paper opacity-0 transition duration-300 ease-out hover:bg-ink-soft focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ArrowGlyph />
          </a>
        ) : null}
      </header>

      <p className={`${META} text-ink/70`}>
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

      <p className={`max-w-prose ${BODY} text-ink/70`}>
        {project.description[locale]}
      </p>

      <figure className="relative mt-auto aspect-[5/4] overflow-hidden bg-paper-deep">
        <img
          src={project.cover}
          alt=""
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <figcaption className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/90 py-1.5 pr-3.5 pl-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-ink shadow-[0_2px_10px_rgba(15,15,18,0.16)] backdrop-blur-md">
            <span
              className="size-1.5 shrink-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-125"
              aria-hidden
            />
            {sector}
          </span>
        </figcaption>
      </figure>

      <p
        className={`${META} inline-flex items-center gap-1.5 text-ink/45 transition-colors duration-300 group-hover:text-ink`}
        aria-hidden
      >
        {CASE_STUDY_LABELS[locale].viewCaseStudy}
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </p>
    </article>
  );
}
