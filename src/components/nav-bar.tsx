import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import type { Locale } from "@/lib/i18n";
import { NAV_LANDMARK, NAV_LINKS, TALK_PILL, WORDMARK } from "@/data/nav";
import { LocaleSwitcher } from "./locale-switcher";
import { Button } from "@/components/ui/button";
import { BOOK_URL, BOOK_LINK_ATTRS } from "@/lib/book";

const REVEAL_THRESHOLD = 80;
const DELTA = 6;

const GLASS_PILL =
  "relative overflow-hidden rounded-lg bg-paper/40 backdrop-blur-2xl backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0)_55%,rgba(255,255,255,0.2)_100%)] before:opacity-80 before:mix-blend-overlay";

export function NavBar({ locale }: { locale: Locale }) {
  const homeHref = locale === "fr" ? "/" : "/en";
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const programmaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<number | null>(null);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (reduceMotion) {
      count.set(10);
      return;
    }
    const controls = animate(count, 10, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [reduceMotion, count]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (programmaticScroll.current) return;
    if (current < REVEAL_THRESHOLD) {
      setHidden(false);
      return;
    }
    const previous = scrollY.getPrevious() ?? 0;
    const delta = current - previous;
    if (delta > DELTA) setHidden(true);
    else if (delta < -DELTA) setHidden(false);
  });

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const url = new URL(href, window.location.origin);
    if (!url.hash || url.pathname !== window.location.pathname) return;
    const id = url.hash.slice(1);
    const target =
      document.getElementById(`${id}-heading`) ?? document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const headerEl = document.querySelector("header");
    const offset = headerEl ? headerEl.getBoundingClientRect().height + 24 : 88;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - offset;

    programmaticScroll.current = true;
    setHidden(false);
    window.scrollTo({
      top: targetTop,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.pushState(null, "", url.hash);

    if (programmaticScrollTimer.current !== null) {
      window.clearTimeout(programmaticScrollTimer.current);
    }
    programmaticScrollTimer.current = window.setTimeout(
      () => {
        programmaticScroll.current = false;
        programmaticScrollTimer.current = null;
      },
      reduceMotion ? 50 : 900,
    );
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: reduceMotion || !hidden ? 0 : -140 }}
      transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 md:pt-4"
    >
      <div
        className={`${GLASS_PILL} flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 py-2 md:px-6 md:py-3`}
      >
        <a
          href={homeHref}
          className="relative z-10 flex items-center gap-2 transition hover:opacity-80"
          aria-label={WORDMARK}
        >
          <span
            aria-hidden="true"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent md:h-12 md:w-12"
          >
            <span className="font-display font-bold leading-none tracking-[-0.07em] text-paper/50 text-[1.1rem] md:text-[1.4rem] tabular-nums">
              <motion.span>{rounded}</motion.span>x
            </span>
          </span>
          <span className="relative z-10 font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink text-lg md:text-xl">
            Studio
          </span>
        </a>

        <nav
          aria-label={NAV_LANDMARK[locale]}
          className="relative z-10 hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const href = link.href?.[locale];
            if (!href) {
              return (
                <span
                  key={link.id}
                  aria-disabled="true"
                  className="relative z-10 font-sans font-semibold text-sm text-ink/40"
                >
                  {link.label[locale]}
                </span>
              );
            }
            return (
              <a
                key={link.id}
                href={href}
                onClick={(event) => handleHashClick(event, href)}
                className="relative z-10 font-sans font-semibold text-sm text-ink transition hover:opacity-70"
              >
                {link.label[locale]}
              </a>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <Button
            href={BOOK_URL}
            {...BOOK_LINK_ATTRS}
            variant="primary"
            surface="light"
            size="md"
            className="font-semibold"
          >
            {TALK_PILL.label[locale]}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
