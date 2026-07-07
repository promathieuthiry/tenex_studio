import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import type { Locale } from "@/lib/i18n";
import {
  MENU_LABEL,
  NAV_LANDMARK,
  NAV_LINKS,
  TALK_PILL,
  WORDMARK,
  isNavGroup,
  type NavLeaf,
} from "@/data/nav";
import { LocaleSwitcher } from "./locale-switcher";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BOOK_URL, BOOK_LINK_ATTRS } from "@/lib/book";
import { AppWindow, NotebookPen, Wrench, type LucideIcon } from "lucide-react";

const NAV_ICONS: Readonly<Record<string, LucideIcon>> = {
  "custom-websites": AppWindow,
  blog: NotebookPen,
  tools: Wrench,
};

const REVEAL_THRESHOLD = 80;
const DELTA = 6;

const GLASS_PILL =
  "relative rounded-lg bg-paper/40 backdrop-blur-2xl backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0)_55%,rgba(255,255,255,0.2)_100%)] before:opacity-80 before:mix-blend-overlay";

export function NavBar({ locale }: { locale: Locale }) {
  const homeHref = locale === "fr" ? "/" : "/en/";
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const programmaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<number | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuWasOpen = useRef(false);

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

  useEffect(() => {
    if (!menuOpen) {
      if (menuWasOpen.current) menuButtonRef.current?.focus();
      return;
    }
    menuWasOpen.current = true;
    setHidden(false);
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

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
      document.getElementById(id) ?? document.getElementById(`${id}-heading`);
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

  const handleOverlayLink = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);
    handleHashClick(event, href);
  };

  const overlayItem = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const revealItem = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { y: "110%" }, visible: { y: 0 } };

  const renderOverlayLeaf = (leaf: NavLeaf) => {
    const href = leaf.href?.[locale];
    const reveal = (
      <span className="block overflow-hidden">
        <motion.span
          variants={revealItem}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block"
        >
          {leaf.label[locale]}
        </motion.span>
      </span>
    );
    if (!href) {
      return (
        <span
          key={leaf.id}
          aria-disabled="true"
          className="block border-b border-ink/10 py-6 font-display font-bold tracking-[-0.03em] text-ink/30 text-4xl"
        >
          {reveal}
        </span>
      );
    }
    return (
      <a
        key={leaf.id}
        href={href}
        onClick={(event) => handleOverlayLink(event, href)}
        className="block border-b border-ink/10 py-6 font-display font-bold tracking-[-0.03em] text-ink text-4xl transition hover:text-accent"
      >
        {reveal}
      </a>
    );
  };

  return (
    <>
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

          <NavigationMenu
            aria-label={NAV_LANDMARK[locale]}
            className="relative z-10 hidden md:block"
            delayDuration={80}
          >
            <NavigationMenuList className="flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                if (isNavGroup(link)) {
                  return (
                    <NavigationMenuItem key={link.id} className="relative">
                      <NavigationMenuTrigger>
                        {link.label[locale]}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex flex-col gap-1">
                          {link.children.map((child) => {
                            const childHref = child.href?.[locale];
                            if (!childHref) return null;
                            const Icon = NAV_ICONS[child.id];
                            return (
                              <li key={child.id}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={childHref}
                                    onClick={(event) =>
                                      handleHashClick(event, childHref)
                                    }
                                    className="block rounded-md px-3 py-2.5 transition hover:bg-ink/5"
                                  >
                                    <span className="flex items-center gap-2">
                                      {Icon ? (
                                        <Icon
                                          aria-hidden="true"
                                          className="size-4 shrink-0 text-ink/40"
                                        />
                                      ) : null}
                                      <span className="font-sans font-semibold text-sm text-ink">
                                        {child.label[locale]}
                                      </span>
                                    </span>
                                    {child.description ? (
                                      <span className="mt-0.5 block pl-6 font-sans text-xs leading-snug text-ink/55">
                                        {child.description[locale]}
                                      </span>
                                    ) : null}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                const href = link.href?.[locale];
                if (!href) {
                  return (
                    <NavigationMenuItem key={link.id}>
                      <span
                        aria-disabled="true"
                        className="font-sans font-semibold text-sm text-ink/40"
                      >
                        {link.label[locale]}
                      </span>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={href}
                        onClick={(event) => handleHashClick(event, href)}
                        className="font-sans font-semibold text-sm text-ink transition hover:opacity-70"
                      >
                        {link.label[locale]}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative z-10 hidden items-center gap-3 md:flex">
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

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={MENU_LABEL.open[locale]}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="relative z-10 -mr-2 inline-flex h-11 w-11 items-center justify-center text-ink transition hover:opacity-70 md:hidden"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="14" x2="21" y2="14" />
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={NAV_LANDMARK[locale]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
          >
            <div className="px-4 pt-3">
              <div className="flex items-center justify-between px-4 py-2">
                <a
                  href={homeHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 transition hover:opacity-80"
                  aria-label={WORDMARK}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent"
                  >
                    <span className="font-display font-bold leading-none tracking-[-0.07em] text-paper/50 text-[1.1rem] tabular-nums">
                      <motion.span>{rounded}</motion.span>x
                    </span>
                  </span>
                  <span className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink text-lg">
                    Studio
                  </span>
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label={MENU_LABEL.close[locale]}
                  className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink transition hover:opacity-70"
                >
                  <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                </button>
              </div>
            </div>

            <motion.nav
              aria-label={NAV_LANDMARK[locale]}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: reduceMotion ? 0 : 0.05,
                delayChildren: reduceMotion ? 0 : 0.08,
              }}
              className="flex flex-1 flex-col justify-center border-t border-ink/10 px-6"
            >
              {NAV_LINKS.map((link) => {
                if (isNavGroup(link)) {
                  return (
                    <div key={link.id}>
                      <p className="pt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink/40">
                        {link.label[locale]}
                      </p>
                      {link.children.map((child) => renderOverlayLeaf(child))}
                    </div>
                  );
                }
                return renderOverlayLeaf(link);
              })}
            </motion.nav>

            <motion.div
              variants={overlayItem}
              initial="hidden"
              animate="visible"
              transition={{
                delay: reduceMotion ? 0 : 0.25,
                duration: reduceMotion ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-between gap-4 border-t border-ink/8 px-6 py-6"
            >
              <LocaleSwitcher locale={locale} />
              <Button
                href={BOOK_URL}
                {...BOOK_LINK_ATTRS}
                onClick={() => setMenuOpen(false)}
                variant="primary"
                surface="light"
                size="lg"
                className=" justify-center py-4 text-base! font-semibold"
              >
                {TALK_PILL.label[locale]}
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
