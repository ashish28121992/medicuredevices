import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SelfRetainingRetractorModal from '../components/SelfRetainingRetractorModal'
import {
  selfRetainingRetractorSlides,
  type SelfRetainingRetractorSlide,
} from '../data/selfRetainingRetractorSlides'

const brands = [
  {
    name: 'Kardiowell',
    tone: 'brand' as const,
    logo: '/brands/kardiowell.jpg',
    tagline: 'Surgical & Disposable Medical Devices',
  },
  {
    name: 'Nareshsons',
    tone: 'blue' as const,
    logo: '/brands/nareshans.jpg',
    tagline: 'Neuro Surgical Headframes\nSelf Retaining Retractor System',
  },
  {
    name: 'SurgmedZ',
    tone: 'slate' as const,
    logo: '/brands/surgmedz.png',
    tagline: 'SS-TI, Surgical instruments',
  },
  {
    name: 'Equipments',
    tone: 'brand' as const,
    logo: '/brands/equipments.png',
    tagline: 'Premium medical devices & solutions.',
  },
]

const kardiowellSegments = [
  'Cardial Surgery',
  'Cardial Anaesthesia',
  'Respiratory',
  'Pediatric intensive care',
]

const nareshansSegments = [
  'Neuro Surgical Headframes',
  'Self Retaining Retractor System',
]

// Cardial Surgery images — jitni pics add karni ho utni yahan path daalo (4 per row layout)
const cardialSurgeryImages = [
  '/kardiowell/cardial-surgery-1.jpg',
  '/kardiowell/cardial-surgery-2.avif',
]

const neuroSurgicalHeadframesImages = [
  '/nareshsons/neuro-surgical-headframes-1.webp',
  '/nareshsons/neuro-surgical-headframes-2.png',
  '/nareshsons/neuro-surgical-headframes-3.avif',
]

function KardiowellWordmark() {
  // "Kard" + i-with-heart-dot + "owell". Use dotless ı (U+0131) as stem, heart on top = clean "i"
  const before = 'Kard'
  const after = 'owell'

  return (
    <span className="inline-flex items-baseline font-extrabold tracking-tight">
      <span>{before}</span>
      <span className="relative inline-block text-inherit align-baseline" style={{ fontFamily: 'inherit' }}>
        {/* Dotless i (ı) = stem only; heart sits as dot */}
        <span className="inline-block" aria-hidden="true">ı</span>
        <span
          className="absolute left-1/2 -translate-x-1/2 text-red-500 dark:text-red-400 pointer-events-none"
          style={{ top: '-0.35em', lineHeight: 1 }}
          aria-hidden="true"
        >
          <svg className="h-[0.6em] w-[0.6em]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7-4.35-9.33-8.28C.48 9.32 2.18 6.5 5.2 6.5c1.74 0 3.18.93 3.98 2.04.8-1.11 2.24-2.04 3.98-2.04 3.02 0 4.72 2.82 2.53 6.22C19 16.65 12 21 12 21z" />
          </svg>
        </span>
      </span>
      <span>{after}</span>
    </span>
  )
}

