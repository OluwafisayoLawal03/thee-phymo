export default function Footer() {
  const socials = [
    { label: '𝕏', href: 'https://x.com/PhenomenalPhymo' },
    { label: 'IG', href: 'https://www.instagram.com/thee_phymo/' },
    { label: 'in', href: 'https://www.linkedin.com/in/thee-phymo-8408062b3/' },
    { label: 'TT', href: 'https://www.tiktok.com/@theephymo' },
  ]

  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-6 px-16 py-12"
      style={{
        background: 'rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em' }}>
        THEE <span style={{ color: '#0A84FF' }}>PHYMO</span>
      </div>

      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
        © {new Date().getFullYear()} Thee Phymo. Designing Experiences That Connect People, Products & Communities.
      </div>

      <div className="flex gap-3">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full flex items-center justify-center text-sm no-underline transition-all duration-200"
            style={{
              width: 38,
              height: 38,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.5)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0A84FF'
              e.currentTarget.style.borderColor = '#0A84FF'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
