import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'

import type { Locale } from '@/lib/i18n'
import { HERO } from '@/data/hero'
import { VALUE_WORDS } from '@/data/value-words'

const WORD_INTERVAL_MS = 2200

// Radius the traveling glow dot rides at, in vmin from the orbit center; sits
// on the ring border at scale=1 and rides outward as `ringScale` carries it
// past the wordmark.
const ORBIT_RADIUS_VMIN = 35
// Seconds for one full revolution of the orbit. Linear, calm pace —
// readable, not dizzying.
const ORBIT_REV_SECONDS = 38

export function MonogramReveal({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.6,
  })

  const counter = useTransform(smooth, [0.18, 0.55], [0, 10])
  const display = useTransform(counter, (v) =>
    Math.max(0, Math.min(10, Math.round(v)))
      .toString()
      .padStart(2, '0'),
  )
  const xOpacity = useTransform(smooth, [0.5, 0.6], [0, 1])
  const xScale = useTransform(smooth, [0.5, 0.62], [0.6, 1])

  const blockOpacity = useTransform(smooth, [0, 0.18, 0.85, 1], [0, 1, 1, 0.2])
  const blockScale = useTransform(smooth, [0.05, 0.55, 0.95], [0.78, 1, 0.96])

  const ringScale = useTransform(smooth, [0.45, 0.78], [0.55, 1.6])
  const ringOpacity = useTransform(smooth, [0.4, 0.55, 0.8], [0, 0.45, 0])

  // Orbit container rides the ring border at the same scale, so chips track
  // the perimeter as it expands. Per-chip counter-scale below cancels the
  // orbit's scale on the chip's visual content (not on its position), keeping
  // each chip a constant visual size while it travels outward. Counter-rotate
  // is animation-driven (matches the orbit's continuous spin).
  const orbitOpacity = useTransform(
    smooth,
    [0.55, 0.6, 0.7, 0.78],
    [0, 1, 1, 0],
  )
  const chipCounterScale = useTransform(ringScale, (s) => 1 / s)

  const capOpacity = useTransform(smooth, [0.5, 0.6, 0.85, 0.95], [0, 1, 1, 0])

  const taglineOpacity = useTransform(smooth, [0.58, 0.72], [0, 1])
  const taglineY = useTransform(smooth, [0.58, 0.72], [12, 0])

  // Cycling value-word "10x ___" — fades in once the wordmark's `x` lands
  // (scroll ~0.6) and stays through most of the section so a slow reader
  // catches several words from the loop.
  const valueOpacity = useTransform(
    smooth,
    [0.58, 0.66, 0.92, 0.98],
    [0, 1, 1, 0],
  )
  const words = VALUE_WORDS[locale]
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(
      () => setWordIdx((i) => (i + 1) % words.length),
      WORD_INTERVAL_MS,
    )
    return () => window.clearInterval(id)
  }, [reduced, words.length])

  const orbitSpin = reduced
    ? undefined
    : {
        animate: { rotate: 360 },
        transition: {
          duration: ORBIT_REV_SECONDS,
          repeat: Infinity,
          ease: 'linear' as const,
        },
      }
  const chipUnspin = reduced
    ? undefined
    : {
        duration: ORBIT_REV_SECONDS,
        repeat: Infinity,
        ease: 'linear' as const,
      }

  return (
    <section
      ref={ref}
      aria-label={HERO.monogramAriaLabel[locale]}
      className="relative h-[200vh] bg-ink"
    >
      <div className="sticky top-0 flex h-dvh items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute aspect-square w-[70vmin] rounded-full border border-paper/15"
          style={
            reduced
              ? { opacity: 0 }
              : { scale: ringScale, opacity: ringOpacity }
          }
        />

        {/* Tool constellation riding the ring border, spinning continuously */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute aspect-square w-[70vmin]"
          style={
            reduced
              ? { opacity: 1 }
              : { opacity: orbitOpacity, scale: ringScale }
          }
          animate={orbitSpin?.animate}
          transition={orbitSpin?.transition}
        >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, calc(-50% + ${-ORBIT_RADIUS_VMIN}vmin))`,
            }}
          >
            <motion.div
              className="relative h-3 w-3 rounded-full bg-paper"
              style={{
                opacity: reduced ? 1 : capOpacity,
                scale: reduced ? 1 : chipCounterScale,
              }}
              animate={reduced ? undefined : { rotate: -360 }}
              transition={chipUnspin}
            >
              <span
                aria-hidden
                className="absolute inset-0 -m-2 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.55) 0%, color-mix(in srgb, var(--color-accent) 25%, transparent) 50%, transparent 75%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          aria-hidden
          className="font-display font-bold leading-[0.82] tracking-tighter text-paper text-[26vw] md:text-[22vw] lg:text-[20vw]"
          style={
            reduced ? undefined : { scale: blockScale, opacity: blockOpacity }
          }
        >
          <motion.span className="inline-block tabular-nums">
            {display}
          </motion.span>
          <motion.span
            className="inline-block origin-left"
            style={
              reduced ? { opacity: 1 } : { opacity: xOpacity, scale: xScale }
            }
          >
            x
          </motion.span>
        </motion.h2>

        {/* Cycling value-word — completes the "10x ___" headline */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 text-center font-display font-bold leading-none text-paper text-[10vw] top-[calc(50%+13vw)] md:text-[6vw] md:top-[calc(50%+10vw)] lg:text-[5vw] lg:top-[calc(50%+9vw)]"
          style={{
            letterSpacing: '-0.045em',
            opacity: reduced ? 1 : valueOpacity,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={words[wordIdx]}
              initial={
                reduced ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={
                reduced
                  ? undefined
                  : { opacity: 0, y: -14, filter: 'blur(6px)' }
              }
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {words[wordIdx]}.
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="absolute inset-x-0 bottom-[14%] mx-auto max-w-md text-center font-mono text-[11px] uppercase tracking-[0.4em] text-paper/70 md:text-xs"
          style={reduced ? undefined : { opacity: taglineOpacity, y: taglineY }}
        >
          {HERO.withTenexStudio[locale]}
        </motion.p>
      </div>
    </section>
  )
}
