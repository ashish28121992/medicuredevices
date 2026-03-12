import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages } from '../data/galleryImages'

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="overflow-x-hidden">
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl text-center mb-10"
          >
            Gallery
          </motion.h1>

          {galleryImages.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-slate-500 dark:text-slate-400 py-12"
            >
              Abhi koi image nahi hai. <code className="text-sm bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">public/gallery/</code> mein JPG pics daalo aur <code className="text-sm bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">src/data/galleryImages.ts</code> mein unke naam add karo.
            </motion.p>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                hidden: {},
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {galleryImages.map((src, i) => (
                <motion.button
                  key={src}
                  type="button"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-black/20 transition-shadow"
                  onClick={() => setSelected(i)}
                >
                  <motion.img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <motion.img
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              src={galleryImages[selected]}
              alt={`Gallery ${selected + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
