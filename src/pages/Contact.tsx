import { motion } from 'framer-motion'
import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_OPEN_URL } from '../config/contactMap'

const addressLines = [
  'Shop no. E, 36, Main Rd, C Sector,',
  'Nehru Nagar, Bhopal,',
  'Madhya Pradesh 462003',
]

/** Company line — shown first, highlighted */
const COMPANY_PHONE = {
  tel: '+917553509368',
  display: '+91 75535 09368',
}

/** Other contact numbers (tap to call) */
const OTHER_PHONES = [
  { tel: '+919754935692', display: '+91 97549 35692' },
  { tel: '+919713105858', display: '+91 97131 05858' },
  { tel: '+919926414200', display: '+91 99264 14200' },
] as const

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Product enquiries, support, or visit us — we’re here to help.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="px-4 pb-20 sm:px-6"
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#fafaf9] to-slate-50 dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-slate-900/40 dark:border-slate-700/60 p-6 sm:p-10 shadow-sm ring-1 ring-slate-200/60 dark:ring-slate-700/40">
            {/* Business-card style: vertical accent line */}
            <div className="flex gap-5 sm:gap-8">
              <div
                className="w-1 shrink-0 rounded-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600"
                aria-hidden
              />
              <div className="min-w-0 flex-1 space-y-8 text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Company
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="text-blue-800 dark:text-blue-400">Medicure </span>
                    <span className="text-red-600 dark:text-red-400">Devices</span>
                    <span className="text-blue-800 dark:text-blue-400"> &amp; Solutions</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Address
                  </p>
                  <address className="mt-2 not-italic text-base leading-relaxed text-slate-800 dark:text-slate-200">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                {/* Company number — primary, easy to spot */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Company number
                  </p>
                  <motion.a
                    href={`tel:${COMPANY_PHONE.tel}`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="mt-3 flex flex-col rounded-xl border-2 border-brand-500/40 bg-brand-500/10 px-4 py-4 shadow-sm ring-1 ring-brand-500/20 transition-colors hover:bg-brand-500/15 dark:border-brand-400/35 dark:bg-brand-500/15 dark:ring-brand-400/20"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-brand-800 dark:text-brand-200">
                      Main office line
                    </span>
                    <span className="mt-1 text-2xl font-bold tracking-tight text-brand-700 dark:text-brand-300 sm:text-3xl">
                      {COMPANY_PHONE.display}
                    </span>
                    <span className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                      Prefer this number for company enquiries &amp; office contact.
                    </span>
                  </motion.a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Other contact numbers
                  </p>
                  <ul className="mt-3 space-y-2">
                    {OTHER_PHONES.map((p) => (
                      <li key={p.tel}>
                        <motion.a
                          href={`tel:${p.tel}`}
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 text-base font-medium text-brand-600 hover:underline dark:text-brand-400"
                        >
                          {p.display}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <motion.a
                    href="mailto:mdsbpl@yahoo.com"
                    whileHover={{ x: 4 }}
                    className="block group"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      E-mail
                    </p>
                    <span className="mt-2 text-lg font-medium text-brand-600 dark:text-brand-400 group-hover:underline break-all">
                      mdsbpl@yahoo.com
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Prefer WhatsApp? Use the green button at the bottom-right of the page.
          </p>

          {/* Google Map — embed URL: src/config/contactMap.ts or VITE_GOOGLE_MAPS_EMBED_URL */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              Find us on the map
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Location: Nehru Nagar, Bhopal — open in Google Maps for directions.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/40">
              <div className="relative aspect-[4/3] w-full min-h-[240px] sm:aspect-video sm:min-h-[280px]">
                <iframe
                  title="Medicure Devices & Solutions on Google Maps"
                  src={GOOGLE_MAPS_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href={GOOGLE_MAPS_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-brand-600 hover:underline dark:text-brand-400"
              >
                Open in Google Maps
                <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
