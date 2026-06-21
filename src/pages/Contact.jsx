import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import ContactSection from '../components/ContactSection'

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: 'Main Phone', value: '+971 56 650 3284', link: 'tel:+971566503284', color: '#E31E24' },
    { icon: Phone, label: 'Second Phone', value: '+971 50 931 4420', link: 'tel:+971509314420', color: '#1A73E8' },
    { icon: Mail, label: 'Email', value: 'circlenas.uae@gmail.com', link: 'mailto:circlenas.uae@gmail.com', color: '#0B2E73' },
    { icon: MapPin, label: 'Address', value: 'Mohammed Bin Zayed City, Abu Dhabi, UAE', link: '#', color: '#E31E24' },
  ]

  return (
    <div className="overflow-hidden pt-20">

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-[#0B2E73] to-[#1A73E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide mb-2">REACH US</div>
            <h1 className="text-5xl font-bold">Get In Touch</h1>
            <p className="text-xl text-white/80">We're here to help with your contracting needs</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all text-center group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: info.color + '15' }}
                >
                  <info.icon size={22} style={{ color: info.color }} />
                </div>
                <p className="text-gray-400 text-xs mb-1 font-medium">{info.label}</p>
                <p className="text-[#0F172A] font-bold text-xs leading-tight">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection className="py-16 bg-white" />

      {/* Map Placeholder */}
      <section className="h-64 bg-[#F8FAFC] border-t border-gray-100 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E73]/5 to-[#1A73E8]/5"></div>
        <div className="relative text-center">
          <MapPin size={40} className="text-[#E31E24] mx-auto mb-3" />
          <p className="text-[#0F172A] font-bold text-lg">Mohammed Bin Zayed City, Abu Dhabi, UAE</p>
          <a
            href="https://maps.google.com/?q=Mohammed+Bin+Zayed+City+Abu+Dhabi+UAE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[#0B2E73] font-semibold hover:underline text-sm"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact