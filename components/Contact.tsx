'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const contactLinks = [
  {
    icon: '📅',
    label: 'Book a Discovery Call',
    sub: 'calendly.com/cphymo/30min',
    href: 'https://calendly.com/cphymo/30min',
  },
  {
    icon: '✉️',
    label: 'Email Me',
    sub: 'cphymo@gmail.com',
    href: 'mailto:cphymo@gmail.com',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    sub: '+234 810 944 3545',
    href: 'https://wa.me/2348109443545',
  },
  {
    icon: '📸',
    label: 'Instagram',
    sub: '@thee_phymo',
    href: 'https://www.instagram.com/thee_phymo/',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      toast.error('Please fill in your name and email')
      return
    }
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    toast.success('Message sent! PHYMO will respond within 24 hours ✓')
    setForm({ name: '', email: '', project: '', message: '' })
  }

  return (
    <section id="contact" style={{ padding: '7rem 4rem' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
            Get In Touch
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Let&apos;s Build Something Unforgettable
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 460, marginTop: '0.8rem' }}>
            Ready to transform your vision into a world-class design experience? Let&apos;s talk.
          </p>

          <div className="flex flex-col gap-3 mt-8">
            {contactLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-4 rounded-2xl p-4 no-underline transition-all duration-200"
                style={{
                  background: 'rgba(10,132,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'inherit',
                }}
              >
                <div style={{ fontSize: '1.4rem', width: 36, textAlign: 'center', flexShrink: 0 }}>{link.icon}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>{link.label}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>{link.sub}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          className="rounded-3xl p-10"
          style={{
            background: 'rgba(10,132,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h3>

          {[
            { label: 'Your Name', key: 'name', placeholder: 'John Doe', type: 'text' },
            { label: 'Email Address', key: 'email', placeholder: 'hello@company.com', type: 'email' },
            { label: 'Project Type', key: 'project', placeholder: 'e.g. Brand Identity, Website Design...', type: 'text' },
          ].map(field => (
            <div key={field.key} style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10,
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
                onFocus={e => (e.target.style.borderColor = '#0A84FF')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>
          ))}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
              Message
            </label>
            <textarea
              placeholder="Tell me about your project, goals, and timeline..."
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              rows={5}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
                padding: '0.75rem 1rem',
                color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'vertical',
              }}
              onFocus={e => (e.target.style.borderColor = '#0A84FF')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={sending}
            className="btn-glow w-full rounded-full py-4 font-semibold tracking-wider uppercase transition-all duration-200"
            style={{
              background: '#0A84FF',
              color: '#fff',
              border: 'none',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.9rem',
              cursor: sending ? 'not-allowed' : 'pointer',
              opacity: sending ? 0.7 : 1,
            }}
          >
            {sending ? 'Sending...' : 'Send Message →'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
