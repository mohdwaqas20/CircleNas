import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react'

const WHATSAPP_NUMBER = '971566503284'
const BUSINESS_EMAIL = 'circlenas.uae@gmail.com'

const services = ['HVAC Duct Installation', 'Duct Cladding', 'Pipe Cladding', 'AC Installation', 'AC Maintenance', 'PVC Duct Installation', 'General Maintenance', 'Other']

const ContactSection = ({ className = 'py-16 bg-white', heading = true, cardOnWhite = false }) => {
  const cardBg = cardOnWhite ? 'bg-white' : 'bg-[#F8FAFC]'
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // 'whatsapp' | 'email' | null

  useEffect(() => {
    if (!status) return
    const t = setTimeout(() => setStatus(null), 4000)
    return () => clearTimeout(t)
  }, [status])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const buildMessage = () => {
    const lines = [
      'New Inquiry from Website',
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Email: ${form.email}`,
      form.service ? `Service: ${form.service}` : null,
      `Message: ${form.message}`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const isValid = () => form.name.trim() && form.email.trim() && form.message.trim()

  // Submitting the form sends the filled-in details straight to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid()) return
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
    setStatus('whatsapp')
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  // Secondary option: send the same filled-in details via email instead
  const handleEmailSubmit = () => {
    if (!isValid()) return
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`)
    const body = encodeURIComponent(buildMessage())
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`
    setStatus('email')
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {heading && (
              <div>
                <div className="inline-block px-3 py-1 bg-[#E31E24]/10 text-[#E31E24] rounded font-semibold text-sm tracking-wide mb-3">CONTACT DETAILS</div>
                <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Let's Discuss<br />Your Project</h2>
                <p className="text-gray-500 leading-relaxed">
                  Whether you need HVAC installation, cladding works, or general maintenance — our team is ready to provide professional solutions at competitive prices.
                </p>
              </div>
            )}

            {/* Phone numbers with large display */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-[#0B2E73] rounded-xl">
                <div className="w-12 h-12 bg-[#E31E24] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Call Us — Main</p>
                  <a href="tel:+971566503284" className="text-white font-bold text-xl hover:text-[#E31E24] transition-colors">+971 56 650 3284</a>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-5 ${cardBg} border border-gray-100 rounded-xl`}>
                <div className="w-12 h-12 bg-[#1A73E8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#1A73E8]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Second Number</p>
                  <a href="tel:+971509314420" className="text-[#0F172A] font-bold text-xl hover:text-[#1A73E8] transition-colors">+971 50 931 4420</a>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-5 ${cardBg} border border-gray-100 rounded-xl`}>
                <div className="w-12 h-12 bg-[#0B2E73]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#0B2E73]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email Us</p>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[#0F172A] font-bold hover:text-[#0B2E73] transition-colors">{BUSINESS_EMAIL}</a>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#0B2E73] text-white rounded-xl font-bold text-lg hover:bg-[#0a255f] transition-all shadow-lg"
              >
                <Mail size={22} />
                Email Us
              </a>
            </div>

            {/* Hours */}
            <div className={`p-5 ${cardBg} rounded-xl border border-gray-100`}>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} className="text-[#E31E24]" />
                <h3 className="font-bold text-[#0F172A]">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Monday – Friday</span><span className="font-semibold text-[#0F172A]">8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between text-gray-600"><span>Saturday</span><span className="font-semibold text-[#0F172A]">8:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between text-gray-600"><span>Sunday</span><span className="font-semibold text-[#E31E24]">Available on Call</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={`${cardBg} rounded-2xl p-8 shadow-sm border border-gray-100`}>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">Fill in your details and send them straight to us on WhatsApp or by email.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B2E73] focus:ring-2 focus:ring-[#0B2E73]/10 outline-none bg-white text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B2E73] focus:ring-2 focus:ring-[#0B2E73]/10 outline-none bg-white text-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B2E73] focus:ring-2 focus:ring-[#0B2E73]/10 outline-none bg-white text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B2E73] focus:ring-2 focus:ring-[#0B2E73]/10 outline-none bg-white text-sm transition-all text-gray-600"
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project or inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B2E73] focus:ring-2 focus:ring-[#0B2E73]/10 outline-none bg-white text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-green-500 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg"
                >
                  <MessageCircle size={20} /> Send via WhatsApp
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleEmailSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white border-2 border-[#0B2E73] text-[#0B2E73] rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0B2E73] hover:text-white transition-all"
                >
                  <Send size={18} /> Send via Email
                </motion.button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-600 font-semibold justify-center"
                  >
                    <CheckCircle size={16} />
                    {status === 'whatsapp' ? 'Opening WhatsApp with your details...' : 'Opening your email app with your details...'}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection