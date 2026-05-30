'use client'

import { motion } from 'framer-motion'
import { pricing } from '@/data'

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '7rem 4rem' }}>
      <div style={{ color: '#0A84FF', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem' }}>
        Investment
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        Pricing
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginTop: '0.8rem' }}>
        Transparent pricing built around value delivered. Every tier designed for specific needs and timelines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {pricing.map((plan, i) => (
          <motion.div
            key={plan.tier}
            className="rounded-3xl p-10 relative"
            style={{
              background: plan.featured
                ? 'linear-gradient(135deg, rgba(10,132,255,0.15), rgba(77,163,255,0.08))'
                : 'rgba(10,132,255,0.05)',
              border: `1px solid ${plan.featured ? 'rgba(10,132,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {plan.badge && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs px-4 py-1 rounded-full font-bold tracking-wider uppercase whitespace-nowrap"
                style={{ background: '#0A84FF' }}
              >
                {plan.badge}
              </div>
            )}

            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0A84FF', fontWeight: 700 }}>
              {plan.tier}
            </div>
            <div style={{ fontSize: '2.6rem', fontWeight: 700, lineHeight: 1, margin: '0.5rem 0' }}>
              {plan.amount}
              <span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,255,255,0.45)' }}>{plan.period}</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
              {plan.desc}
            </div>

            <ul className="list-none p-0 m-0 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2 py-1.5" style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ color: '#0A84FF', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              target={plan.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="block text-center rounded-full py-3 text-sm font-semibold tracking-wider uppercase no-underline transition-all duration-200"
              style={
                plan.featured
                  ? { background: '#0A84FF', color: '#fff' }
                  : {
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.8)',
                    }
              }
              onMouseEnter={e => {
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = '#0A84FF'
                  e.currentTarget.style.color = '#0A84FF'
                }
              }}
              onMouseLeave={e => {
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                }
              }}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
