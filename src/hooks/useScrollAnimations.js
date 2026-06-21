import { useEffect, useRef, useState } from 'react'

// Hook for scroll-triggered animations
export const useScrollReveal = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

// Hook for counting numbers
export const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && countRef.current) {
          let startValue = 0
          const increment = target / (duration / 16)
          const counter = setInterval(() => {
            startValue += increment
            if (startValue >= target) {
              setCount(target)
              clearInterval(counter)
            } else {
              setCount(Math.floor(startValue))
            }
          }, 16)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [target, duration])

  return { countRef, count }
}

// Hook for mobile menu state
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)

  return { isOpen, toggle, close, open }
}
