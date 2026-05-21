import { useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

import type { Locale } from "@/lib/i18n";
import { NAV_LANDMARK, NAV_LINKS, TALK_PILL, WORDMARK } from "@/data/nav";
import { GradientOrb } from "./gradient-orb";
import { LocaleSwitcher } from "./locale-switcher";

const REVEAL_THRESHOLD = 80;
const DELTA = 6;

export function NavBar({ locale }: { locale: Locale }) {
  const homeHref = locale === "fr" ? "/" : "/en";
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const programmaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<number | null>(null);

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

  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(href, window.location.origin);
    if (!url.hash || url.pathname !== window.location.pathname) return;
    const id = url.hash.slice(1);
    const target =
      document.getElementById(`${id}-heading`) ?? document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const headerEl = document.querySelector("header");
    const offset = headerEl ? headerEl.getBoundingClientRect().height + 24 : 88;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

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
    programmaticScrollTimer.current = window.setTimeout(() => {
      programmaticScroll.current = false;
      programmaticScrollTimer.current = null;
    }, reduceMotion ? 50 : 900);
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: reduceMotion || !hidden ? 0 : -140 }}
      transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 md:pt-4"
    >
      <div className="flex w-full max-w-screen-xl items-center justify-between gap-4 rounded-full border border-ink/5 bg-paper/90 px-4 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur md:px-6 md:py-3">
        <a
          href={homeHref}
          className="flex items-center gap-2 transition hover:opacity-80"
          aria-label={WORDMARK}
        >
          <span className="relative inline-flex items-center justify-center">
            <GradientOrb size="1.75rem" className="md:hidden" />
            <GradientOrb size="2.25rem" className="hidden md:inline-flex" />
            <img
              src="/brand/tenex-monogram-inverse.svg"
              alt=""
              aria-hidden="true"
              className="absolute h-3.5 w-auto md:h-7"
            />
          </span>
          <span className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink text-lg md:text-xl">
            Studio
          </span>
        </a>

        <nav
          aria-label={NAV_LANDMARK[locale]}
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const href = link.href?.[locale];
            if (!href) {
              return (
                <span
                  key={link.id}
                  aria-disabled="true"
                  className="font-sans text-sm text-ink/40"
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
                className="font-sans text-sm text-ink transition hover:opacity-70"
              >
                {link.label[locale]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <a
            href={TALK_PILL.href[locale]}
            className="hidden rounded-full bg-ink px-4 py-2 font-sans text-xs text-paper transition hover:opacity-80 md:inline-block"
          >
            {TALK_PILL.label[locale]}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
