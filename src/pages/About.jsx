import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Shield, Award, CheckCircle, Users, ArrowRight, Phone } from 'lucide-react'

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

const About = () => {
  return (
    <div className="overflow-hidden pt-20">

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-[#0B2E73] to-[#1A73E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/project3.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide mb-2">ABOUT US</div>
            <h1 className="text-5xl font-bold">Circle Nas General Contracting</h1>
            <p className="text-xl text-white/80">Trusted Partner for Professional Contracting Solutions in UAE</p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide">WHO WE ARE</div>
              <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                Built on Quality,<br />
                <span className="text-[#0B2E73]">Driven by Excellence</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Circle Nas General Contracting - L.L.C - O.P.C is a UAE-based contracting company providing HVAC ducting works, cladding solutions, mechanical and electrical contracting, and building project support services.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Established in 2023 and licensed under the Abu Dhabi Department of Economic Development, we are committed to delivering quality workmanship, safe execution, and reliable project delivery across commercial, residential, and industrial sectors.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'UAE-Licensed Company (2023)',
                  'Abu Dhabi Based',
                  'HVAC & Cladding Specialists',
                  'MEP Contracting',
                  'Trade License: CN-5020515',
                  '50+ Projects Delivered',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#0F172A] font-medium">
                    <CheckCircle size={14} className="text-[#E31E24] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 h-[480px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/project1.jpg" alt="HVAC work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-[49%]">
                  <img src="/project2.jpg" alt="Duct work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-[49%]">
                  <img src="/project5.jpg" alt="Cladding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#0B2E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2023', label: 'Year Established' },
              { number: '50+', label: 'Projects Completed' },
              { number: '40+', label: 'Satisfied Clients' },
              { number: '8', label: 'Major Partners' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#E31E24] mb-1">{s.number}</div>
                <p className="text-white/70 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">OUR PURPOSE</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Vision & Mission</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#0B2E73]"
            >
              <div className="w-16 h-16 bg-[#0B2E73]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={30} className="text-[#0B2E73]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                To become a trusted contracting partner recognized for quality, reliability, and customer satisfaction across the UAE.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#E31E24]"
            >
              <div className="w-16 h-16 bg-[#E31E24]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={30} className="text-[#E31E24]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                To deliver professional contracting services through skilled manpower, innovative solutions, and strict adherence to safety and quality standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">VALUES</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">What Drives Us</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Safety', desc: 'Unwavering commitment to worker and project safety on every site', color: '#0B2E73' },
              { icon: Award, title: 'Quality', desc: 'Excellence in workmanship and consistent service delivery', color: '#E31E24' },
              { icon: CheckCircle, title: 'Reliability', desc: 'On-time delivery and consistent performance you can count on', color: '#1A73E8' },
              { icon: Users, title: 'Integrity', desc: 'Transparent dealings and ethical business practices always', color: '#0B2E73' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 bg-[#F8FAFC] rounded-xl hover:shadow-xl transition-all text-center border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: value.color + '15' }}
                >
                  <value.icon size={26} style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">PARTNERS</div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Companies We've Worked With</h2>
            <div className="h-1 w-16 bg-[#E31E24] mx-auto mb-4"></div>
            <p className="text-gray-500">Trusted by leading contracting companies across the UAE over the last 3 years</p>
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
      <section className="py-16 bg-[#0B2E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="text-white/60 max-w-xl mx-auto">Contact our team today for a free consultation on your next project</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971566503284" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl">
                <Phone size={18} /> Call Us Now
              </a>
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

export default About
