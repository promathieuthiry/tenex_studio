import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { Locale } from "@/lib/i18n";
import { SERVICES, type Service } from "@/data/services";
import { SectionHeader } from "@/components/section-header";
import { SECTION, CONTAINER, HEADER_GAP } from "@/lib/layout";
import { BODY, META, TITLE_MD } from "@/lib/type";

const COPY = {
  fr: {
    titleStart: "Services",
    titleEnd: "",
  },
  en: {
    titleStart: "Services",
    titleEnd: "",
  },
} as const satisfies Record<Locale, { titleStart: string; titleEnd: string }>;

const STICKY_TOP_PX = 96;
const SCALE_FLOOR = 0.92;

function StackedCard({
  service,
  index,
  total,
  locale,
  reduced,
  stackProgress,
}: {
  service: Service;
  index: number;
  total: number;
  locale: Locale;
  reduced: boolean;
  stackProgress: MotionValue<number>;
}) {
  const isLast = index === total - 1;
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(
    stackProgress,
    [start, end],
    [1, isLast || reduced ? 1 : SCALE_FLOOR],
  );

  const imageOnLeft = index % 2 === 1;

  return (
    <motion.article
      style={{
        scale: reduced ? 1 : scale,
        top: `${STICKY_TOP_PX}px`,
        transformOrigin: "center top",
      }}
      className="sticky overflow-hidden rounded-card-lg border border-paper/10 bg-[#141417] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
    >
      <div
        className={`grid min-h-112 md:min-h-116 ${
          imageOnLeft
            ? "md:grid-cols-[0.8fr_1.2fr] md:[&>*:first-child]:order-2"
            : "md:grid-cols-[1.2fr_0.8fr]"
        }`}
      >
        <div className="flex flex-col p-7 md:p-10 lg:p-12">
          <h3 className={`${TITLE_MD} text-paper lg:text-5xl font-bold`}>
            {service.name[locale]}
          </h3>

          <span aria-hidden className="mt-6 block h-px w-full bg-paper/10" />

          <p className={`mt-6 max-w-md ${BODY} text-paper/60`}>
            {service.description[locale]}
          </p>

          <ul className="mt-auto flex flex-wrap gap-2 pt-8">
            {service.pills[locale].map((pill) => (
              <li
                key={pill}
                className={`rounded-full border border-paper/12 bg-paper/5 px-3 py-1.5 ${META} text-paper/70`}
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative flex aspect-5/4 items-center justify-center overflow-hidden bg-[#141417] md:aspect-auto md:h-full ${
            imageOnLeft
              ? "md:border-r md:border-paper/10"
              : "md:border-l md:border-paper/10"
          }`}
        >
          {reduced ? (
            <img
              src={service.video.poster}
              alt={service.video.alt[locale]}
              loading="lazy"
              decoding="async"
              className="relative z-10 h-full w-full object-cover"
            />
          ) : (
            <video
              src={service.video.src}
              poster={service.video.poster}
              role="img"
              aria-label={service.video.alt[locale]}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="relative z-10 h-full w-full object-cover"
            />
          )}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 z-20 hidden w-24 md:block ${
              imageOnLeft
                ? "right-0 bg-linear-to-r from-transparent to-[#141417]/20"
                : "left-0 bg-linear-to-l from-transparent to-[#141417]/20"
            }`}
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Services({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const reduced = useReducedMotion() ?? false;
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`relative bg-ink ${SECTION}`}
    >
      <div className={`relative ${CONTAINER}`}>
        <SectionHeader
          title={copy.titleStart}
          titleTail={copy.titleEnd}
          headingId="services-heading"
          tone="dark"
        />

        <div
          ref={stackRef}
          className={`${HEADER_GAP} flex flex-col gap-[12vh] md:gap-[18vh]`}
        >
          {SERVICES.map((service, i) => (
            <StackedCard
              key={service.number}
              service={service}
              index={i}
              total={SERVICES.length}
              locale={locale}
              reduced={reduced}
              stackProgress={scrollYProgress}
            />
          ))}

          {/* Flex items stick within the container's content box, so the last
              card only rests at the sticky offset if real space follows it. */}
          <div aria-hidden className="h-[12vh] shrink-0 md:h-[24vh]" />
        </div>
      </div>
    </section>
  );
}
