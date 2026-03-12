import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-20 text-center"
      >
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-brand-600 dark:text-brand-400 hover:underline">
          Back to products
        </Link>
      </motion.div>
    )
  }

  return (
    <div className="overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition"
          >
            ← Back to products
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-brand-600 dark:text-brand-400"
            >
              {product.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              {product.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {product.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="text-2xl sm:text-3xl font-bold text-brand-600 dark:text-brand-400">
                ₹{product.price.toLocaleString()}
              </span>
              {product.inStock ? (
                <span className="text-sm text-brand-600 dark:text-brand-400">In stock</span>
              ) : (
                <span className="text-sm text-amber-600 dark:text-amber-400">Out of stock</span>
              )}
            </motion.div>

            {product.specs && product.specs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Specifications</h2>
                <ul className="mt-3 space-y-2">
                  {product.specs.map((spec, i) => (
                    <motion.li
                      key={spec}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                      {spec}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="mailto:support@medicuredevices.com"
                className="rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white hover:bg-brand-500 active:bg-brand-700 transition min-h-[48px] inline-flex items-center"
              >
                Enquire / Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
