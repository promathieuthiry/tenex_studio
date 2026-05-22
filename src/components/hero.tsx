import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";

import type { Locale } from "@/lib/i18n";
import { HERO } from "@/data/hero";
import { HeroPortrait } from "@/components/hero-portrait";
import { RevealText, REVEAL_EASE } from "@/components/ui/reveal-text";

const WORDMARK = "TeneX Studio";
const DIM_CHAR_INDEX = 3; // the second "e" stays at reduced opacity

const wordmarkContainer: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.035 } },
};
const wordmarkChar = (rest: number): Variants => ({
  hidden: { y: "0.4em", opacity: 0, filter: "blur(12px)" },
  show: {
    y: 0,
    opacity: rest,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: REVEAL_EASE },
  },
});

const PORTRAIT_ALT: Readonly<Record<Locale, string>> = {
  fr: "Portrait de Mathieu Thiry, fondateur de Tenex Studio",
  en: "Portrait of Mathieu Thiry, founder of Tenex Studio",
};

export function Hero({
  locale,
  scrollProgress,
}: {
  locale: Locale;
  scrollProgress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();

  const underlineScale = useTransform(scrollProgress, [0, 1], [0, 1]);

  return (
    <section className="relative flex min-h-dvh flex-col justify-between gap-10 border-y border-ink/15 bg-paper px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-start gap-10 pt-20 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <span className="relative inline-block">
            <motion.span
              aria-hidden="true"
              className="absolute bottom-[0.2em] left-0 z-0 block h-[0.35em] w-full origin-left bg-accent md:bottom-[0.28em] md:h-[0.68em] lg:bottom-[0.30em] lg:h-[0.82em]"
              style={{ scaleX: reduced ? 1 : underlineScale }}
            />
            <RevealText
              as="h1"
              text={HERO.headline[locale]}
              splitBy="word"
              delay={0.15}
              stagger={0.07}
              duration={0.9}
              className="relative z-10 font-display text-xl font-bold uppercase leading-[1.15] tracking-tight text-ink md:text-3xl lg:text-4xl"
            />
          </span>
        </div>

        <HeroPortrait alt={PORTRAIT_ALT[locale]} />
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <motion.p
          className="max-w-md md:max-w-2xl lg:max-w-3xl font-sans text-base md:text-lg lg:text-xl leading-relaxed text-ink/65"
          initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={reduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.55, ease: REVEAL_EASE }}
        >
          {HERO.subheadline[locale]}
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(2.5rem, 12vw, 11rem)" }}
          aria-label={WORDMARK}
          variants={reduced ? undefined : wordmarkContainer}
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "show"}
        >
          {reduced ? (
            <>
              Ten<span className="opacity-40">e</span>X Studio
            </>
          ) : (
            [...WORDMARK].map((char, i) =>
              char === " " ? (
                <span key={i} aria-hidden="true">
                  {" "}
                </span>
              ) : (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="inline-block"
                  variants={wordmarkChar(i === DIM_CHAR_INDEX ? 0.4 : 1)}
                >
                  {char}
                </motion.span>
              ),
            )
          )}
        </motion.h2>
      </div>
    </section>
  );
}
