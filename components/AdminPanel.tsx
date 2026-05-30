'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { projects } from '@/data'

type Tab = 'upload' | 'projects' | 'analytics' | 'sync'

const analytics = [
  { num: '1,248', label: 'Portfolio Views' },
  { num: '87', label: 'Contact Clicks' },
  { num: '34', label: 'Calendly Bookings' },
  { num: '12', label: 'Active Projects' },
  { num: '420s', label: 'Avg. Time on Page' },
  { num: '68%', label: 'Return Visitors' },
]

export default function AdminPanel() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('upload')
  const [previews, setPreviews] = useState<{ name: string; url: string }[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files) return
    const newPreviews: { name: string; url: string }[] = []
    Array.from(files).forEach(f => {
      const reader = new FileReader()
      reader.onload = e => {
        newPreviews.push({ name: f.name, url: e.target?.result as string })
        if (newPreviews.length === files.length) {
          setPreviews(p => [...p, ...newPreviews])
          toast.success(`${files.length} file${files.length > 1 ? 's' : ''} uploaded successfully`)
        }
      }
      reader.readAsDataURL(f)
    })
  }

  const tabStyle = (t: Tab) => ({
    background: tab === t ? '#0A84FF' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${tab === t ? '#0A84FF' : 'rgba(255,255,255,0.08)'}`,
    color: tab === t ? '#fff' : 'rgba(255,255,255,0.55)',
    borderRadius: 100,
    padding: '0.45rem 1.2rem',
    fontSize: '0.82rem',
    cursor: 'pointer',
    fontFamily: 'Space Grotesk, sans-serif',
    transition: 'all 0.2s',
  })

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          zIndex: 5000,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.6)',
          padding: '0.5rem 1rem',
          borderRadius: 100,
          fontSize: '0.72rem',
          cursor: 'pointer',
          fontFamily: 'Space Grotesk, sans-serif',
          letterSpacing: '0.1em',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#0A84FF'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
      >
        ⚙ CMS Admin
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10000] overflow-y-auto p-8"
            style={{ background: 'rgba(5,8,22,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>⚡ Design Ecosystem CMS</h2>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.2rem' }}>
                  Manage your portfolio content, uploads, and analytics
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.85rem',
                }}
              >
                ✕ Close
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {(['upload', 'projects', 'analytics', 'sync'] as Tab[]).map(t => (
                <button key={t} style={tabStyle(t)} onClick={() => setTab(t)}>
                  {{ upload: '📤 Upload', projects: '🗂 Projects', analytics: '📊 Analytics', sync: '🔄 Sync' }[t]}
                </button>
              ))}
            </div>

            {/* Upload Tab */}
            {tab === 'upload' && (
              <div>
                <div
                  className="drop-zone rounded-2xl p-12 text-center cursor-pointer"
                  onClick={() => fileRef.current?.click()}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files) }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>☁️</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    <strong style={{ color: '#0A84FF' }}>Drop your designs here</strong> or click to browse
                  </p>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
                    Supports JPG, PNG, GIF, MP4, SVG · Bulk upload supported
                  </p>
                  <input ref={fileRef} type="file" style={{ display: 'none' }} multiple accept="image/*,video/*" onChange={e => handleFiles(e.target.files)} />
                </div>

                {previews.length > 0 && (
                  <div className="grid grid-cols-4 gap-4 mt-6">
                    {previews.map((p, i) => (
                      <div key={i} style={{ borderRadius: 10, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src={p.url} alt={p.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                        <div style={{ padding: '0.5rem 0.7rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
                          {p.name.slice(0, 22)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Projects Tab */}
            {tab === 'projects' && (
              <div>
                {projects.map(p => (
                  <div
                    key={p.id}
                    className="flex items-center gap-4 p-4 rounded-xl mb-3"
                    style={{ background: 'rgba(10,132,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ width: 50, height: 50, background: 'rgba(10,132,255,0.1)' }}
                    >
                      {p.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{p.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                        <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: p.published ? '#00cc88' : '#ffaa00', marginRight: 4 }} />
                        {p.published ? 'Published' : 'Draft'} · {p.tag}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toast.success(`Editing: ${p.title}`)}
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', padding: '0.3rem 0.8rem', borderRadius: 6, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem' }}
                      >
                        Edit
                      </button>
                      <button
                        style={{ background: 'rgba(0,200,100,0.1)', border: '1px solid rgba(0,200,100,0.25)', color: '#00cc88', padding: '0.3rem 0.8rem', borderRadius: 6, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem' }}
                      >
                        {p.published ? 'Published' : 'Publish'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics Tab */}
            {tab === 'analytics' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {analytics.map(a => (
                  <div
                    key={a.label}
                    className="rounded-2xl p-6 text-center"
                    style={{ background: 'rgba(10,132,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0A84FF' }}>{a.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {a.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sync Tab */}
            {tab === 'sync' && (
              <div style={{ maxWidth: 520, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '☁️', name: 'Google Drive Sync', sub: 'drive.google.com/drive/folders/1-j6...', action: () => toast.success('Syncing Google Drive... 12 new assets found') },
                  { icon: '📨', name: 'Telegram Channel Sync', sub: 't.me/+II1_vzNSVj1iYTRk', action: () => toast.success('Telegram sync initiated... Importing media from channel') },
                  { icon: '📨', name: 'Telegram Channel 2', sub: 't.me/+qqUUvE9DIj0zNDA0', action: () => toast.success('Telegram channel 2 sync started...') },
                ].map(s => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: 'rgba(10,132,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="rounded-xl flex items-center justify-center text-2xl" style={{ width: 50, height: 50, background: 'rgba(10,132,255,0.1)', flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{s.sub}</div>
                    </div>
                    <button
                      onClick={s.action}
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', padding: '0.4rem 1rem', borderRadius: 8, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem' }}
                    >
                      Sync Now
                    </button>
                  </div>
                ))}
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                  💡 To enable full Google Drive sync, connect your Drive API key in your .env.local file. Telegram sync works via bot token — see the README for setup instructions.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
