'use client'

import { motion } from 'framer-motion'
import { skills, timeline } from '@/data'

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 4rem' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

        {/* Visual */}
        <motion.div
          className="relative rounded-3xl flex items-center justify-center overflow-hidden"
          style={{
            aspectRatio: '1',
            background: 'linear-gradient(135deg, rgba(10,132,255,0.2), rgba(77,163,255,0.05))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-visual" style={{ position: 'absolute', inset: 0 }} />
          <span
            className="relative z-10 glow-text"
            style={{ fontSize: '5rem', filter: 'drop-shadow(0 0 30px rgba(10,132,255,0.8))' }}
          >
            ✦
          </span>
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 whitespace-nowrap text-sm font-semibold tracking-wider"
            style={{
              background: 'rgba(5,8,22,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            THEE PHYMO · Creative Designer
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
            About
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Designing Experiences That Connect
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            I'm a Creative Designer and Ecosystem Experience Operator with 6 years of building impactful visuals and seamless digital experiences. My work exists at the intersection of strategy, craft, and culture.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            I believe design is not decoration — it&apos;s communication. Every pixel, motion, and color choice is intentional, purposeful, and driven by the goal of creating genuine connection between people, products, and communities.
          </p>

          {/* Timeline */}
          <div style={{ marginTop: '2.5rem' }}>
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-6 items-start">
                <div
                  className="timeline-dot rounded-full flex-shrink-0 mt-1"
                  style={{ width: 10, height: 10, background: '#0A84FF' }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#0A84FF', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.15rem' }}>
                    {item.year}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                    {item.event}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map(skill => (
              <span
                key={skill}
                className="rounded-full px-4 py-1.5 text-xs font-medium"
                style={{
                  background: 'rgba(10,132,255,0.1)',
                  border: '1px solid rgba(10,132,255,0.2)',
                  color: '#4DA3FF',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
