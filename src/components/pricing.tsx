import type { Locale } from "@/lib/i18n";
import { PRICING } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { SECTION, CONTAINER, HEADER_GAP } from "@/lib/layout";
import { BOOK_URL, BOOK_LINK_ATTRS } from "@/lib/book";
import { BODY_SM, META, NUMBER, TITLE_SM } from "@/lib/type";

const COPY = {
  fr: {
    title: "Tarifs",
    featuresLabel: "Inclus :",
    inheritsFromBefore: "Tout inclus dans ",
    inheritsFromAfter: ", et en plus :",
    priceFromPrefix: "À partir de",
    priceFixedSuffix: "/ projet",
  },
  en: {
    title: "Pricing",
    featuresLabel: "Plan Features:",
    inheritsFromBefore: "Everything in ",
    inheritsFromAfter: ", plus:",
    priceFromPrefix: "Starting at",
    priceFixedSuffix: "/ project",
  },
} as const satisfies Record<
  Locale,
  {
    title: string;
    featuresLabel: string;
    inheritsFromBefore: string;
    inheritsFromAfter: string;
    priceFromPrefix: string;
    priceFixedSuffix: string;
  }
>;

const PLUS_ICON = (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden
    className="mt-[7px] size-3 shrink-0"
  >
    <path d="M6 2v8" />
    <path d="M2 6h8" />
  </svg>
);

export function Pricing({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className={`bg-paper ${SECTION}`}
    >
      <div className={CONTAINER}>
        <SectionHeader
          title={copy.title}
          headingId="pricing-heading"
          size="xl"
        />

        <div
          className={`${HEADER_GAP} overflow-hidden rounded-[var(--radius-card-lg)] bg-paper shadow-[0_0_0_1px_rgba(15,15,18,0.06),0_2px_6px_rgba(15,15,18,0.04),0_24px_64px_-24px_rgba(15,15,18,0.16)]`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {PRICING.map((tier, idx) => {
              const isDark = idx === 1;
              const isFixedPrice = tier.priceQualifier === "fixed";
              const previousTier = idx > 0 ? PRICING[idx - 1] : null;
              return (
                <article
                  key={tier.id}
                  className={`flex flex-col gap-8 p-10 md:p-12 ${
                    isDark ? "text-paper" : "text-ink"
                  }`}
                  style={
                    isDark
                      ? { background: "var(--gradient-card-dark)" }
                      : undefined
                  }
                >
                  <header className="flex items-baseline justify-between gap-6 md:min-h-18">
                    <h3 className={TITLE_SM}>{tier.name[locale]}</h3>
                    <span
                      className={`shrink-0 ${META} ${
                        isDark ? "text-paper/55" : "text-ink/70"
                      }`}
                    >
                      {tier.timeline[locale]}
                    </span>
                  </header>

                  <p
                    className={`max-w-md ${BODY_SM} md:min-h-38 ${
                      isDark ? "text-paper/65" : "text-ink/65"
                    }`}
                  >
                    {tier.description[locale]}
                  </p>

                  <div
                    className={
                      isDark
                        ? "h-px w-full bg-paper/12"
                        : "h-px w-full bg-ink/8"
                    }
                  />

                  <div>
                    {previousTier ? (
                      <p
                        className={`flex min-h-9 items-start ${META} ${
                          isDark ? "text-paper/45" : "text-ink/70"
                        }`}
                      >
                        ↳ {copy.inheritsFromBefore}
                        {previousTier.name[locale]}
                        {copy.inheritsFromAfter}
                      </p>
                    ) : (
                      <p
                        className={`flex min-h-9 items-start ${BODY_SM} font-medium ${
                          isDark ? "text-paper" : "text-ink"
                        }`}
                      >
                        {copy.featuresLabel}
                      </p>
                    )}
                    <ul className={`mt-5 space-y-3 ${BODY_SM}`}>
                      {tier.scope[locale].map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 ${
                            isDark ? "text-paper/80" : "text-ink/80"
                          }`}
                        >
                          <span
                            className={isDark ? "text-paper/55" : "text-ink/70"}
                          >
                            {PLUS_ICON}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <p
                      className={`${NUMBER} ${
                        isDark ? "text-paper" : "text-ink"
                      }`}
                    >
                      {!isFixedPrice && (
                        <span
                          className={`mr-2 align-middle ${BODY_SM} font-normal ${
                            isDark ? "text-paper/55" : "text-ink/70"
                          }`}
                        >
                          {copy.priceFromPrefix}
                        </span>
                      )}
                      <span className="font-normal">{tier.price[locale]}</span>
                      {isFixedPrice && (
                        <span
                          className={`ml-2 align-middle ${BODY_SM} font-normal ${
                            isDark ? "text-paper/55" : "text-ink/70"
                          }`}
                        >
                          {copy.priceFixedSuffix}
                        </span>
                      )}
                    </p>

                    <div className="mt-8">
                      <Button
                        href={BOOK_URL}
                        {...BOOK_LINK_ATTRS}
                        variant={isDark ? "primary" : "secondary"}
                        surface={isDark ? "dark" : "light"}
                        size="md"
                        withArrow
                      >
                        {tier.ctaLabel[locale]}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
