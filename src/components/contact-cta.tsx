import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
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
            {CONTACT_CTA.title[locale]}
          </h2>
          <p className="mt-8 max-w-prose font-sans text-base leading-7 text-paper/80 md:text-lg">
            {CONTACT_CTA.body[locale]}
          </p>
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
