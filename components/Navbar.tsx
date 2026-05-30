'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-16 py-5"
      style={{
        background: scrolled ? 'rgba(5,8,22,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.3 }}
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-[0.12em] no-underline text-white">
        THEE <span style={{ color: '#0A84FF' }}>PHYMO</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="no-underline text-xs tracking-[0.08em] font-medium uppercase transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0A84FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full px-4 py-1.5 text-xs border transition-all duration-200 font-medium tracking-wider"
          style={{
            background: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
        </button>
        <a
          href="https://calendly.com/cphymo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow rounded-full px-6 py-2.5 text-xs font-bold tracking-wider uppercase no-underline transition-all duration-200"
          style={{ background: '#0A84FF', color: '#fff' }}
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  )
}
