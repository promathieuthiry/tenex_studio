import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { BOOK_LINK_ATTRS, BOOK_URL } from "@/lib/book";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  EXPERT_SERVICE_ICPS,
  SEO_LANDING_PAGE_BY_ID,
  seoLandingPath,
  type SeoLandingPage,
} from "@/data/seo-landing-pages";
import { SECTION, SECTION_X, CONTAINER } from "@/lib/layout";
import { BODY, BODY_SM, LEAD, TITLE_LG, TITLE_SM, TITLE_XL } from "@/lib/type";

const COPY = {
  fr: {
    methodLabel: "Méthode",
    proofTitle: "Ce que le site doit prouver vite.",
    faqTitle: "Les points à clarifier avant de lancer.",
    relatedTitle: "Les services experts que nous savons rendre lisibles.",
    relatedBody:
      "Chaque segment demande un site qui prouve vite le niveau, clarifie l’offre et filtre les mauvais prospects.",
    finalTitle: "Clarifier avant de convaincre.",
    finalBody:
      "On part de vos preuves, de vos clients idéaux et de vos contraintes. Puis on transforme tout cela en pages, textes, design et code qui qualifient mieux.",
  },
  en: {
    methodLabel: "Method",
    proofTitle: "What the site must prove fast.",
    faqTitle: "The points to clarify before launch.",
    relatedTitle: "The expert services we know how to make readable.",
    relatedBody:
      "Each segment needs a site that proves level fast, clarifies the offer and filters poor-fit prospects.",
    finalTitle: "Clarify before convincing.",
    finalBody:
      "We start from your proof, ideal clients and constraints. Then we turn that into pages, copy, design and code that qualify better.",
  },
} as const;

