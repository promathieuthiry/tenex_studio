import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";

import type { Locale } from "@/lib/i18n";
import { HERO } from "@/data/hero";
import { HeroPortrait } from "@/components/hero-portrait";

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

  // Underline draws over the same scroll range that shrinks the portrait
  // (MonoHero scale runs [0,1]); it is fully drawn by 0.7 progress.
  const underlineScale = useTransform(scrollProgress, [0, 0.7], [0, 1]);

  return (
    <section className="relative flex min-h-dvh flex-col justify-between gap-10 border-y border-ink/15 bg-paper px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-start gap-10 pt-20 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <span className="relative inline-block">
            <motion.span
              aria-hidden="true"
              className="absolute bottom-[0.30em] left-0 z-0 block h-[0.82em] w-full origin-left bg-accent"
              style={{ scaleX: reduced ? 1 : underlineScale }}
            />
            <h1 className="relative z-10 font-display text-lg font-bold uppercase leading-[1.15] tracking-tight text-ink md:text-2xl lg:text-4xl">
              {HERO.headline[locale]}
            </h1>
          </span>
        </div>

        <HeroPortrait alt={PORTRAIT_ALT[locale]} />
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <p className="max-w-md md:max-w-2xl lg:max-w-3xl font-sans text-base md:text-lg lg:text-xl leading-relaxed text-ink/65">
          {HERO.subheadline[locale]}
        </p>

        <h2
          className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(2.5rem, 12vw, 14rem)" }}
        >
          Ten<span className="opacity-40">e</span>X Studio
        </h2>
      </div>
    </section>
  );
}
