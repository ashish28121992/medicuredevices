import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import type { SelfRetainingRetractorSlide } from '../data/selfRetainingRetractorSlides'

type Props = {
  slide: SelfRetainingRetractorSlide | null
  onClose: () => void
}

export default function SelfRetainingRetractorModal({ slide, onClose }: Props) {
  useEffect(() => {
    if (!slide) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [slide])

  useEffect(() => {
    if (!slide) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slide, onClose])

  if (typeof document === 'undefined' || !slide) return null

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="retractor-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        aria-label="Close details"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-600/50 dark:bg-slate-900 sm:max-h-[85vh] sm:flex-row"
      >
        <div className="relative flex min-h-[200px] w-full shrink-0 items-center justify-center bg-slate-100 dark:bg-slate-800/80 sm:w-[42%] sm:min-h-0">
          <img
            src={slide.src}
            alt={slide.title}
            className="max-h-[min(50vh,420px)] w-full object-contain p-4 sm:max-h-full sm:p-6"
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col border-t border-slate-200 dark:border-slate-700/60 sm:border-l sm:border-t-0">
          <div className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-700/60 sm:px-5">
            <h3
              id="retractor-modal-title"
              className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg"
            >
              {slide.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">{slide.content}</div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
