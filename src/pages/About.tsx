import { Link } from 'react-router-dom'
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

/** Same brands / offer lines as Products page */
const productBrands = [
  {
    name: 'Kardiowell',
    logo: '/brands/kardiowell.jpg',
    tagline: 'Surgical & Disposable Medical Devices',
  },
  {
    name: 'Nareshsons',
    logo: '/brands/nareshans.jpg',
    tagline: 'Neuro Surgical Headframes · Self Retaining Retractor System',
  },
  {
    name: 'SurgmedZ',
    logo: '/brands/surgmedz.png',
    tagline: 'SS-TI, Surgical instruments',
  },
  {
    name: 'Equipments',
    logo: '/brands/equipments.png',
    tagline: 'Premium medical devices & solutions.',
  },
] as const

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
             <span className="text-blue-600 dark:text-blue-400">Medicure </span><span className="text-red-600 dark:text-red-400">Devices</span><span className="text-blue-600 dark:text-blue-400"> & Solutions</span>
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
          <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              Medicure Devices &amp; Solutions was incorporated in 2014 with a vision to establish a strong presence in
              Central India&apos;s medical fraternity. Over the years, the company has steadily expanded its reach beyond
              Central India and is now growing across the country through strong channel partnerships and emerging market
              opportunities.
            </p>
            <p>
              We specialize in providing high-quality medical devices and solutions across multiple healthcare segments,
              including Cardiac Surgery, Cardiac Anesthesia, Perfusion, Cardiology, Intensive Care, Respiratory Care,
              Nephrology, and General Surgery.
            </p>
            <p>
              Our portfolio includes medical-grade, rust-free stainless steel surgical instruments, self-retaining
              retractor systems, and neurosurgical head frames. These products are designed to meet the highest standards
              of precision, durability, and reliability, helping healthcare professionals deliver better patient care.
            </p>
            <p>
              Despite the dominance of multinational companies in the Indian medical device market, Medicure Devices
              &amp; Solutions is steadily building a strong presence by focusing on quality, service excellence, and
              ethical business practices—the same core values that industry experts believe drive success in this sector.
            </p>
          </div>
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
          <motion.h2 variants={item} className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl mb-2">
            What We Offer
          </motion.h2>
          <motion.p variants={item} className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            Explore our product families on the{' '}
            <Link to="/products" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
              Products
            </Link>{' '}
            page.
          </motion.p>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {productBrands.map((b) => (
              <motion.div key={b.name} variants={item}>
                <Link
                  to="/products"
                  className="block h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-500/50 dark:border-slate-700/50 dark:bg-slate-800/30 dark:hover:border-brand-500/40 shadow-sm dark:shadow-none"
                >
                  <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }} className="h-full">
                    <div className="flex h-14 w-full items-center justify-start">
                      <img
                        src={b.logo}
                        alt={`${b.name} logo`}
                        className="max-h-full w-auto max-w-[200px] object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{b.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{b.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-brand-600 dark:text-brand-400">
                      View segments →
                    </p>
                  </motion.div>
                </Link>
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
