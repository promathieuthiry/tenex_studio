import { useEffect, useRef, useState, type Ref } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

// Desktop-only scroll-driven portrait. Anchored top-right, grows from its
// grid-cell footprint (max-w-56, aspect 4/5) up to roughly half the section
// height — enough to dominate without hiding the "tenEX studio" wordmark.
const DESKTOP_QUERY = '(min-width: 768px)'

function PortraitFrame({
  alt,
  reduced,
  trackRef,
  scale,
}: {
  alt: string
  reduced: boolean | null
  trackRef?: Ref<HTMLDivElement>
  scale?: MotionValue<number>
}) {
  return (
    <div
      ref={trackRef}
      className="aspect-4/5 w-full max-w-56 md:col-span-4 md:col-start-9 md:justify-self-end"
    >
      <motion.div
        className="relative h-full w-full origin-top-right overflow-hidden bg-paper-deep will-change-transform"
        style={scale ? { scale } : undefined}
        initial={reduced ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={reduced ? {} : { opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
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

// Mounted only on desktop. Keeps the scroll listener + spring loop off the
// main thread on mobile, where they'd run every scroll frame for a scale that
// is always 1 and compete with the marquee for frame budget.
function PortraitScroll({ alt }: { alt: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ scrollEnd: 600, maxScale: 1 })

  useEffect(() => {
    const measure = () => {
      const node = trackRef.current
      if (!node) return
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
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollY } = useScroll()
  const smooth = useSpring(scrollY, {
    stiffness: 80,
    damping: 26,
    mass: 0.6,
    restDelta: 0.5,
  })
  const scale = useTransform(smooth, [0, bounds.scrollEnd], [1, bounds.maxScale])

  return <PortraitFrame alt={alt} reduced={false} trackRef={trackRef} scale={scale} />
}

export function HeroPortrait({ alt }: { alt: string }) {
  const reduced = useReducedMotion()
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY)
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (desktop && !reduced) return <PortraitScroll alt={alt} />
  return <PortraitFrame alt={alt} reduced={reduced} />
}
