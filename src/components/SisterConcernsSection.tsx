import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

export default function SisterConcernsSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 border-t border-slate-200 dark:border-slate-700/50">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="text-center">
          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            Our Sister Concerns
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            Trusted companies connected with Us.
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 p-6 sm:p-8 shadow-sm dark:shadow-none"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  Health Cure Devices
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Medical solutions and equipment for reliable care.
                </div>
              </div>
            </div>
            <div className="mt-5 h-px bg-slate-200 dark:bg-slate-700/50" />
            <div className="mt-4 text-sm font-medium text-brand-700 dark:text-brand-300">
              Explore more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 p-6 sm:p-8 shadow-sm dark:shadow-none"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:text-blue-300 ring-1 ring-blue-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  My Devices Inc.
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Device innovation focused on quality and usability.
                </div>
              </div>
            </div>
            <div className="mt-5 h-px bg-slate-200 dark:bg-slate-700/50" />
            <div className="mt-4 text-sm font-medium text-blue-700 dark:text-blue-300">
              Explore more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

