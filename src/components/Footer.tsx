import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700/50 dark:bg-slate-950 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link to="/" className="flex flex-col items-center gap-2 font-semibold min-h-[44px] inline-flex">
              <motion.span
                className="flex h-14 sm:h-16 shrink-0 items-center rounded-lg bg-white dark:bg-white/10 px-3 py-2.5 ring-1 ring-slate-200/50 dark:ring-slate-600/50"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <img src="/logo.jpg" alt="Medicure Devices & Solutions" className="h-full w-auto max-w-[180px] object-contain" />
              </motion.span>
              <motion.span
                className="text-center text-sm sm:text-base font-semibold leading-tight whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 }}
              >
                <span className="text-blue-600 dark:text-blue-400">Medicure </span>
                <span className="text-red-600 dark:text-red-400">Devices</span>
                <span className="text-blue-600 dark:text-blue-400"> & Solutions</span>
              </motion.span>
            </Link>
          </motion.div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">Quick Links</h3>
            <ul className="mt-3 space-y-0">
              <li><Link to="/" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 min-h-[44px] flex items-center">Home</Link></li>
              <li><Link to="/gallery" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 min-h-[44px] flex items-center">Gallery</Link></li>
              <li><Link to="/about" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 min-h-[44px] flex items-center">About</Link></li>
              <li><Link to="/products" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 min-h-[44px] flex items-center">Products</Link></li>
              <li><Link to="/contact" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 min-h-[44px] flex items-center">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">Categories</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>Kardiowell</li>
              <li>Nareshsons</li>
              <li>SurgmedZ</li>
              <li>Surgical Equipments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">Contact</h3>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Shop no. E, 36, Main Rd, C Sector,<br />
              Nehru Nagar, Bhopal,<br />
              Madhya Pradesh 462003
            </p>
            <a href="mailto:mdsbpl@yahoo.com" className="mt-3 block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 break-all">mdsbpl@yahoo.com</a>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">Company</p>
            <a href="tel:+917553509368" className="block py-1 text-sm font-semibold text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400">+91 75535 09368</a>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Also</p>
            <a href="tel:+919754935692" className="block py-1 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">+91 97549 35692</a>
            <a href="tel:+919713105858" className="block py-1 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">+91 97131 05858</a>
            <a href="tel:+919926414200" className="block py-1 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">+91 99264 14200</a>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 border-t border-slate-200 dark:border-slate-700/50 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-500">
          © {new Date().getFullYear()} Medicure Devices & Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
