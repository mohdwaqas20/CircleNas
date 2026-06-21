import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import {
  Phone, Mail, MapPin, ArrowRight, CheckCircle,
  Shield, Clock, Award, Users, Star, ChevronDown, MessageCircle
} from 'lucide-react'
import ContactSection from '../components/ContactSection'

const CountUp = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        let startTime = null
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, started])

  return <span ref={ref}>{count}{suffix}</span>
}

const Home = () => {
  const services = [
    { title: 'HVAC Duct Installation', desc: 'Custom duct fabrication and professional installation' },
    { title: 'Duct Cladding', desc: 'Thermal and protective cladding for all duct types' },
    { title: 'Pipe Cladding', desc: 'PPR & chilled water pipe cladding solutions' },
    { title: 'AC Installation', desc: 'Complete air conditioning system installation' },
    { title: 'AC Maintenance', desc: 'Preventive and corrective AC maintenance' },
    { title: 'General Maintenance', desc: 'Comprehensive MEP maintenance services' },
  ]

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

  const whyUs = [
    { icon: Award, title: 'Expert Technical Team', desc: 'Skilled professionals with years of UAE contracting experience' },
    { icon: CheckCircle, title: 'Quality Workmanship', desc: 'Meticulous execution meeting international standards' },
    { icon: Shield, title: 'Safety First', desc: 'Strict HSE compliance on every project site' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Reliable project timelines, delivered as promised' },
    { icon: Star, title: 'Competitive Pricing', desc: 'Best value solutions without compromising quality' },
    { icon: Users, title: 'Trusted by Leaders', desc: 'Partnered with UAE\'s top contracting companies' },
  ]

  const projects = [
    { img: '/project1.jpg', title: 'Industrial Pipe Cladding', loc: 'Abu Dhabi, UAE', cat: 'Pipe Cladding' },
    { img: '/project2.jpg', title: 'Rooftop Duct Installation', loc: 'Dubai, UAE', cat: 'HVAC Installation' },
    { img: '/project3.jpg', title: 'Mechanical Room Ducting', loc: 'Abu Dhabi, UAE', cat: 'Duct Cladding' },
    { img: '/project4.jpg', title: 'Industrial Ventilation', loc: 'Jebel Ali, UAE', cat: 'HVAC Installation' },
    { img: '/project5.jpg', title: 'External Duct Cladding', loc: 'Dubai, UAE', cat: 'Duct Cladding' },
    { img: '/project6.jpg', title: 'Chilled Water Pipe System', loc: 'Abu Dhabi, UAE', cat: 'Pipe Cladding' },
  ]

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image collage */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          {['/project6.jpg', '/project2.jpg', '/project4.jpg'].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover scale-110" />
            </div>
          ))}
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E73]/95 via-[#0B2E73]/85 to-[#0B2E73]/60"></div>

        {/* Animated diagonal stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E31E24]/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31E24]/20 border border-[#E31E24]/50 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#E31E24] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-semibold tracking-wide">UAE Licensed Contractor · Est. 2023</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Professional{' '}
              <span className="text-[#E31E24]">HVAC</span>
              {' '}&amp;{' '}
              <span className="relative">
                Cladding
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1A73E8] origin-left"
                />
              </span>
              {' '}Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Delivering reliable HVAC installations, duct systems, cladding solutions, and maintenance services for commercial, residential, and industrial projects across the UAE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:+971566503284"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-lg font-bold text-lg shadow-2xl hover:bg-red-700 transition-all"
              >
                <Phone size={20} />
                Call Now: +971 56 650 3284
              </motion.a>
              <motion.a
                href="https://wa.me/971566503284"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border-2 border-white/40 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </motion.a>
            </motion.div>

            {/* Quick contact row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20"
            >
              <a href="tel:+971509314420" className="flex items-center gap-2 text-white/70 hover:text-white transition-all text-sm">
                <Phone size={14} className="text-[#E31E24]" /> +971 50 931 4420
              </a>
              <a href="mailto:circlenas.uae@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-all text-sm">
                <Mail size={14} className="text-[#E31E24]" /> circlenas.uae@gmail.com
              </a>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} className="text-[#E31E24]" /> Abu Dhabi, UAE
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0B2E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 50, suffix: '+', label: 'Projects Completed' },
              { end: 40, suffix: '+', label: 'Satisfied Clients' },
              { end: 3, suffix: '+', label: 'Years Experience' },
              { end: 8, suffix: '', label: 'Major Partners' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#E31E24] mb-1">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-white/70 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide">
                WHO WE ARE
              </div>
              <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                Circle Nas General Contracting
                <span className="text-[#0B2E73]"> — Built on Trust</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A UAE-based contracting company established in 2023, providing HVAC ducting works, cladding solutions, mechanical and electrical contracting, and building project support services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering quality workmanship, safe execution, and reliable project delivery across commercial, residential, and industrial sectors.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {['UAE-Licensed Company', 'Abu Dhabi Based', 'HVAC Specialists', 'MEP Contracting'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#0F172A] font-medium">
                    <CheckCircle size={16} className="text-[#E31E24] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2E73] text-white rounded-lg font-semibold hover:bg-[#1A73E8] transition-all mt-2"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 h-[480px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/project3.jpg" alt="HVAC work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-[49%]">
                  <img src="/project5.jpg" alt="Duct cladding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-[49%]">
                  <img src="/project1.jpg" alt="Pipe cladding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">OUR SERVICES</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">What We Deliver</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive contracting solutions tailored to your project needs across the UAE</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white p-7 rounded-xl shadow-md border-l-4 border-[#E31E24] group cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#0B2E73]/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-[#E31E24] rounded-sm"></div>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#0B2E73] transition-colors">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#E31E24] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B2E73] text-white rounded-lg font-semibold hover:bg-[#1A73E8] transition-all shadow-lg"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">OUR PROJECTS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Work That Speaks for Itself</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[#E31E24] text-xs font-bold uppercase tracking-wider">{p.cat}</span>
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  <p className="text-white/70 text-sm flex items-center gap-1 mt-1"><MapPin size={12} />{p.loc}</p>
                </div>
                {/* Always visible label */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-3 translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                  <h3 className="text-[#0F172A] font-semibold text-sm">{p.title}</h3>
                  <span className="text-[#E31E24] text-xs">{p.cat}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0B2E73] text-[#0B2E73] rounded-lg font-semibold hover:bg-[#0B2E73] hover:text-white transition-all"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">WHY CIRCLE NAS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">The Circle Nas Difference</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#0B2E73]/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={26} className="text-[#0B2E73]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">OUR CLIENTS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Trusted by Leading Companies</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-xl mx-auto">Companies we have proudly partnered with in the last 3 years</p>
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
                className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-xl text-center hover:border-[#0B2E73]/30 transition-all"
              >
                <div className="w-10 h-10 bg-[#0B2E73]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#0B2E73] font-bold text-lg">{client[0]}</span>
                </div>
                <p className="text-[#0F172A] font-semibold text-xs leading-tight">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <ContactSection className="py-20 bg-[#F8FAFC] border-t border-gray-100" cardOnWhite />

    </div>
  )
}

export default Home