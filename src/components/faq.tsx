import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import { FAQ, FAQ_HEADER, type FAQItem, type FAQLink } from "@/data/faq";
import { SectionHeader } from "@/components/section-header";
import { BOOK_URL } from "@/lib/book";

function resolveLink(link: FAQLink) {
  if (link.kind === "email") {
    return { href: `mailto:${link.label.en}`, external: false };
  }
  return { href: BOOK_URL, external: true };
}

function FaqRow({
  item,
  index,
  locale,
  isOpen,
  onToggle,
  reduced,
}: {
  item: FAQItem;
  index: number;
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
  reduced: boolean;
}) {
  const panelId = `faq-panel-${item.number}`;
  const buttonId = `faq-button-${item.number}`;

  return (
    <motion.li
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={isOpen ? "bg-paper" : undefined}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-baseline gap-6 px-4 py-6 text-left transition-colors hover:bg-paper/60 md:px-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
            ({item.number})
          </span>
          <span className="flex-1 font-display text-xl tracking-[-0.015em] text-ink md:text-2xl">
            {item.question[locale]}
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: reduced ? 0 : 0.2, ease: "easeOut" }}
            className="font-mono text-xs uppercase tracking-[0.12em] text-ink/40"
          >
            +
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={reduced ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: reduced ? 0 : 0.32, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: reduced ? 0 : 0.22, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 pr-4 md:pl-20 md:pr-6">
              <p className="max-w-prose font-sans text-base leading-7 text-ink/80">
                {item.answer[locale]}
              </p>
              {item.links && item.links.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {item.links.map((link) => {
                    const { href, external } = resolveLink(link);
                    return (
                      <a
                        key={link.kind}
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
                      >
                        {link.label[locale]}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.li>
  );
}

export function Faq({ locale }: { locale: Locale }) {
  const reduced = useReducedMotion() ?? false;
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set());

  const toggle = (number: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(number) ? next.delete(number) : next.add(number);
      return next;
    });

  return (
    <section
      id="faq"
      className="border-t border-ink/10 bg-paper-warm px-6 py-24 md:px-10 md:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={FAQ_HEADER.eyebrow[locale]}
          title={FAQ_HEADER.title[locale]}
          headingId="faq-heading"
        />

        <ul className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item, index) => (
            <FaqRow
              key={item.number}
              item={item}
              index={index}
              locale={locale}
              isOpen={open.has(item.number)}
              onToggle={() => toggle(item.number)}
              reduced={reduced}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
