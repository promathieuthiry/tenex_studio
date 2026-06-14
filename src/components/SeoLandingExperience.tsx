import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { BOOK_LINK_ATTRS, BOOK_URL } from "@/lib/book";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  EXPERT_SERVICE_ICPS,
  SEO_LANDING_PAGE_BY_ID,
  seoLandingPath,
  type SeoLandingPage,
} from "@/data/seo-landing-pages";

const COPY = {
  fr: {
    chaptersLabel: "Lecture",
    methodLabel: "Méthode",
    relatedLabel: "ICP prioritaires",
    relatedTitle: "Les services experts que nous savons rendre lisibles.",
    relatedBody:
      "Chaque segment demande un site qui prouve vite le niveau, clarifie l’offre et filtre les mauvais prospects.",
    finalEyebrow: "Cadrage",
    finalTitle: "Clarifier avant de convaincre.",
    finalBody:
      "On part de vos preuves, de vos clients idéaux et de vos contraintes. Puis on transforme tout cela en pages, textes, design et code qui qualifient mieux.",
  },
  en: {
    chaptersLabel: "Reading",
    methodLabel: "Method",
    relatedLabel: "Priority ICPs",
    relatedTitle: "The expert services we know how to make readable.",
    relatedBody:
      "Each segment needs a site that proves level fast, clarifies the offer and filters poor-fit prospects.",
    finalEyebrow: "Scoping",
    finalTitle: "Clarify before convincing.",
    finalBody:
      "We start from your proof, ideal clients and constraints. Then we turn that into pages, copy, design and code that qualify better.",
  },
} as const;

const ENTER = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
} as const;

