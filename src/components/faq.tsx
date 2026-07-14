import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import { FAQ, FAQ_HEADER, type FAQItem, type FAQLink } from "@/data/faq";
import type { Bilingual } from "@/data/_types";
import { SectionHeader } from "@/components/section-header";
import { SECTION, CONTAINER, HEADER_GAP } from "@/lib/layout";
import { BODY, META, TITLE_SM } from "@/lib/type";
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
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
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
          <span className={`flex-1 ${TITLE_SM} text-ink`}>
            {item.question[locale]}
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: reduced ? 0 : 0.2, ease: "easeOut" }}
            className="font-mono text-lg text-ink/40"
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
            initial={
              reduced
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }
            }
            transition={{
              height: { duration: reduced ? 0 : 0.32, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: reduced ? 0 : 0.22, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 md:px-6">
              <p className={`max-w-prose ${BODY} text-ink/70`}>
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
                        className={`${META} border-b border-ink/30 pb-0.5 text-ink transition-colors hover:border-accent hover:text-accent`}
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

export function Faq({
  locale,
  items = FAQ,
  header = FAQ_HEADER,
}: {
  locale: Locale;
  items?: ReadonlyArray<FAQItem>;
  header?: Readonly<{ title: Bilingual }>;
}) {
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
      className={`border-t border-ink/10 bg-paper-warm ${SECTION}`}
      aria-labelledby="faq-heading"
    >
      <div className={CONTAINER}>
        <SectionHeader
          title={header.title[locale]}
          headingId="faq-heading"
        />

        <ul
          className={`${HEADER_GAP} divide-y divide-ink/10 border-y border-ink/10`}
        >
          {items.map((item, index) => (
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
