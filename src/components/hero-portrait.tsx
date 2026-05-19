import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'

// Desktop-only scroll-driven portrait. Anchored top-right, grows from its
// grid-cell footprint (max-w-56, aspect 4/5) up to roughly half the section
// height — enough to dominate without hiding the "tenEX studio" wordmark.
const DESKTOP_QUERY = '(min-width: 768px)'

export function HeroPortrait({ alt }: { alt: string }) {
  const reduced = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ scrollEnd: 600, maxScale: 1 })

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY)

    const measure = () => {
      const node = trackRef.current
      if (!node) return
      if (!desktop.matches) {
        setBounds((b) => ({ ...b, maxScale: 1 }))
        return
      }
      const section = node.closest('section')
      const sectionHeight = section?.clientHeight ?? window.innerHeight
      const baseHeight = node.offsetHeight
      // Half the section height is the target end-state — leaves the wordmark
      // beneath visible.
      const maxScale =
        baseHeight > 0 ? Math.max(1, (sectionHeight * 0.5) / baseHeight) : 1.5
      setBounds({
        scrollEnd: Math.max(240, window.innerHeight * 0.9),
        maxScale,
      })
    }

    measure()
    window.addEventListener('resize', measure, { passive: true })
    desktop.addEventListener('change', measure)
    return () => {
      window.removeEventListener('resize', measure)
      desktop.removeEventListener('change', measure)
    }
  }, [])

  const { scrollY } = useScroll()
  const smooth = useSpring(scrollY, {
    stiffness: 80,
    damping: 26,
    mass: 0.6,
    restDelta: 0.5,
  })
  const scale = useTransform(
    smooth,
    [0, bounds.scrollEnd],
    [1, bounds.maxScale],
  )

  return (
    <div
      ref={trackRef}
      className="aspect-4/5 w-full max-w-56 md:col-span-4 md:col-start-9 md:justify-self-end"
    >
      <motion.div
        className="relative h-full w-full origin-top-right overflow-hidden bg-paper-deep will-change-transform"
        style={reduced ? undefined : { scale }}
      >
        <img
          src="/portrait/mathieu_thiry_founder_tenex_studio.webp"
          alt={alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>
    </div>
  )
}
