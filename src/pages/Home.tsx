import { motion } from 'framer-motion'
import Carousel from '../components/Carousel'
import SisterConcernsSection from '../components/SisterConcernsSection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Carousel - navbar ke neeche */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Carousel autoPlayInterval={4000} />
      </motion.section>

      <SisterConcernsSection />
    </div>
  )
}
