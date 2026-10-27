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
        // FinTech design tokens (Whitish light mode)
        fintech: {
          light: '#F8FAFC',
          card: '#FFFFFF',
          surface: '#F1F5F9',
          emerald: '#10B981',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          slate: '#475569'
        },
        cream: '#F8FAFC',
        navy: '#0F172A',
        'brand-maroon': '#4F46E5',
        'brand-gold': 'rgba(15, 23, 42, 0.06)',
        'brand-cream': '#FFFFFF'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.25)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glass': '0 4px 20px -2px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: [typography]
}
