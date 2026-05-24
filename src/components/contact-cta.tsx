import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/ui/reveal-text";
import { BOOK_URL, BOOK_LINK_ATTRS } from "@/lib/book";
import { CONTACT_CTA } from "@/data/contact-cta";

export function ContactCta({ locale }: { locale: Locale }) {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="w-full text-paper"
      style={{ background: "var(--gradient-card-dark)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-28 md:flex-row md:items-end md:justify-between md:px-10 md:py-40">
        <div>
          <h2
            id="contact-cta-heading"
            className="max-w-4xl font-display text-5xl leading-none tracking-[-0.03em] text-paper md:text-8xl"
          >
            <RevealText inView variant="mask" text={CONTACT_CTA.title[locale]} />
          </h2>
          <RevealText
            as="p"
            inView
            variant="fade"
            text={CONTACT_CTA.body[locale]}
            delay={0.3}
            duration={0.6}
            className="mt-8 max-w-prose font-sans text-base leading-7 text-paper/80 md:text-lg"
          />
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button
            href={BOOK_URL}
            {...BOOK_LINK_ATTRS}
            variant="primary"
            surface="dark"
            size="lg"
            withArrow
          >
            {CONTACT_CTA.cta[locale]}
          </Button>
        </div>
      </div>
    </section>
  );
}
