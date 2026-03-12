import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            For product enquiries or support, reach out to us.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="px-4 pb-20 sm:px-6"
      >
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 p-6 sm:p-8 space-y-8 shadow-sm dark:shadow-none">
            <motion.a
              href="mailto:support@medicuredevices.com"
              whileHover={{ x: 4 }}
              className="block group"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
              <span className="text-lg text-brand-600 dark:text-brand-400 group-hover:underline break-all">
                support@medicuredevices.com
              </span>
            </motion.a>
            <motion.a
              href="tel:+911800xxxxxxx"
              whileHover={{ x: 4 }}
              className="block group"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
              <span className="text-lg text-brand-600 dark:text-brand-400 group-hover:underline">
                +91 1800-xxx-xxxx
              </span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
