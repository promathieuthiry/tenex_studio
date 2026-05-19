import { useEffect, useRef } from 'react'

const WORD = 'tenEX studio'

export function NameMark() {
  const sectionRef = useRef<HTMLElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const fill = fillRef.current
    if (!section || !fill) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const height = rect.height || 1
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / height))
      fill.style.setProperty('--fill', progress.toFixed(4))
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-hidden
      className="mt-16 overflow-hidden text-center md:mt-24"
    >
      <h2
        aria-label="tenEX studio"
        className="relative font-display font-bold leading-[0.85] tracking-[-0.04em]"
        style={{ fontSize: 'clamp(3rem, 14.5vw, 17rem)' }}
      >
        <span
          aria-hidden
          className="block"
          style={{
            color: 'color-mix(in srgb, var(--color-ink) 22%, transparent)',
          }}
        >
          {WORD}
        </span>
        <span
          ref={fillRef}
          aria-hidden
          className="absolute inset-0 block text-ink"
          style={{
            clipPath: 'inset(0 calc((1 - var(--fill, 0)) * 100%) 0 0)',
          }}
        >
          {WORD}
        </span>
      </h2>
    </section>
  )
}
