import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wind, Layers, Droplets, Snowflake, Wrench, Settings, Thermometer, Building2, Phone, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'HVAC Duct Fabrication & Installation',
    desc: 'Custom duct fabrication and professional installation for optimal air distribution and system efficiency across commercial and industrial projects.',
    features: ['Custom Duct Design', 'Quality Galvanized Steel', 'Professional Installation', 'System Balancing & Testing'],
    color: '#0B2E73',
  },
  {
    icon: Layers,
    title: 'Duct Cladding',
    desc: 'Protective and thermal cladding for ducts ensuring energy efficiency, durability, and a professional finish for all environments.',
    features: ['Thermal Insulation', 'Weather Protection', 'Fire Resistant Finishes', 'Stainless Steel Cladding'],
    color: '#1A73E8',
  },
  {
    icon: Droplets,
    title: 'Pipe Cladding',
    desc: 'Complete pipe cladding solutions for PPR, chilled water, and specialized industrial applications requiring premium insulation.',
    features: ['PPR Pipe Cladding', 'Chilled Water Pipes', 'Roof Duct Systems', 'Thermal Insulation'],
    color: '#E31E24',
  },
  {
    icon: Snowflake,
    title: 'AC Installation',
    desc: 'Professional air conditioning system installation with complete equipment setup, commissioning, and handover.',
    features: ['System Design & Planning', 'Equipment Supply', 'Professional Installation', 'Commissioning & Handover'],
    color: '#0B2E73',
  },
  {
    icon: Wrench,
    title: 'AC Maintenance',
    desc: 'Regular and preventive air conditioning maintenance to maximize system efficiency, lifespan, and indoor air quality.',
    features: ['Preventive Servicing', 'Filter Replacement', 'Performance Testing', '24/7 Emergency Support'],
    color: '#1A73E8',
  },
  {
    icon: Settings,
    title: 'PVC Duct Installation',
    desc: 'Expert PVC ductwork fabrication and installation suited for corrosion-resistant applications in commercial and industrial spaces.',
    features: ['Corrosion Resistant', 'Chemical Environments', 'Food Processing Facilities', 'Clean Room Applications'],
    color: '#E31E24',
  },
  {
    icon: Thermometer,
    title: 'Ventilation Systems',
    desc: 'Design and installation of effective mechanical ventilation systems for improved air quality and regulatory compliance.',
    features: ['Fresh Air Supply', 'Exhaust Systems', 'Heat Recovery Units', 'Regulatory Compliance'],
    color: '#0B2E73',
  },
  {
    icon: Building2,
    title: 'General Maintenance Works',
    desc: 'Comprehensive maintenance services covering all MEP systems, ensuring smooth and continuous building operations.',
    features: ['MEP Maintenance', 'Preventive Care Plans', 'Emergency Repair Response', 'Technical Support'],
    color: '#1A73E8',
  },
]

const industries = [
  'Commercial Buildings', 'Residential Projects', 'Industrial Facilities',
  'Warehouses', 'Retail Developments', 'Hospitality Projects', 'Infrastructure Projects',
]

const Services = () => {
  return (
    <div className="overflow-hidden pt-20">

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-[#0B2E73] to-[#1A73E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}project6.jpg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide mb-2">WHAT WE DO</div>
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Professional HVAC, Cladding & General Contracting Solutions Across the UAE</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">CORE SERVICES</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Comprehensive Solutions</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Every service delivered with skilled manpower, modern methods, and a commitment to safety and quality</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 hover:border-[#0B2E73]/20 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: svc.color + '18' }}
                  >
                    <svc.icon size={26} style={{ color: svc.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0B2E73] transition-colors">{svc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {svc.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-xs text-[#0F172A] font-medium">
                          <CheckCircle size={12} className="text-[#E31E24] flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">SECTORS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Industries We Serve</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-6 py-3 bg-white rounded-xl border-2 border-[#0B2E73]/10 hover:border-[#0B2E73] text-[#0F172A] font-semibold shadow-sm hover:shadow-md transition-all text-sm"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={`${import.meta.env.BASE_URL}project4.jpg`} alt="Quality work" className="w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide">QUALITY & SAFETY</div>
              <h2 className="text-4xl font-bold text-[#0F172A]">Committed to the Highest Standards</h2>
              <p className="text-gray-500 leading-relaxed">
                We maintain high standards of quality, health, safety, and environmental responsibility in every project. Our objective is to provide dependable services and build long-term relationships with our clients.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'HSE Compliance', desc: 'Strict adherence to UAE health, safety & environment regulations' },
                  { title: 'Quality Workmanship', desc: 'Meticulous attention to detail and premium materials' },
                  { title: 'Experienced Workforce', desc: 'Skilled and trained technical team for every project' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#E31E24]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-[#E31E24]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A] text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0B2E73] text-white rounded-lg font-semibold hover:bg-[#1A73E8] transition-all"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B2E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold text-white">Need a Professional Contracting Service?</h2>
            <p className="text-white/60 max-w-xl mx-auto">Contact us today for a free site visit and competitive quotation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971566503284" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl">
                <Phone size={18} /> +971 56 650 3284
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition-all">
                Send Us a Message <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
