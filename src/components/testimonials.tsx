import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { visitAriaLabel } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import {
  TESTIMONIALS,
  TESTIMONIALS_HEADER,
  type Testimonial,
} from "@/data/testimonials";
import { SectionHeader } from "@/components/section-header";
import { SECTION_X, SECTION_Y, CONTAINER, HEADER_GAP } from "@/lib/layout";
import { ArrowGlyph } from "@/components/arrow-glyph";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const COPY = {
  fr: {
    readMore: "Lire le témoignage",
    close: "Fermer",
  },
  en: {
    readMore: "Read testimonial",
    close: "Close",
  },
} as const satisfies Record<Locale, { readMore: string; close: string }>;

const CARD_BASE =
  "group relative flex h-[28rem] w-[80vw] shrink-0 cursor-pointer flex-col rounded-[var(--radius-card-lg)] bg-paper p-7 text-left shadow-[0_1px_0_rgba(15,15,18,0.04),0_30px_60px_-30px_rgba(15,15,18,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-paper-cool hover:shadow-[0_1px_0_rgba(15,15,18,0.06),0_40px_80px_-30px_rgba(15,15,18,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:h-[34rem] sm:w-[22rem] md:w-[28rem] md:p-9";

const TRACK_BASE =
  "flex shrink-0 gap-6 px-6 md:gap-8 md:pr-10 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]";

const TESTIMONIAL_COUNT = TESTIMONIALS.length;

type PinWrapStyle = CSSProperties & {
  "--testimonials-mobile-scroll": string;
  "--testimonials-sm-scroll": string;
  "--testimonials-md-scroll": string;
};

const PIN_WRAP_STYLE: PinWrapStyle = {
  "--testimonials-mobile-scroll": `max(0px, ${
    TESTIMONIAL_COUNT * 80
  }vw + ${(TESTIMONIAL_COUNT - 1) * 1.5 + 3}rem - 100vw)`,
  "--testimonials-sm-scroll": `max(0px, ${
    TESTIMONIAL_COUNT * 22 + (TESTIMONIAL_COUNT - 1) * 1.5 + 3
  }rem - 100vw)`,
  "--testimonials-md-scroll": `max(0px, ${
    TESTIMONIAL_COUNT * 28 + (TESTIMONIAL_COUNT - 1) * 2 + 2.5
  }rem + max(2.5rem, calc((100vw - 80rem) / 2 + 2.5rem)) - 100vw)`,
};

function Card({
  t,
  locale,
  className,
}: {
  t: Testimonial;
  locale: Locale;
  className?: string;
}) {
  const copy = COPY[locale];
  const ariaLabel = visitAriaLabel(locale, t.name[locale]);

  const handleVisitClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={className ? `${CARD_BASE} ${className}` : CARD_BASE}
        >
          <span className="sr-only">{copy.readMore}</span>
          <div className="flex items-start justify-between">
            <span
              aria-hidden
              className="font-display text-7xl leading-[0.7] text-ink md:text-8xl"
            >
              &ldquo;
            </span>

            <a
              href={t.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              onClick={handleVisitClick}
              className="grid size-9 -translate-y-0.5 place-items-center rounded-full bg-ink text-paper opacity-0 transition duration-300 ease-out hover:bg-ink-soft focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ArrowGlyph size={20} />
            </a>
          </div>

          <blockquote className="mb-6 mt-10 line-clamp-8 font-display text-lg leading-[1.4] tracking-[-0.005em] text-ink md:mb-8 md:text-[20px] md:line-clamp-9">
            {t.quote[locale]}
          </blockquote>

          <div className="mt-auto flex items-center gap-4 border-t border-ink/8 pt-6">
            <img
              src={t.portrait}
              alt=""
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="size-14 shrink-0 rounded-full bg-ink/5 object-cover"
            />
            <div className="min-w-0">
              <p className="truncate font-sans text-sm font-medium text-ink">
                {t.name[locale]}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70">
                {t.role[locale]}
              </p>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent closeLabel={copy.close}>
        <DialogTitle className="sr-only">{t.name[locale]}</DialogTitle>
        <DialogDescription className="sr-only">
          {t.role[locale]}
        </DialogDescription>

        <div>
          <span
            aria-hidden
            className="font-display text-6xl leading-[0.7] text-ink md:text-7xl"
          >
            &ldquo;
          </span>
        </div>

        <blockquote className="max-h-[60svh] overflow-y-auto pb-4 pr-2 font-display text-base leading-normal tracking-[-0.005em] text-ink md:pb-6 md:text-lg">
          {t.quote[locale]}
        </blockquote>

        <a
          href={t.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="flex items-center gap-4 border-t border-ink/8 pt-6 transition-opacity duration-300 ease-out hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <img
            src={t.portrait}
            alt=""
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="size-16 shrink-0 rounded-full bg-ink/5 object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="font-sans text-sm font-medium text-ink">
              {t.name[locale]}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70">
              {t.role[locale]}
            </p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-paper">
            <ArrowGlyph size={18} />
          </span>
        </a>
      </DialogContent>
    </Dialog>
  );
}

export function Testimonials({ locale }: { locale: Locale }) {
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setScrollDistance((prev) => (prev === 0 ? prev : 0));
      return;
    }
    const measure = () => {
      const track = trackRef.current;
      const wrap = pinWrapRef.current;
      if (!track || !wrap) return;
      const distance = Math.max(0, track.scrollWidth - wrap.clientWidth);
      setScrollDistance((prev) => (prev === distance ? prev : distance));
    };
    measure();
    const ro = new ResizeObserver(measure);
    const track = trackRef.current;
    const wrap = pinWrapRef.current;
    if (track && wrap) {
      ro.observe(track);
      ro.observe(wrap);
    }
    return () => ro.disconnect();
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: pinWrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  const pinned = !reduced && scrollDistance > 0;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`border-y border-ink/8 bg-paper-warm ${SECTION_Y}`}
    >
      <div className={`${CONTAINER} ${SECTION_X}`}>
        <SectionHeader
          title={TESTIMONIALS_HEADER.titleLead[locale]}
          titleTail={TESTIMONIALS_HEADER.titleTail[locale]}
          headingId="testimonials-heading"
          constrained
        />
      </div>

      <div
        ref={pinWrapRef}
        className={`testimonials-pin-wrap relative ${HEADER_GAP} overflow-clip`}
        style={
          pinned
            ? {
                ...PIN_WRAP_STYLE,
                height: `calc(100svh + ${scrollDistance}px)`,
              }
            : PIN_WRAP_STYLE
        }
      >
        <div
          className={
            pinned
              ? "sticky top-0 flex h-svh items-center"
              : "flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 md:gap-8"
          }
          style={pinned ? undefined : { scrollbarWidth: "thin" }}
        >
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className={
              pinned ? `${TRACK_BASE} will-change-transform` : TRACK_BASE
            }
          >
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.id}
                t={t}
                locale={locale}
                className={pinned ? undefined : "snap-start"}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
