import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0B2E73 0%, #08234F 60%, #0B2E73 100%)' }}
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-96 h-96 rounded-full"
              style={{
                top: '8%',
                left: '12%',
                background: 'radial-gradient(circle, rgba(227,30,36,0.18) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute w-[26rem] h-[26rem] rounded-full"
              style={{
                bottom: '5%',
                right: '8%',
                background: 'radial-gradient(circle, rgba(26,115,232,0.22) 0%, transparent 70%)',
                filter: 'blur(70px)',
              }}
            />
          </div>

          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Circle Nas General Contracting"
            className="relative z-10"
            style={{
              width: '140px',
              height: '140px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 24px rgba(227,30,36,0.25))',
            }}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.1, delay: 0.55 }}
            className="text-3xl sm:text-4xl font-black relative z-10 mt-6"
            style={{ color: '#FFFFFF' }}
          >
            CIRCLE NAS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase relative z-10 mt-2"
            style={{ color: '#E31E24' }}
          >
            General Contracting
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="text-[11px] tracking-[0.25em] uppercase relative z-10 mt-2"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            UAE Licensed Contractor · Est. 2023
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-9 h-px relative z-10"
            style={{ background: 'rgba(255,255,255,0.15)', width: 160 }}
          >
            <motion.div
              className="h-full origin-left"
              style={{ background: 'linear-gradient(90deg, #E31E24, #1A73E8)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}