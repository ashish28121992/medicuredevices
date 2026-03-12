import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const defaultSlides = [
  { src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80', alt: 'Healthcare at home' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: 'Health monitoring' },
  { src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80', alt: 'Quality care' },
]

type Slide = { src: string; alt?: string }

type CarouselProps = {
  slides?: Slide[]
  autoPlayInterval?: number
}

export default function Carousel({ slides = defaultSlides, autoPlayInterval = 4000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, autoPlayInterval)
    return () => clearInterval(id)
  }, [total, autoPlayInterval])

  const goTo = (index: number) => setCurrent((index + total) % total)

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-900/50 shadow-lg">
        {/* Slides */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[200px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <img
                src={slides[current].src}
                alt={slides[current].alt ?? `Slide ${current + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-md hover:bg-white dark:hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-md hover:bg-white dark:hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            >
              <motion.span
                className="block h-2 w-2 rounded-full bg-white/80 dark:bg-slate-600/80"
                animate={{
                  width: i === current ? 24 : 8,
                  opacity: i === current ? 1 : 0.6,
                }}
                transition={{ duration: 0.25 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
