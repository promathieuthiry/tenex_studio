import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export type RevealVariant = "mask" | "fade";

type Tag = "h1" | "h2" | "p" | "span";

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
} as const;

// Per-unit enter animations. Add a key here to expose a new reveal style.
const UNIT_VARIANTS: Record<RevealVariant, (duration: number) => Variants> = {
  mask: (duration) => ({
    hidden: { y: "115%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration, ease: REVEAL_EASE } },
  }),
  fade: (duration) => ({
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration, ease: REVEAL_EASE } },
  }),
};

// Splits text into units (words or chars) that animate in, staggered.
// Plain text under prefers-reduced-motion.
export function RevealText({
  text,
  as = "span",
  variant = "mask",
  splitBy = "word",
  delay = 0,
  stagger = 0.07,
  duration = 0.9,
  className,
  inView = false,
  viewportAmount = 0.5,
}: {
  text: string;
  as?: Tag;
  variant?: RevealVariant;
  splitBy?: "word" | "char";
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
  inView?: boolean;
  viewportAmount?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(!inView);

  // whileInView + `once` only fires on *enter*. When this island hydrates late
  // (client:visible) the heading may already be in or past the viewport, so the
  // enter event never comes and it stays stuck hidden. Reveal it on mount if
  // it's already visible; otherwise observe for the normal scroll-in.
  useEffect(() => {
    if (reduced || !inView || shown) return;
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: viewportAmount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, inView, shown, viewportAmount]);

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const Comp = TAGS[as];

  const container: Variants = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: stagger } },
  };
  const unit = UNIT_VARIANTS[variant](duration);

  const words = text.split(" ");

  return (
    <Comp
      ref={(node) => {
        ref.current = node;
      }}
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
    >
      {words.map((word, wi) => (
        <Fragment key={`${word}-${wi}`}>
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden align-top"
          >
            {splitBy === "char" ? (
              [...word].map((char, ci) => (
                <motion.span
                  key={`${char}-${ci}`}
                  variants={unit}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))
            ) : (
              <motion.span variants={unit} className="inline-block">
                {word}
              </motion.span>
            )}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Comp>
  );
}
