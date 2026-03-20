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
            <div className="flex flex-col gap-4">
              <img
                src="/sister-concerns/healthcure-devices.jpeg"
                alt="HealthCure Devices logo"
                className="h-20 sm:h-24 w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                  HealthCure Devices
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
            <div className="flex flex-col gap-4">
              <img
                src="/sister-concerns/mydevices-corporation.jpeg"
                alt="Mydevices Corporation logo"
                className="h-20 sm:h-24 w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  Mydevices Corporation
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

