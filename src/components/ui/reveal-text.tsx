import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "h1" | "h2" | "p" | "span";

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
} as const;

// Splits text into units (words or chars) that rise out of an overflow-hidden
// mask on mount, staggered. Plain text under prefers-reduced-motion.
export function RevealText({
  text,
  as = "span",
  splitBy = "word",
  delay = 0,
  stagger = 0.07,
  duration = 0.9,
  className,
}: {
  text: string;
  as?: Tag;
  splitBy?: "word" | "char";
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const Comp = TAGS[as];

  const container: Variants = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: stagger } },
  };
  const unit: Variants = {
    hidden: { y: "115%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration, ease: REVEAL_EASE } },
  };

  const words = text.split(" ");

  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
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
