'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '@/data'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="work" style={{ padding: '7rem 4rem' }}>
      {/* Header */}
      <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
        Portfolio
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        Selected Work
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginTop: '0.8rem' }}>
        Curated projects spanning brand identity, motion, and digital experiences. Each designed to leave a lasting impression.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-8 mb-10">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className="rounded-full px-5 py-2 text-xs font-medium tracking-wider transition-all duration-200"
            style={{
              background: activeFilter === cat.key ? '#0A84FF' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activeFilter === cat.key ? '#0A84FF' : 'rgba(255,255,255,0.08)'}`,
              color: activeFilter === cat.key ? '#fff' : 'rgba(255,255,255,0.55)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="masonry-item portfolio-card rounded-2xl overflow-hidden cursor-pointer relative"
              style={{
                background: 'rgba(10,132,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Area */}
              <div
                className="w-full flex items-center justify-center relative overflow-hidden"
                style={{
                  height: project.height,
                  background: `linear-gradient(135deg, ${project.colors[0]}22, ${project.colors[1]}44)`,
                }}
              >
                <span style={{ fontSize: '3.5rem', filter: `drop-shadow(0 0 20px ${project.colors[0]}88)` }}>
                  {project.emoji}
                </span>
                {/* Hover Overlay */}
                <div
                  className="card-overlay absolute inset-0 flex items-center justify-center text-sm font-bold tracking-widest uppercase text-white rounded-2xl"
                  style={{ background: 'rgba(10,132,255,0.88)' }}
                >
                  View Case Study →
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.2rem' }}>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A84FF', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {project.tag}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  {project.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  {project.description}
                </div>
                <div className="flex gap-1.5 mt-3">
                  {project.colors.map(c => (
                    <div
                      key={c}
                      style={{ width: 18, height: 18, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[5000] flex items-center justify-center p-8"
            style={{ background: 'rgba(5,8,22,0.95)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-3xl rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                maxHeight: '85vh',
                overflowY: 'auto',
              }}
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Hero */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: 280,
                  background: `linear-gradient(135deg, ${selectedProject.colors[0]}33, ${selectedProject.colors[1]}55)`,
                }}
              >
                <span style={{ fontSize: '6rem', filter: `drop-shadow(0 0 30px ${selectedProject.colors[0]})` }}>
                  {selectedProject.emoji}
                </span>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0A84FF', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {selectedProject.tag}
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                  {selectedProject.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { label: 'Overview', text: selectedProject.description },
                    { label: 'Challenge', text: selectedProject.challenge },
                    { label: 'Result', text: selectedProject.result },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0A84FF', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {item.label}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0A84FF', fontWeight: 700, marginBottom: '0.8rem' }}>
                    Process
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                    {selectedProject.process}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: 'rgba(10,132,255,0.1)',
                        border: '1px solid rgba(10,132,255,0.2)',
                        color: '#4DA3FF',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://calendly.com/cphymo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow rounded-full px-6 py-3 text-sm font-semibold no-underline text-white"
                    style={{ background: '#0A84FF' }}
                  >
                    Discuss a Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full px-6 py-3 text-sm font-medium transition-all"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
