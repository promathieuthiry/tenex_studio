import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

export type GlossaryFilterTerm = {
  slug: string;
  term: string;
  short: string;
  category: string;
  letter: string;
  href: string;
};

export type GlossaryFilterCategory = {
  id: string;
  label: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LABELS: Readonly<
  Record<
    Locale,
    {
      search: string;
      letterAria: string;
      categoryAria: string;
      empty: string;
      count: (n: number) => string;
    }
  >
> = {
  fr: {
    search: "Rechercher un terme",
    letterAria: "Filtrer par lettre",
    categoryAria: "Filtrer par catégorie",
    empty: "Aucun terme ne correspond.",
    count: (n) => `${n} terme${n > 1 ? "s" : ""} affiché${n > 1 ? "s" : ""}`,
  },
  en: {
    search: "Search a term",
    letterAria: "Filter by letter",
    categoryAria: "Filter by category",
    empty: "No term matches.",
    count: (n) => `${n} term${n > 1 ? "s" : ""} shown`,
  },
};

const fold = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function GlossaryFilter({
  locale,
  terms,
  categories,
}: {
  locale: Locale;
  terms: ReadonlyArray<GlossaryFilterTerm>;
  categories: ReadonlyArray<GlossaryFilterCategory>;
}) {
  const labels = LABELS[locale];
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "",
  );
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const searching = query.trim().length > 0;

  const categoryLabel = useMemo(
    () => new Map(categories.map((c) => [c.id, c.label])),
    [categories],
  );

  const present = useMemo(
    () =>
      new Set(
        terms.filter((t) => t.category === activeCategory).map((t) => t.letter),
      ),
    [terms, activeCategory],
  );

  const results = useMemo(() => {
    if (searching) {
      const q = fold(query.trim());
      return terms.filter(
        (t) => fold(t.term).includes(q) || fold(t.short).includes(q),
      );
    }
    let list = terms.filter((t) => t.category === activeCategory);
    if (activeLetter) list = list.filter((t) => t.letter === activeLetter);
    return list;
  }, [terms, searching, query, activeCategory, activeLetter]);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    setActiveLetter(null);
    setQuery("");
  };

  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label={labels.categoryAria}
          className="flex flex-wrap gap-2"
        >
          {categories.map((category) => {
            const isActive = !searching && category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-full px-4 py-1.5 font-sans text-sm transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "border border-ink/15 text-ink/70 hover:border-ink hover:text-ink"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <label className="relative flex items-center md:w-72">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            aria-hidden="true"
            className="pointer-events-none absolute left-4 size-3.5 text-ink/40"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="m10.5 10.5 3 3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            aria-label={labels.search}
            className="w-full rounded-full border border-ink/15 bg-transparent py-2 pl-10 pr-4 font-sans text-sm text-ink transition-colors placeholder:text-ink/40 focus:border-ink focus:outline-none"
          />
        </label>
      </div>

      {!searching && (
        <div
          role="group"
          aria-label={labels.letterAria}
          className="mt-6 flex flex-wrap gap-x-1.5 gap-y-2 border-y border-ink/10 py-4"
        >
          {ALPHABET.map((letter) => {
            const enabled = present.has(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                type="button"
                disabled={!enabled}
                onClick={() => setActiveLetter(isActive ? null : letter)}
                aria-pressed={isActive}
                className={`min-w-8 rounded-full px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                  isActive
                    ? "cursor-pointer bg-ink text-paper"
                    : enabled
                      ? "cursor-pointer text-ink/60 hover:text-ink"
                      : "cursor-not-allowed text-ink/20"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}

      <p className="sr-only" role="status" aria-live="polite">
        {labels.count(results.length)}
      </p>

      {results.length > 0 ? (
        <ul className="mt-8 overflow-hidden rounded-card border border-ink/10 divide-y divide-ink/10">
          {results.map((item) => (
            <li key={item.slug}>
              <a
                href={item.href}
                className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-paper-warm md:px-7"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sans text-base font-medium text-ink transition-colors group-hover:text-accent">
                      {item.term}
                    </span>
                    <span className="inline-flex rounded-full border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50">
                      {categoryLabel.get(item.category)}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-2xl font-sans text-sm leading-6 text-ink/55">
                    {item.short}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-lg text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:text-ink"
                >
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 font-sans text-base text-ink/55">{labels.empty}</p>
      )}
    </div>
  );
}
