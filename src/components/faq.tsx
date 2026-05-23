import type { Locale } from "@/lib/i18n";
import { FAQ, FAQ_HEADER, type FAQLink } from "@/data/faq";
import { SectionHeader } from "@/components/section-header";
import { BOOK_URL } from "@/lib/book";

function resolveLink(link: FAQLink) {
  if (link.kind === "email") {
    return { href: `mailto:${link.label.en}`, external: false };
  }
  return { href: BOOK_URL, external: true };
}

export function Faq({ locale }: { locale: Locale }) {
  return (
    <section
      id="faq"
      className="border-t border-ink/10 bg-paper-warm px-6 py-24 md:px-10 md:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow={FAQ_HEADER.eyebrow[locale]}
          title={FAQ_HEADER.title[locale]}
          headingId="faq-heading"
        />

        <ul className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <li key={item.number}>
              <details className="group transition-colors open:bg-paper">
                <summary className="flex cursor-pointer list-none items-baseline gap-6 px-4 py-6 transition-colors hover:bg-paper/60 md:px-6">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
                    ({item.number})
                  </span>
                  <span className="flex-1 font-display text-xl tracking-[-0.015em] text-ink md:text-2xl">
                    {item.question[locale]}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-xs uppercase tracking-[0.12em] text-ink/40 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
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
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
