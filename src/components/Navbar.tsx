import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-950/90">
      <div className="mx-auto flex min-h-[88px] sm:min-h-[96px] max-w-6xl items-center justify-between px-4 sm:px-6 gap-2 py-2">
        <Link to="/" className="flex flex-col items-center gap-1.5 shrink-0" onClick={() => setOpen(false)}>
          <motion.span
            className="flex h-14 sm:h-16 shrink-0 items-center rounded-lg bg-white dark:bg-white/10 px-3.5 py-2.5 ring-1 ring-slate-200/50 dark:ring-slate-600/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/logo.jpg" alt="Medicure Devices & Solutions" className="h-full w-auto max-w-[260px] object-contain" />
          </motion.span>
          <motion.span
            className="text-center text-sm sm:text-base font-semibold leading-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-blue-600 dark:text-blue-400">Medicure </span>
            <span className="text-red-600 dark:text-red-400">Devices</span>
            <span className="text-blue-600 dark:text-blue-400"> & Solutions</span>
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                location.pathname === to
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
              }`}
            >
              {location.pathname === to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-brand-500/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="md:hidden rounded-lg p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 -mr-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-slate-50/95 dark:border-slate-700/50 dark:bg-slate-900/95 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-0.5 px-3 py-2 pb-4" aria-label="Main">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3.5 min-h-[44px] text-left transition ${
                    location.pathname === to
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
