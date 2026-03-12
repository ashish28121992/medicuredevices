import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700/50 dark:bg-slate-950 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3 font-semibold text-brand-600 dark:text-brand-400 min-h-[44px] items-center inline-flex">
              <motion.span
                className="flex h-12 shrink-0 items-center rounded-lg bg-white dark:bg-white/10 px-2.5 py-2 ring-1 ring-slate-200/50 dark:ring-slate-600/50"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <img src="/logo.jpg" alt="Medicure Devices" className="h-full w-auto max-w-[140px] object-contain" />
              </motion.span>
              Medicure Devices
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Trusted medical devices and equipment for healthcare at home.
            </p>
          </div>
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
              <li>Monitoring</li>
              <li>Respiratory</li>
              <li>Diabetes Care</li>
              <li>Mobility</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">Contact</h3>
            <a href="mailto:support@medicuredevices.com" className="mt-3 block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 break-all">support@medicuredevices.com</a>
            <a href="tel:+911800xxxxxxx" className="block py-2.5 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">+91 1800-xxx-xxxx</a>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 border-t border-slate-200 dark:border-slate-700/50 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-500">
          © {new Date().getFullYear()} Medicure Devices. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
