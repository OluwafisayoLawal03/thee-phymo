/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#0A84FF',
          glow: '#4DA3FF',
        },
        silver: '#C0C7D1',
        'bg-dark': '#050816',
        'bg-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        clash: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float-up': 'floatUp 10s linear infinite',
        'pulse-ring': 'pulseRing 6s ease-in-out infinite',
        'marquee': 'marquee 22s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-up': 'fadeUp 0.9s ease both',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '80%': { opacity: '0.2' },
          '100%': { transform: 'translateY(-100vh) scale(0.3)', opacity: '0' },
        },
        pulseRing: {
          '0%, 100%': { opacity: '0.3', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.7', transform: 'translate(-50%, -50%) scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,255,80,0.5)' },
          '50%': { boxShadow: '0 0 0 6px rgba(0,255,80,0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
