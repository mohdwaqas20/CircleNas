import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

const projects = [
  { id: 1, img: `${import.meta.env.BASE_URL}project1.jpg`, title: 'Industrial Pipe Cladding', category: 'Pipe Cladding', location: 'Abu Dhabi, UAE', desc: 'Professional stainless steel cladding for industrial-scale pipe systems with thermal insulation.' },
  { id: 2, img: `${import.meta.env.BASE_URL}project2.jpg`, title: 'Rooftop Duct Installation', category: 'HVAC Installation', location: 'Dubai, UAE', desc: 'Rooftop HVAC duct fabrication and installation for commercial building.' },
  { id: 3, img: `${import.meta.env.BASE_URL}project3.jpg`, title: 'Mechanical Room Ducting', category: 'Duct Cladding', location: 'Abu Dhabi, UAE', desc: 'Complete mechanical room duct insulation and cladding system.' },
  { id: 4, img: `${import.meta.env.BASE_URL}project4.jpg`, title: 'Industrial Ventilation System', category: 'HVAC Installation', location: 'Jebel Ali, UAE', desc: 'High-capacity industrial ventilation system with blower and duct assembly.' },
  { id: 5, img: `${import.meta.env.BASE_URL}project5.jpg`, title: 'External Duct Cladding', category: 'Duct Cladding', location: 'Dubai, UAE', desc: 'Outdoor duct cladding and weatherproofing for building rooftop systems.' },
  { id: 6, img: `${import.meta.env.BASE_URL}project6.jpg`, title: 'Chilled Water Pipe System', category: 'Pipe Cladding', location: 'Abu Dhabi, UAE', desc: 'Large-scale chilled water pipe insulation and cladding in industrial facility.' },
]

const categories = ['All', 'HVAC Installation', 'Duct Cladding', 'Pipe Cladding']

const clients = [
  'Arabian Construction Company LLC (ACC)',
  'Leader Ford Contracting LLC',
  'Spaceage Electrical Switchgear Co WLL',
  'TTE Electromechanical LLC',
  'Buildup MEP Electromechanical Works LLC',
  'Global Trust General Contracting LLC',
  'Allaith Sanitary Contract Est LASCO',
  'Luxury Projects Builders LLC SPC',
]

const Projects = () => {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  const openLightbox = (project) => setLightbox(project)
  const closeLightbox = () => setLightbox(null)
  const nextProject = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id)
    setLightbox(filtered[(idx + 1) % filtered.length])
  }
  const prevProject = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id)
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
  }

  return (
    <div className="overflow-hidden pt-20">

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-[#0B2E73] to-[#1A73E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}project4.jpg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide mb-2">OUR PORTFOLIO</div>
            <h1 className="text-5xl font-bold">Our Projects</h1>
            <p className="text-xl text-white/80">Professional Works Delivered Across the UAE</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F8FAFC] border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  active === cat
                    ? 'bg-[#E31E24] text-white shadow-lg'
                    : 'bg-white text-[#0F172A] border border-gray-200 hover:border-[#E31E24] hover:text-[#E31E24]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-[#0B2E73]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#E31E24] rounded-full flex items-center justify-center">
                        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#E31E24] text-white text-xs font-bold rounded-full">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0B2E73] transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1"><MapPin size={12} className="text-[#E31E24]" />{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
              <X size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevProject() }} className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
              <ChevronLeft size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextProject() }} className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
              <ChevronRight size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img src={lightbox.img} alt={lightbox.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded-full text-xs font-bold flex items-center gap-1">
                    <Tag size={10} /> {lightbox.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><MapPin size={10} />{lightbox.location}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">{lightbox.title}</h2>
                <p className="text-gray-500">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clients */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">OUR CLIENTS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Trusted by Industry Leaders</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto mb-4"></div>
            <p className="text-gray-500">Companies we have proudly partnered with over the last 3 years</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(11,46,115,0.12)' }}
                className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm hover:border-[#0B2E73]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#0B2E73]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#0B2E73] font-bold text-xl">{client[0]}</span>
                </div>
                <p className="text-[#0F172A] font-semibold text-xs leading-tight">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-4xl font-bold text-white">Start Your Project With Us</h2>
            <p className="text-white/70 max-w-xl mx-auto">Contact us today for a free consultation and competitive quote on your next HVAC or contracting project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a whileHover={{ scale: 1.05 }} href="tel:+971566503284" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl">
                <Phone size={18} /> Call Now
              </motion.a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition-all">
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
