import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const Header = ({ isScrolling }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        isScrolling ? 'shadow-xl' : 'shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <motion.img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Circle Nas Logo"
              className="h-11 w-11 sm:h-14 sm:w-14 object-contain flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <div className="text-sm sm:text-base font-black text-[#0B2E73] leading-none tracking-wide whitespace-nowrap">CIRCLE NAS</div>
              <div className="text-[8px] sm:text-[10px] text-[#E31E24] font-bold tracking-widest uppercase whitespace-nowrap">General Contracting</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(item.path)
                    ? 'text-[#E31E24] bg-[#E31E24]/5'
                    : 'text-[#0F172A] hover:text-[#0B2E73] hover:bg-[#0B2E73]/5'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#E31E24] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://wa.me/971566503284"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm hover:bg-green-600 transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
            <motion.a
              href="tel:+971566503284"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 border-2 border-[#0B2E73] text-[#0B2E73] rounded-lg font-semibold text-sm hover:bg-[#0B2E73] hover:text-white transition-all"
            >
              <Phone size={16} />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:circlenas.uae@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 bg-[#E31E24] text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-all shadow-md"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B2E73] hover:bg-[#F8FAFC] rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-5 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-semibold rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#E31E24]/10 text-[#E31E24]'
                      : 'text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
                <a href="tel:+971566503284" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#0B2E73] text-[#0B2E73] rounded-lg font-semibold text-sm">
                  <Phone size={16} /> Call Now
                </a>
                <a href="https://wa.me/971566503284" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg font-semibold text-sm">
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a href="mailto:circlenas.uae@gmail.com" onClick={() => setMobileMenuOpen(false)} className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#E31E24] text-white rounded-lg font-semibold text-sm">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header