export default function Products() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [activeSegment, setActiveSegment] = useState<string | null>(null)
  const [retractorModalSlide, setRetractorModalSlide] = useState<SelfRetainingRetractorSlide | null>(null)
  const detailPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeBrand !== 'Kardiowell' && activeBrand !== 'Nareshsons') return
    const id = window.setTimeout(() => {
      detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => window.clearTimeout(id)
  }, [activeBrand])

  useEffect(() => {
    if (activeSegment !== 'Self Retaining Retractor System') setRetractorModalSlide(null)
  }, [activeSegment])

  useEffect(() => {
    if (activeBrand !== 'Nareshsons') setRetractorModalSlide(null)
  }, [activeBrand])

  const showBrandDetail =
    activeBrand === 'Kardiowell' || activeBrand === 'Nareshsons'

  return (
    <div className="overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Products
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Our product family (work in progress).
            </p>
          </div>

          {/* Mobile: segments panel shows above the cards (order). Desktop: grid first, panel below. */}
          <div className="mt-10 flex w-full flex-col gap-6 lg:gap-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="order-2 grid w-full gap-4 sm:gap-6 sm:grid-cols-2 lg:order-1 lg:grid-cols-4"
          >
            {brands.map((b) => {
              const largeReadableLogo = b.name === 'Kardiowell' || b.name === 'Nareshsons'
              return (
              <motion.div
                key={b.name}
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  setActiveBrand((prev) => (prev === b.name ? null : b.name))
                  setActiveSegment(null)
                }}
                className={`group cursor-pointer rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 p-6 sm:p-7 shadow-sm dark:shadow-none hover:border-brand-500/50 dark:hover:border-brand-500/40 transition-colors ${
                  activeBrand === b.name ? 'ring-2 ring-brand-500/60' : ''
                }`}
              >
                <div
                  className={`inline-flex w-full items-center justify-start overflow-visible ${
                    largeReadableLogo
                      ? 'min-h-[8.5rem] h-36 sm:h-44 md:h-48'
                      : 'h-24'
                  }`}
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className={`h-full w-auto object-contain origin-left ${
                      largeReadableLogo
                        ? 'max-w-[min(100%,26rem)] scale-110 sm:scale-[1.12]'
                        : 'max-w-none scale-125'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {b.name === 'Kardiowell' ? <KardiowellWordmark /> : b.name}
                </div>

                <div className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                  {b.name === 'SurgmedZ' ? (
                    <p className="text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-brand-600 dark:text-brand-400">SS-TI</span>
                      <span className="text-slate-400 dark:text-slate-500">, </span>
                      <span className="text-slate-700 dark:text-slate-300">Surgical instruments</span>
                    </p>
                  ) : (
                    <span className="text-slate-600 dark:text-slate-400">{b.tagline}</span>
                  )}
                </div>

                <div className="mt-6 h-px bg-slate-200 dark:bg-slate-700/50" />
                <div className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                  {activeBrand === b.name ? 'Hide segments' : 'View segments'}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            )})}
          </motion.div>

          {showBrandDetail && (
            <div
              ref={detailPanelRef}
              className="order-1 w-full scroll-mt-24 sm:scroll-mt-28 lg:order-2"
              role="region"
              aria-live="polite"
              aria-label="Product segments for selected brand"
            >
          {activeBrand === 'Kardiowell' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 shadow-lg ring-1 ring-slate-200/70 dark:border-slate-600/45 dark:from-slate-900/95 dark:to-slate-900/60 dark:ring-slate-700/50 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                    Kardiowell – Clinical Focus Areas
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Choose a specialty to explore detailed offerings (coming soon).
                  </p>
                </div>
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }}
                className="mt-5 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {kardiowellSegments.map((seg) => (
                  <motion.button
                    key={seg}
                    type="button"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.97 },
                      show: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSegment(seg)}
                    className={`rounded-xl border text-left text-sm font-medium px-4 py-3 flex items-center justify-between gap-2 ${
                      activeSegment === seg
                        ? 'border-brand-500 bg-brand-50 text-brand-800 dark:bg-brand-500/10 dark:border-brand-400 dark:text-brand-200'
                        : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-100'
                    }`}
                  >
                    <span>{seg}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {activeSegment === seg ? 'Selected' : 'Soon'}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {activeSegment === 'Cardial Surgery' && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 dark:bg-slate-900/40 p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Cardial Surgery
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    Visuals for Kardiowell cardiology surgery segment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {cardialSurgeryImages.map((src, i) => (
                      <motion.div
                        key={src}
                        className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/60 aspect-square shadow-sm"
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={src}
                          alt={`Cardial surgery ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeBrand === 'Nareshsons' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-blue-50/40 shadow-lg ring-1 ring-slate-200/70 dark:border-slate-600/45 dark:from-slate-900/95 dark:to-slate-900/60 dark:ring-slate-700/50 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                    Nareshsons - Clinical Focus Areas
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Choose a specialty to explore detailed offerings (coming soon).
                  </p>
                </div>
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }}
                className="mt-5 grid gap-3 sm:gap-4 sm:grid-cols-2"
              >
                {nareshansSegments.map((seg) => (
                  <motion.button
                    key={seg}
                    type="button"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.97 },
                      show: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSegment(seg)}
                    className={`rounded-xl border text-left text-sm font-medium px-4 py-3 flex items-center justify-between gap-2 ${
                      activeSegment === seg
                        ? 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-500/10 dark:border-blue-400 dark:text-blue-200'
                        : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-100'
                    }`}
                  >
                    <span>{seg}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {activeSegment === seg ? 'Selected' : 'Soon'}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {activeSegment === 'Neuro Surgical Headframes' && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 dark:bg-slate-900/40 p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Neuro Surgical Headframes
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    Visuals for Nareshsons neuro surgical headframes segment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {neuroSurgicalHeadframesImages.map((src, i) => (
                      <motion.div
                        key={src}
                        className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/60 aspect-square shadow-sm"
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={src}
                          alt={`Neuro surgical headframe ${i + 1}`}
                          className={`h-full w-full object-cover ${i === 0 ? 'object-bottom scale-110' : ''}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSegment === 'Self Retaining Retractor System' && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 dark:bg-slate-900/40 p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Self Retaining Retractor System
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    Visuals for Nareshsons self retaining retractor system segment.
                  </p>
                  <p className="mb-5 text-xs text-slate-500 dark:text-slate-500">
                    Tap an image to view full details (specifications &amp; components).
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {selfRetainingRetractorSlides.map((slide, i) => (
                      <motion.button
                        key={slide.id}
                        type="button"
                        onClick={() => setRetractorModalSlide(slide)}
                        className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/60 aspect-square shadow-sm text-left ring-0 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ scale: 1.03 }}
                        aria-label={`Open details: ${slide.title}`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-2 py-2 text-center text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs">
                          View details
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
            </div>
          )}
          </div>
        </div>
      </motion.section>

      <SelfRetainingRetractorModal
        slide={retractorModalSlide}
        onClose={() => setRetractorModalSlide(null)}
      />
    </div>
  )
}
