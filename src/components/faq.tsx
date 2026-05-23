import type { Locale } from "@/lib/i18n";
import { FAQ } from "@/data/faq";
import { SectionHeader } from "@/components/section-header";

const COPY = {
  fr: {
    eyebrow: "Questions",
    title: "Ce qu’on demande souvent.",
  },
  en: {
    eyebrow: "Questions",
    title: "What people often ask.",
  },
} as const satisfies Record<Locale, { eyebrow: string; title: string }>;

export function Faq({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  return (
    <section
      id="faq"
      className="border-t border-ink/10 bg-paper-warm px-6 py-24 md:px-10 md:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          headingId="faq-heading"
        />

        <ul className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <li key={item.number}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-baseline gap-6 py-6 transition hover:opacity-80">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
                    ({item.number})
                  </span>
                  <span className="flex-1 font-display text-xl tracking-[-0.015em] text-ink md:text-2xl">
                    {item.question[locale]}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-xs uppercase tracking-[0.12em] text-ink/40 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-8 pl-12 pr-12 md:pl-20">
                  <p className="max-w-prose font-sans text-base leading-7 text-ink/80">
                    {item.answer[locale]}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
