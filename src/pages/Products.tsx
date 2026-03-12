import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, getProductsByCategory } from '../data/products'

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Products() {
  const [category, setCategory] = useState('All')

  const list = useMemo(() => {
    if (category === 'All') return products
    return getProductsByCategory(category)
  }, [category])

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Our Products</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Browse our range of healthcare devices and equipment.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition min-h-[44px] ${
                  category === cat
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Grid */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            key={category}
            className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.length === 0 ? (
              <motion.p
                variants={card}
                className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400"
              >
                No products in this category.
              </motion.p>
            ) : (
              list.map((product) => (
                <motion.article
                  key={product.id}
                  variants={card}
                  layout
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 overflow-hidden hover:border-brand-500/50 dark:hover:border-brand-500/40 transition-colors shadow-sm dark:shadow-none"
                >
                  <Link to={`/products/${product.id}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <span className="text-xs font-medium text-brand-600 dark:text-brand-400">{product.category}</span>
                      <h2 className="mt-1 text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
                        {product.name}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.inStock ? (
                          <span className="text-xs text-brand-600 dark:text-brand-400">In stock</span>
                        ) : (
                          <span className="text-xs text-amber-600 dark:text-amber-400">Out of stock</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
