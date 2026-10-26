import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#581c2d',
          navy: '#1f2c4d',
          cream: '#f6efe6',
          gold: '#c59d5f',
          sage: '#6e7b58'
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [typography]
}

