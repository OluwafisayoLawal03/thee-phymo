'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particlesRef.current) return
    const container = particlesRef.current
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 3 + 1
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * -20}%;
        animation-duration:${Math.random() * 12 + 8}s;
        animation-delay:${Math.random() * 10}s;
      `
      container.appendChild(p)
    }
  }, [])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.3 + delay },
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-8"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,132,255,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(77,163,255,0.1) 0%, transparent 55%),
            #050816
          `,
        }}
      />

      {/* Background Rings */}
      {[500, 750, 1000].map((size, i) => (
        <div
          key={size}
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: size,
            height: size,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: 'rgba(10,132,255,0.1)',
            animation: `pulseRing 6s ease-in-out ${i * 2}s infinite`,
          }}
        />
      ))}

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] max-w-4xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs tracking-[0.1em] uppercase font-semibold"
            style={{
              background: 'rgba(10,132,255,0.12)',
              border: '1px solid rgba(10,132,255,0.3)',
              color: '#4DA3FF',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: '#00ff50',
                animation: 'pulseDot 2s infinite',
              }}
            />
            Available for Projects
          </div>
        </motion.div>

        <motion.h1
          className="font-bold leading-[1.0] tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', letterSpacing: '-0.02em' }}
          {...fadeUp(0.1)}
        >
          I DON&apos;T JUST DESIGN.
          <span className="block" style={{ color: '#0A84FF' }}>
            I CREATE EXPERIENCES
          </span>
          PEOPLE REMEMBER.
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 mb-10 leading-relaxed"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 620,
          }}
          {...fadeUp(0.2)}
        >
          Creative Designer & Ecosystem Experience Operator — crafting impactful
          visuals and seamless digital experiences that connect people, products,
          and communities.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          {...fadeUp(0.3)}
        >
          <a
            href="#work"
            className="btn-glow rounded-full px-8 py-4 font-semibold tracking-wider uppercase no-underline transition-all duration-200"
            style={{ background: '#0A84FF', color: '#fff', fontSize: '0.9rem' }}
          >
            View Portfolio
          </a>
          <a
            href="https://calendly.com/cphymo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 font-medium tracking-wider uppercase no-underline transition-all duration-200"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.9rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#0A84FF'
              e.currentTarget.style.color = '#0A84FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            }}
          >
            Book a Call
          </a>
          <a
            href="mailto:cphymo@gmail.com"
            className="rounded-full px-8 py-4 font-medium tracking-wider uppercase no-underline transition-all duration-200"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.9rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#0A84FF'
              e.currentTarget.style.color = '#0A84FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            }}
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        <span className="text-xs tracking-[0.15em] uppercase">Scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, #0A84FF, transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
