import { motion, useReducedMotion } from "motion/react";

import type { Locale } from "@/lib/i18n";
import { RevealText } from "@/components/ui/reveal-text";
import { FOOTER } from "@/data/footer";
import { NAV_LINKS } from "@/data/nav";

const LINK = "transition-opacity duration-200 ease-out hover:opacity-60";
const HEADING = "font-mono text-xs uppercase tracking-[0.12em] text-paper/40";

export function Footer({ locale }: { locale: Locale }) {
  const homeHref = locale === "fr" ? "/" : "/en";
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full text-paper"
      style={{ background: "var(--gradient-card-dark)" }}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 flex flex-col gap-6 md:col-span-1">
            <a
              href={homeHref}
              aria-label="Tenex Studio"
              className={`inline-flex shrink-0 self-start ${LINK}`}
            >
              <img
                src="/brand/tenex-mark-inverse.svg"
                alt="Tenex Studio"
                className="h-7 w-auto md:h-8"
              />
            </a>
            <div className="flex flex-col gap-3">
              <RevealText
                as="p"
                inView
                variant="mask"
                text={FOOTER.tagline[locale]}
                delay={0.1}
                duration={0.7}
                className="font-display max-w-md text-xl leading-[1.15] tracking-[-0.02em] text-paper md:text-2xl"
              />
              <RevealText
                as="p"
                inView
                variant="fade"
                text={FOOTER.closingTagline[locale]}
                delay={0.3}
                duration={0.6}
                className={HEADING}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className={HEADING}>{FOOTER.addressHeading[locale]}</p>
            <address className="font-sans text-sm not-italic leading-6 text-paper/70">
              {FOOTER.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <nav
            aria-label={FOOTER.navHeading[locale]}
            className="flex flex-col gap-3"
          >
            <p className={HEADING}>{FOOTER.navHeading[locale]}</p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href?.[locale] ?? homeHref}
                className={`font-sans text-sm text-paper/80 ${LINK}`}
              >
                {link.label[locale]}
              </a>
            ))}
            {FOOTER.legalLinks.map((link) => (
              <a
                key={link.href[locale]}
                href={link.href[locale]}
                className={`font-sans text-sm text-paper/80 ${LINK}`}
              >
                {link.label[locale]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className={HEADING}>{FOOTER.contactHeading[locale]}</p>
            <a
              href={`mailto:${FOOTER.email}`}
              className={`font-sans text-sm text-paper ${LINK}`}
            >
              {FOOTER.email}
            </a>
            <a
              href={FOOTER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 font-sans text-sm text-paper ${LINK}`}
            >
              LinkedIn
              <span aria-hidden="true" className="text-paper/50">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/10 pt-8 md:flex-row md:items-center md:justify-between">
          <img
            src="/brand/logo-footer-lacantine.svg"
            alt="La Cantine x La French Tech Nantes"
            className="h-20 w-auto opacity-60 transition-opacity duration-200 ease-out hover:opacity-100 md:h-26"
          />
          <p className="font-sans text-xs text-paper/50">
            © {year} Tenex Studio. {FOOTER.rights[locale]}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