function sectionId(index: number): string {
  return `landing-section-${index + 1}`;
}

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function SeoLandingExperience({
  page,
  locale,
}: {
  page: SeoLandingPage;
  locale: Locale;
}) {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState(0);
  const copy = COPY[locale];

  const icpCards = useMemo(
    () =>
      EXPERT_SERVICE_ICPS.map((icp) => ({
        ...icp,
        page: icp.pageId ? SEO_LANDING_PAGE_BY_ID.get(icp.pageId) : undefined,
      })),
    [],
  );

  useEffect(() => {
    const nodes = page.sections
      .map((_, index) => document.getElementById(sectionId(index)))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.34, 340);

      const nextIndex = nodes.reduce(
        (best, node, index) => {
          const rect = node.getBoundingClientRect();
          const distance =
            rect.top <= readingLine && rect.bottom >= readingLine
              ? 0
              : Math.min(
                  Math.abs(rect.top - readingLine),
                  Math.abs(rect.bottom - readingLine),
                );

          return distance < best.distance ? { distance, index } : best;
        },
        { distance: Number.POSITIVE_INFINITY, index: 0 },
      ).index;

      setActiveSection((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [page.sections]);

  function scrollToSection(index: number) {
    setActiveSection(index);
    document.getElementById(sectionId(index))?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <article className="bg-paper text-ink">
      <header className="relative flex min-h-screen min-h-[100dvh] overflow-hidden border-b border-ink/15 bg-ink px-6 pb-12 pt-28 text-paper md:px-12 md:pb-14 md:pt-32 lg:px-16">
        <img
          src={page.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,18,0.88)_0%,rgba(15,15,18,0.72)_45%,rgba(15,15,18,0.36)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,18,0.20)_0%,rgba(15,15,18,0.12)_48%,rgba(15,15,18,0.72)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-accent"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-screen-xl items-end">
          <motion.div
            variants={ENTER}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
              {page.eyebrow[locale]}
            </p>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-normal text-paper md:text-6xl lg:text-7xl">
              {page.title[locale]}
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-6">
              <p className="max-w-2xl font-sans text-lg leading-8 text-paper/78">
                {page.intro[locale]}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={BOOK_URL}
                  {...BOOK_LINK_ATTRS}
                  variant="primary"
                  surface="dark"
                  size="lg"
                  withArrow
                >
                  {page.cta[locale]}
                </Button>
                <button
                  type="button"
                  onClick={() => scrollToSection(0)}
                  className="inline-flex h-12 cursor-pointer items-center rounded-full border border-paper/25 px-5 font-sans text-sm text-paper transition hover:border-paper"
                >
                  {copy.methodLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
              {copy.chaptersLabel}
            </p>
            <div className="mt-6 overflow-hidden rounded-[8px] border border-ink/10">
              {page.sections.map((section, index) => (
                <button
                  key={section.title[locale]}
                  type="button"
                  aria-current={activeSection === index ? "step" : undefined}
                  onClick={() => scrollToSection(index)}
                  className={cx(
                    "relative grid min-h-14 w-full cursor-pointer grid-cols-[3rem_1fr] border-b border-ink/10 bg-paper text-left text-ink transition-colors duration-300 last:border-b-0 hover:bg-paper-warm",
                    activeSection === index && "text-paper hover:bg-paper",
                  )}
                >
                  {activeSection === index ? (
                    <motion.span
                      aria-hidden="true"
                      layoutId="landing-chapter-active"
                      className="absolute inset-0 bg-ink"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                      }
                    />
                  ) : null}
                  <span
                    className={cx(
                      "relative z-10 border-r px-4 py-4 font-mono text-xs transition-colors duration-300",
                      activeSection === index
                        ? "border-paper/15 text-accent"
                        : "border-ink/10 text-ink/40",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="relative z-10 px-4 py-4 font-sans text-sm leading-5 transition-colors duration-300">
                    {section.title[locale]}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            {page.sections.map((section, index) => (
              <motion.section
                key={section.title[locale]}
                id={sectionId(index)}
                data-section-index={index}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cx(
                  "group scroll-mt-28 rounded-[8px] border bg-paper p-5 transition duration-300 md:p-0",
                  activeSection === index
                    ? "border-ink/25 shadow-[0_18px_50px_rgba(15,15,18,0.08)]"
                    : "border-ink/10 hover:border-ink/35",
                )}
              >
                <div className="flex items-center justify-between border-ink/10 pb-5 md:border-b md:px-8 md:py-5">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cx(
                      "h-2 w-2 rounded-full",
                      activeSection === index ? "bg-accent" : "bg-ink/15",
                    )}
                  />
                </div>
                <div className="pt-8 md:p-8 md:pt-7">
                  <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-normal text-ink md:text-5xl">
                    {section.title[locale]}
                  </h2>
                  <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-ink/68 md:text-lg">
                    {section.body[locale]}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink/10 bg-ink text-paper">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(226,35,26,0.34),transparent_28%),linear-gradient(135deg,rgba(226,35,26,0.18)_0%,rgba(15,15,18,0.98)_42%,rgba(15,15,18,1)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-accent"
        />
        <div className="relative mx-auto max-w-screen-xl px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper/45">
              {copy.finalEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-black leading-[1.05] tracking-normal md:text-7xl">
              {copy.finalTitle}
            </h2>
          </div>

          <div className="mt-10 border-t border-paper/15 pt-8 md:mt-12 md:flex md:items-end md:justify-between md:gap-12">
            <p className="max-w-3xl font-sans text-lg leading-8 text-paper/70">
              {copy.finalBody}
            </p>
            <div className="mt-8 shrink-0 md:mt-0">
              <Button
                href={BOOK_URL}
                {...BOOK_LINK_ATTRS}
                variant="accent"
                surface="dark"
                size="lg"
                withArrow
              >
                {page.cta[locale]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <aside className="border-b border-ink/10 bg-paper-warm">
        <div className="mx-auto grid max-w-screen-xl gap-10 px-6 py-16 md:px-12 md:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-16">
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
              {copy.relatedLabel}
            </p>
            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-normal md:text-5xl">
              {copy.relatedTitle}
            </h2>
            <p className="mt-5 font-sans text-base leading-7 text-ink/60">
              {copy.relatedBody}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {icpCards.map((icp, index) => {
              const cardClass =
                "group relative min-h-40 overflow-hidden rounded-[8px] border border-ink/10 bg-paper p-4 font-sans text-sm leading-6 text-ink/58 transition hover:border-ink/35 hover:text-ink/70";
              const content = (
                <>
                  {icp.hoverImage ? (
                    <>
                      <img
                        src={icp.hoverImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-ink/72 opacity-0 transition duration-500 group-hover:opacity-100"
                      />
                    </>
                  ) : null}
                  <span
                    className={cx(
                      "relative z-10 block font-mono text-[11px] uppercase tracking-[0.12em] text-accent transition-colors",
                      icp.hoverImage && "group-hover:text-paper/70",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cx(
                      "relative z-10 mt-4 block font-display text-2xl font-black leading-tight tracking-normal text-ink transition-colors",
                      icp.hoverImage && "group-hover:text-paper",
                    )}
                  >
                    {icp.label[locale]}
                  </span>
                  <span
                    className={cx(
                      "relative z-10 mt-4 block font-sans text-sm font-normal leading-6 text-ink/58 transition-colors",
                      icp.hoverImage && "group-hover:text-paper/72",
                    )}
                  >
                    {icp.body[locale]}
                  </span>
                </>
              );

              if (icp.page) {
                return (
                  <motion.a
                    key={icp.label[locale]}
                    href={seoLandingPath(icp.page, locale)}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className={cardClass}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.article
                  key={icp.label[locale]}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className={cardClass}
                >
                  {content}
                </motion.article>
              );
            })}
          </div>
        </div>
      </aside>
    </article>
  );
}