const PREMIUM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HERO_GROUP: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const HERO_ITEM: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const REVEAL: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const CARD_REVEAL: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

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

  const relatedCards = useMemo(
    () => {
      if (page.id === "custom-websites") {
        return EXPERT_SERVICE_ICPS.map((icp) => ({
          ...icp,
          page: icp.pageId ? SEO_LANDING_PAGE_BY_ID.get(icp.pageId) : undefined,
        }));
      }

      return page.relatedIds
        .map((id) => {
          const relatedPage = SEO_LANDING_PAGE_BY_ID.get(id);
          if (!relatedPage) return null;

          const icp = EXPERT_SERVICE_ICPS.find((item) => item.pageId === id);
          return {
            pageId: id,
            label: icp?.label ?? relatedPage.eyebrow,
            body: icp?.body ?? relatedPage.proof[0] ?? relatedPage.intro,
            hoverImage: icp?.hoverImage ?? relatedPage.heroImage,
            page: relatedPage,
          };
        })
        .filter((card): card is NonNullable<typeof card> => Boolean(card));
    },
    [page.id, page.relatedIds],
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
      <header
        className={`relative flex min-h-screen min-h-[100dvh] overflow-hidden border-b border-ink/15 bg-ink text-paper ${SECTION_X} pb-12 pt-28 md:pb-28 md:pt-32 lg:pb-36`}
      >
        <motion.img
          src={page.heroImage}
          alt=""
          aria-hidden="true"
          initial={reduceMotion ? false : { scale: 1.06, opacity: 0.72 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.35, ease: PREMIUM_EASE }}
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
        <div className={`relative z-10 flex w-full items-end ${CONTAINER}`}>
          <motion.div
            variants={HERO_GROUP}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="max-w-5xl"
          >
            <motion.h1
              variants={HERO_ITEM}
              transition={{ duration: 0.78, ease: PREMIUM_EASE }}
              className={`max-w-4xl ${TITLE_XL} text-paper`}
            >
              {page.title[locale]}
            </motion.h1>

            <motion.div
              variants={HERO_ITEM}
              transition={{ duration: 0.74, ease: PREMIUM_EASE }}
              className="mt-8 flex max-w-2xl flex-col gap-6"
            >
              <p className={`max-w-2xl ${LEAD} text-paper/75`}>
                {page.intro[locale]}
              </p>
              <motion.div
                variants={HERO_ITEM}
                transition={{ duration: 0.62, ease: PREMIUM_EASE }}
                className="flex flex-wrap items-center gap-3"
              >
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
                  className={`inline-flex h-12 cursor-pointer items-center rounded-full border border-paper/25 px-5 ${BODY_SM} text-paper transition hover:border-paper`}
                >
                  {copy.methodLabel}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className={`border-b border-ink/10 ${SECTION}`}>
        <div className={`${CONTAINER} grid gap-8 lg:grid-cols-[0.34fr_0.66fr]`}>
          <div>
            <h2 className={`max-w-md ${TITLE_LG} text-ink`}>{copy.proofTitle}</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {page.proof.map((item, index) => (
              <motion.article
                key={item[locale]}
                variants={CARD_REVEAL}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.48,
                  ease: PREMIUM_EASE,
                  delay: reduceMotion ? 0 : index * 0.04,
                }}
                className="rounded-[8px] border border-ink/10 bg-paper p-5"
              >
                <span aria-hidden className="block h-px w-10 bg-ink/20" />
                <p className={`mt-5 ${BODY} text-ink/70`}>{item[locale]}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={SECTION}>
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.34fr_0.66fr]`}>
          <motion.aside
            variants={REVEAL}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-[8px] border border-ink/10">
              {page.sections.map((section, index) => (
                <button
                  key={section.title[locale]}
                  type="button"
                  aria-current={activeSection === index ? "step" : undefined}
                  onClick={() => scrollToSection(index)}
                  className={cx(
                    "relative flex min-h-14 w-full cursor-pointer items-center border-b border-ink/10 bg-paper px-5 py-4 text-left text-ink transition-colors duration-300 last:border-b-0 hover:bg-paper-warm",
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
                    className={`relative z-10 ${BODY_SM} transition-colors duration-300`}
                  >
                    {section.title[locale]}
                  </span>
                </button>
              ))}
            </div>
          </motion.aside>

          <div className="grid gap-4">
            {page.sections.map((section, index) => (
              <motion.section
                key={section.title[locale]}
                id={sectionId(index)}
                data-section-index={index}
                variants={REVEAL}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{
                  duration: 0.58,
                  ease: PREMIUM_EASE,
                  delay: reduceMotion ? 0 : index * 0.035,
                }}
                className={cx(
                  "group relative scroll-mt-28 overflow-hidden rounded-[8px] border bg-paper p-5 transition duration-300 md:p-8",
                  activeSection === index
                    ? "border-ink/25 shadow-[0_18px_50px_rgba(15,15,18,0.08)]"
                    : "border-ink/10 hover:border-ink/35",
                )}
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ scaleY: activeSection === index ? 1 : 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.32, ease: PREMIUM_EASE }
                  }
                  style={{ transformOrigin: "50% 0%" }}
                  className="absolute inset-y-0 left-0 w-0.5 bg-accent"
                />
                <h2 className={`max-w-2xl ${TITLE_LG} text-ink`}>
                  {section.title[locale]}
                </h2>
                <p className={`mt-6 max-w-2xl ${LEAD} text-ink/70`}>
                  {section.body[locale]}
                </p>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {page.faq?.length ? (
        <section className={`border-t border-ink/10 ${SECTION}`}>
          <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[0.34fr_0.66fr]`}>
            <div className="max-w-md">
              <h2 className={`${TITLE_LG} text-ink`}>{copy.faqTitle}</h2>
            </div>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {page.faq.map((item) => (
                <details key={item.question[locale]} className="group py-6">
                  <summary
                    className={`flex cursor-pointer list-none items-start justify-between gap-6 ${TITLE_SM} text-ink marker:hidden`}
                  >
                    <span>{item.question[locale]}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-mono text-lg font-normal text-ink/40 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className={`mt-4 max-w-3xl ${BODY} text-ink/70`}>
                    {item.answer[locale]}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden border-y border-ink/10 bg-ink text-paper">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(226,35,26,0.34),transparent_28%),linear-gradient(135deg,rgba(226,35,26,0.18)_0%,rgba(15,15,18,0.98)_42%,rgba(15,15,18,1)_100%)]"
        />
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: PREMIUM_EASE }}
          className="absolute inset-x-0 top-0 h-px bg-accent"
          style={{ transformOrigin: "0% 50%" }}
        />
        <motion.div
          variants={HERO_GROUP}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className={`relative ${CONTAINER} ${SECTION}`}
        >
          <div className="max-w-5xl">
            <motion.h2
              variants={HERO_ITEM}
              transition={{ duration: 0.72, ease: PREMIUM_EASE }}
              className={TITLE_XL}
            >
              {copy.finalTitle}
            </motion.h2>
          </div>

          <motion.div
            variants={HERO_ITEM}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="mt-10 border-t border-paper/15 pt-8 md:mt-12 md:flex md:items-end md:justify-between md:gap-12"
          >
            <p className={`max-w-3xl ${LEAD} text-paper/70`}>
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
          </motion.div>
        </motion.div>
      </section>

      <aside className="border-b border-ink/10 bg-paper-warm">
        <div
          className={`${CONTAINER} ${SECTION} grid gap-10 lg:grid-cols-[0.35fr_0.65fr]`}
        >
          <motion.div
            variants={REVEAL}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.62, ease: PREMIUM_EASE }}
            className="max-w-md"
          >
            <h2 className={TITLE_LG}>{copy.relatedTitle}</h2>
            <p className={`mt-5 ${BODY} text-ink/60`}>{copy.relatedBody}</p>
          </motion.div>
          <motion.div
            variants={HERO_GROUP}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-90px" }}
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
          >
            {relatedCards.map((icp) => {
              const cardClass =
                "group relative min-h-40 overflow-hidden rounded-[8px] border border-ink/10 bg-paper p-5 transition hover:border-ink/35";
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
                      "relative z-10 block",
                      TITLE_SM,
                      "text-ink transition-colors",
                      icp.hoverImage && "group-hover:text-paper",
                    )}
                  >
                    {icp.label[locale]}
                  </span>
                  <span
                    className={cx(
                      "relative z-10 mt-4 block",
                      BODY_SM,
                      "text-ink/60 transition-colors",
                      icp.hoverImage && "group-hover:text-paper/70",
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
                    variants={CARD_REVEAL}
                    transition={{ duration: 0.48, ease: PREMIUM_EASE }}
                    whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                    className={cardClass}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.article
                  key={icp.label[locale]}
                  variants={CARD_REVEAL}
                  transition={{ duration: 0.48, ease: PREMIUM_EASE }}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  className={cardClass}
                >
                  {content}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </aside>
    </article>
  );
}
