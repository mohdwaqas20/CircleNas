import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Circle Nas Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold leading-none">
                  <span className="text-accent-red">Circle</span> NAS
                </h3>
                <p className="text-xs text-gray-300">General Contracting</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium HVAC, duct cladding & general contracting solutions across UAE.
            </p>
            {/*<div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-accent-red transition-all p-2 hover:bg-white/10 rounded-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-red transition-all p-2 hover:bg-white/10 rounded-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-red transition-all p-2 hover:bg-white/10 rounded-lg">
                <Twitter size={20} />
              </a>
            </div>*/}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <Link to="/" className="text-gray-300 hover:text-accent-red transition-all flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-accent-red transition-all flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> About Us
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-accent-red transition-all flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Services
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-accent-red transition-all flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-accent-red transition-all flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Contact
            </Link>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> HVAC Installation
            </p>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Duct Cladding
            </p>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> Pipe Cladding
            </p>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> AC Installation
            </p>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> AC Maintenance
            </p>
            <p className="text-gray-300 hover:text-accent-red transition-all cursor-pointer text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-red rounded-full"></span> General Maintenance Works
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <a href="tel:+971566503284" className="flex items-center gap-3 text-gray-300 hover:text-accent-red transition-all group">
              <div className="p-2 bg-white/10 group-hover:bg-accent-red rounded-lg transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Main</p>
                <p className="font-semibold">+971 56 650 3284</p>
              </div>
            </a>
            <a href="tel:+971509314420" className="flex items-center gap-3 text-gray-300 hover:text-accent-red transition-all group">
              <div className="p-2 bg-white/10 group-hover:bg-accent-red rounded-lg transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Support</p>
                <p className="font-semibold">+971 50 931 4420</p>
              </div>
            </a>
            <a href="mailto:circlenas.uae@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-accent-red transition-all group">
              <div className="p-2 bg-white/10 group-hover:bg-accent-red rounded-lg transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-semibold text-sm">circlenas.uae@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>&copy; 2026 Circle Nas General Contracting LLC. All rights reserved. | Abu Dhabi, UAE</p>
          <p className="mt-2">Professional HVAC & Contracting Solutions | Trade License: CN-5020515</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer