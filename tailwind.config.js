import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // FinTech design tokens
        fintech: {
          dark: '#0B0F19',
          card: '#131B2E',
          surface: '#1E293B',
          emerald: '#10B981',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          slate: '#94A3B8'
        },
        // Fallback mapping for seamless dark-theme compliance across all legacy components
        cream: '#0B0F19',
        navy: '#F8FAFC',
        'brand-maroon': '#6366F1',
        'brand-gold': 'rgba(255, 255, 255, 0.12)',
        'brand-cream': '#131B2E'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  },
  plugins: [typography]
}

