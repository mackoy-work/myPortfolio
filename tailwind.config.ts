import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#253570',
        'teal-d': '#3d6678',
        'teal-m': '#5b9099',
        sand: '#b5a97a',
        peach: '#fac882',
        cream: '#fdfaf5',
        text: '#080d1a',
        muted: '#1e2a3d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(37, 53, 112, 0.06), 0 8px 24px -8px rgba(37, 53, 112, 0.08)',
        lift: '0 12px 40px -12px rgba(37, 53, 112, 0.12), 0 4px 16px -4px rgba(37, 53, 112, 0.06)',
        glow: '0 0 60px -12px rgba(91, 144, 153, 0.35)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 80% 50% at 20% -20%, rgba(91,144,153,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(250,200,130,0.08), transparent)',
        'mesh-section':
          'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(37,53,112,0.04), transparent)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scanLine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        scanLineV: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.6' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.7s 0.2s forwards',
        'fade-up-2': 'fadeUp 0.7s 0.4s forwards',
        'fade-up-3': 'fadeUp 0.7s 0.6s forwards',
        'fade-up-4': 'fadeUp 0.7s 0.8s forwards',
        'fade-up-5': 'fadeUp 0.8s 0.9s forwards',
        'fade-in-1': 'fadeIn 1s 0.3s forwards',
        'fade-in-2': 'fadeIn 1s 1.5s forwards',
        'scan-line': 'scanLine 1.8s 1.5s infinite',
        'scan-line-v': 'scanLineV 1.8s 1.5s infinite',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spinSlow 25s linear infinite',
        'pulse-ring': 'pulseRing 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
