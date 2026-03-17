import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const categories = [
  { name: 'Monitoring', icon: '📊', desc: 'BP monitors, oximeters, thermometers' },
  { name: 'Respiratory', icon: '🫁', desc: 'Nebulizers, CPAP, breathing support' },
  { name: 'Diabetes Care', icon: '🩸', desc: 'Glucometers, strips, and accessories' },
  { name: 'Mobility', icon: '♿', desc: 'Wheelchairs, walkers, and aids' },
]

const values = [
  'Quality & reliability in every product',
  'Easy to use at home',
  'Trusted by healthcare professionals',
  'Customer support when you need it',
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.18),transparent)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            About <span className="text-blue-600 dark:text-blue-400">Medicure </span><span className="text-red-600 dark:text-red-400">Devices</span><span className="text-blue-600 dark:text-blue-400"> & Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Your trusted partner in home healthcare.
          </motion.p>
        </div>
      </motion.section>

      {/* Story */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="px-4 py-12 sm:px-6 sm:py-16 border-t border-slate-200 dark:border-slate-700/50"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Our Story</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Medicure Devices & Solutions is a trusted name in home healthcare equipment. We offer a wide range of medical devices
            including blood pressure monitors, pulse oximeters, nebulizers, glucometers, thermometers, and mobility
            aids. Our products are designed for reliability and ease of use, so you can manage your health with
            confidence at home.
          </p>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-4 py-12 sm:px-6 sm:py-16 border-t border-slate-200 dark:border-slate-700/50"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={item} className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl mb-8">
            What We Offer
          </motion.h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 p-6 hover:border-brand-500/50 dark:hover:border-brand-500/40 transition-colors shadow-sm dark:shadow-none"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{cat.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="px-4 py-12 sm:px-6 sm:py-16 border-t border-slate-200 dark:border-slate-700/50"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Why Choose Us</h2>
          <ul className="mt-6 space-y-4">
            {values.map((v, i) => (
              <motion.li
                key={v}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
              >
                <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                {v}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  )
}
