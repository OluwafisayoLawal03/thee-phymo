'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services, stats, testimonials } from '@/data'

// ─── Marquee ──────────────────────────────────────────────────────────────────
const marqueeItems = [
  'Logo & Branding', 'Social Media Design', 'Print Design', 'Website Design',
  'Motion Design', '2D & 3D Animation', 'Event Design',
]

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div
      className="overflow-hidden py-5"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(10,132,255,0.03)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.2em] uppercase flex items-center gap-6"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {item}
            <span style={{ color: '#0A84FF', fontSize: '1.1rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    const step = target / 60
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} style={{ color: '#0A84FF', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: '4rem',
        background: 'rgba(10,132,255,0.04)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(s => (
          <div key={s.label}>
            <CountUp target={s.value} suffix={s.suffix} />
            <div
              className="text-xs tracking-[0.1em] uppercase mt-1"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
export function Services() {
  return (
    <section id="services" style={{ padding: '7rem 4rem' }}>
      <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
        What I Do
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        Services
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginTop: '0.8rem' }}>
        Full-spectrum creative services — from strategic brand identity to immersive motion experiences.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            className="service-card rounded-2xl p-8 relative overflow-hidden cursor-default transition-all duration-300"
            style={{
              background: 'rgba(10,132,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.name}</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '7rem 4rem' }}>
      <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
        Client Love
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '3rem' }}>
        What They Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(10,132,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div style={{ color: '#0A84FF', letterSpacing: 2, marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #0A84FF, #4DA3FF)', color: '#fff' }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
