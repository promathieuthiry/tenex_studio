import type { Locale } from "@/lib/i18n";
import { META, TITLE_SM } from "@/lib/type";

type BlogCardProps = {
  href: string;
  title: string;
  category: string[];
  cover: string;
  date: string;
  locale: Locale;
  priority?: boolean;
};

function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

export function BlogCard({
  href,
  title,
  category,
  cover,
  date,
  locale,
  priority = false,
}: BlogCardProps) {
  return (
    <a
      href={href}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <article className="flex h-full flex-col gap-5">
        <figure className="relative aspect-5/4 overflow-hidden bg-paper-deep">
          <img
            src={cover}
            alt=""
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </figure>

        <h3
          className={`${TITLE_SM} text-ink transition-opacity duration-300 group-hover:opacity-70`}
        >
          {title}
        </h3>

        <div className={`flex items-center gap-3 ${META} text-ink/60`}>
          <time dateTime={date}>{formatDate(date, locale)}</time>
          <span className="text-ink/25" aria-hidden>
            /
          </span>
          <span>{category.join(" · ")}</span>
        </div>
      </article>
    </a>
  );
}
