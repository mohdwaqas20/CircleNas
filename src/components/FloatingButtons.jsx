import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ChevronUp } from 'lucide-react'

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/971566503284"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all group relative"
        title="WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute right-16 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+971566503284"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.15, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#E31E24] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-all group relative"
        title="Call Now"
      >
        <Phone size={24} />
        <span className="absolute right-16 bg-[#E31E24] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          +971 56 650 3284
        </span>
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-[#0B2E73] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#1A73E8] transition-all"
            title="Back to Top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingButtons
