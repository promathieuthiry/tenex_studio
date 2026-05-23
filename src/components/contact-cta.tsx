import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { BOOK_URL, BOOK_LINK_ATTRS } from "@/lib/book";
import { CONTACT_CTA } from "@/data/contact-cta";

export function ContactCta({ locale }: { locale: Locale }) {
  return (
    <section className="px-6  md:px-10 " aria-labelledby="contact-cta-heading">
      <div
        className="mx-auto flex max-w-screen-xl flex-col gap-10 rounded-card-lg px-6 py-20 text-paper md:flex-row md:items-end md:justify-between md:p-24"
        style={{ background: "var(--gradient-card-dark)" }}
      >
        <div>
          <h2
            id="contact-cta-heading"
            className="mt-6 max-w-3xl font-display text-5xl leading-[1] tracking-[-0.03em] text-paper md:text-8xl"
          >
            {CONTACT_CTA.title[locale]}
          </h2>
          <p className="mt-6 max-w-prose font-sans text-base leading-7 text-paper/80 md:text-lg">
            {CONTACT_CTA.body[locale]}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={BOOK_URL}
            {...BOOK_LINK_ATTRS}
            variant="primary"
            surface="dark"
            size="md"
          >
            {CONTACT_CTA.cta[locale]}
          </Button>
        </div>
      </div>
    </section>
  );
}
